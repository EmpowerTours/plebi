# Plebi

Quick public polls, shared by link. No accounts, no integrations — type a question, list options, share the URL, watch votes come in live.

## Stack

- Next.js 15 (App Router, standalone output)
- Postgres (any provider: Railway, Supabase, Neon, local)
- Tailwind CSS
- Single dependency for QR codes; no auth, no ORM, no client framework beyond React

## Quickstart

```bash
git clone <this repo> plebi && cd plebi
npm install
cp .env.example .env       # fill in DATABASE_URL
npm run dev
```

Open <http://localhost:3000>.

Schema is created automatically on first request (`ensureSchema()` in `lib/db.ts`).

### Local Postgres in Docker

```bash
docker run -d --rm --name plebi-pg \
  -e POSTGRES_PASSWORD=plebi -e POSTGRES_USER=plebi -e POSTGRES_DB=plebi \
  -p 55432:5432 postgres:16-alpine

export DATABASE_URL=postgres://plebi:plebi@127.0.0.1:55432/plebi
export PGSSLMODE=disable
npm run dev
```

## API

| Method | Path                       | Body                                           | Returns                  |
| ------ | -------------------------- | ---------------------------------------------- | ------------------------ |
| `GET`  | `/api/polls`               | —                                              | `{ polls: Poll[] }` (12) |
| `POST` | `/api/polls`               | `{ question, options[], durationHours }`       | `{ poll: Poll }`         |
| `GET`  | `/api/polls/:id`           | —                                              | `{ poll, myVote }`       |
| `POST` | `/api/polls/:id/vote`      | `{ voterId, optionIndex }`                     | `{ ok }` or `{ error }`  |

One vote per `voterId` per poll (enforced by composite PK). The browser generates and persists a random `voterId` in `localStorage`.

## Deploy (Railway)

1. New project → "Deploy from GitHub repo".
2. Attach the Postgres plugin. `DATABASE_URL` is injected automatically.
3. Set `PGSSLMODE=require` in the service variables.
4. Railway picks up `railway.json` and runs `npm run start`.

## Project layout

```
app/
  api/polls/[...]/route.ts   REST endpoints
  p/[id]/page.tsx            individual poll page
  page.tsx                   home (create + recent)
components/                  UI (CreatePollForm, PollVoter, etc.)
lib/
  db.ts                      pg Pool + auto-migration
  polls.ts                   create / get / list / vote
  voterId.ts                 localStorage-backed anonymous ID
```

## License

Proprietary. © 2025 EmpowerTours SAS. See [LICENSE](./LICENSE) — no copy, modify, or distribute without written permission.
