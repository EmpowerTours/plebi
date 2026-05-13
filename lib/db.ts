import { Pool } from "pg";

declare global {
  // eslint-disable-next-line no-var
  var __pgPool: Pool | undefined;
  // eslint-disable-next-line no-var
  var __pgMigrated: boolean | undefined;
}

function buildPool(): Pool {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set. Add it to .env or your Railway service variables.");
  }
  const ssl =
    process.env.PGSSLMODE === "require" ||
    /sslmode=require/i.test(connectionString) ||
    /supabase\.co|neon\.tech|railway\.app/.test(connectionString)
      ? { rejectUnauthorized: false }
      : false;

  return new Pool({ connectionString, ssl, max: 5 });
}

export function getPool(): Pool {
  if (!global.__pgPool) global.__pgPool = buildPool();
  return global.__pgPool;
}

const MIGRATION_SQL = `
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS polls (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question    TEXT NOT NULL,
  options     JSONB NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  ends_at     TIMESTAMPTZ NOT NULL,
  CHECK (jsonb_array_length(options) BETWEEN 2 AND 8),
  CHECK (length(question) BETWEEN 1 AND 240)
);

CREATE TABLE IF NOT EXISTS votes (
  poll_id      UUID NOT NULL REFERENCES polls(id) ON DELETE CASCADE,
  voter_id     TEXT NOT NULL,
  option_index INT  NOT NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (poll_id, voter_id),
  CHECK (option_index >= 0)
);

CREATE INDEX IF NOT EXISTS polls_created_at_idx ON polls (created_at DESC);
CREATE INDEX IF NOT EXISTS votes_poll_id_idx ON votes (poll_id);
`;

export async function ensureSchema(): Promise<void> {
  if (global.__pgMigrated) return;
  const pool = getPool();
  await pool.query(MIGRATION_SQL);
  global.__pgMigrated = true;
}
