# Dyson Sphere Program Calculator — Claude Code Context

## Read these first
- `VISION.md` — what this app is and why
- `PROJECT.md` — how it's built, deployed, and what conventions apply

## Critical conventions
- **No backend, no DB, no auth.** This is a pure static SPA. Do NOT add Express, Prisma, PostgreSQL, or any auth layer.
- **Nginx serves production.** The Dockerfile ends with an `nginx:alpine` stage serving `dist/`. Do NOT change it to a Node server.
- **All game data is static TypeScript** in `src/lib/recipes.ts`. Do NOT add API calls or runtime data fetches.

## Local Dev
```bash
npm install
npm run dev
```
Frontend: http://localhost:5173
