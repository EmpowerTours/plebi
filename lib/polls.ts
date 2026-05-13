import { ensureSchema, getPool } from "./db";
import type { Poll } from "./types";

type Row = {
  id: string;
  question: string;
  options: string[];
  created_at: Date;
  ends_at: Date;
  tallies: number[] | null;
  total_votes: string | number;
};

function toPoll(row: Row): Poll {
  const optCount = row.options.length;
  const tallies: number[] =
    Array.isArray(row.tallies) && row.tallies.length === optCount
      ? row.tallies.map((n) => Number(n))
      : new Array(optCount).fill(0);
  return {
    id: row.id,
    question: row.question,
    options: row.options,
    tallies,
    total_votes: Number(row.total_votes ?? 0),
    created_at: row.created_at.toISOString(),
    ends_at: row.ends_at.toISOString(),
  };
}

const POLL_SELECT = `
  SELECT
    p.id, p.question, p.options, p.created_at, p.ends_at,
    COALESCE(t.tallies, '{}') AS tallies,
    COALESCE(t.total, 0)      AS total_votes
  FROM polls p
  LEFT JOIN LATERAL (
    SELECT
      array_agg(c.count ORDER BY c.idx) AS tallies,
      sum(c.count)                      AS total
    FROM (
      SELECT g.idx, COUNT(v.*)::int AS count
      FROM generate_series(0, jsonb_array_length(p.options) - 1) AS g(idx)
      LEFT JOIN votes v ON v.poll_id = p.id AND v.option_index = g.idx
      GROUP BY g.idx
    ) c
  ) t ON true
`;

export async function createPoll(params: {
  question: string;
  options: string[];
  durationHours: number;
}): Promise<Poll> {
  await ensureSchema();
  const pool = getPool();
  const endsAt = new Date(Date.now() + params.durationHours * 3600 * 1000);
  const { rows } = await pool.query(
    `INSERT INTO polls (question, options, ends_at) VALUES ($1, $2::jsonb, $3) RETURNING id`,
    [params.question.trim(), JSON.stringify(params.options.map((s) => s.trim())), endsAt],
  );
  const poll = await getPoll(rows[0].id);
  if (!poll) throw new Error("create failed");
  return poll;
}

export async function getPoll(id: string): Promise<Poll | null> {
  await ensureSchema();
  const pool = getPool();
  const { rows } = await pool.query(`${POLL_SELECT} WHERE p.id = $1`, [id]);
  if (rows.length === 0) return null;
  return toPoll(rows[0] as Row);
}

export async function listPolls(limit = 12): Promise<Poll[]> {
  await ensureSchema();
  const pool = getPool();
  const { rows } = await pool.query(`${POLL_SELECT} ORDER BY p.created_at DESC LIMIT $1`, [limit]);
  return rows.map((r) => toPoll(r as Row));
}

export async function castVote(params: {
  pollId: string;
  voterId: string;
  optionIndex: number;
}): Promise<{ ok: true } | { ok: false; reason: "not_found" | "ended" | "bad_option" | "already_voted" }> {
  await ensureSchema();
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const r = await client.query(
      `SELECT ends_at, jsonb_array_length(options) AS option_count FROM polls WHERE id = $1 FOR UPDATE`,
      [params.pollId],
    );
    if (r.rowCount === 0) {
      await client.query("ROLLBACK");
      return { ok: false, reason: "not_found" };
    }
    const endsAt: Date = r.rows[0].ends_at;
    const optionCount: number = r.rows[0].option_count;
    if (endsAt.getTime() <= Date.now()) {
      await client.query("ROLLBACK");
      return { ok: false, reason: "ended" };
    }
    if (params.optionIndex < 0 || params.optionIndex >= optionCount) {
      await client.query("ROLLBACK");
      return { ok: false, reason: "bad_option" };
    }
    try {
      await client.query(
        `INSERT INTO votes (poll_id, voter_id, option_index) VALUES ($1, $2, $3)`,
        [params.pollId, params.voterId, params.optionIndex],
      );
    } catch (err: unknown) {
      const code = (err as { code?: string } | null)?.code;
      if (code === "23505") {
        await client.query("ROLLBACK");
        return { ok: false, reason: "already_voted" };
      }
      throw err;
    }
    await client.query("COMMIT");
    return { ok: true };
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}

export async function getVote(pollId: string, voterId: string): Promise<number | null> {
  await ensureSchema();
  const pool = getPool();
  const { rows } = await pool.query(
    `SELECT option_index FROM votes WHERE poll_id = $1 AND voter_id = $2`,
    [pollId, voterId],
  );
  return rows.length === 0 ? null : (rows[0].option_index as number);
}
