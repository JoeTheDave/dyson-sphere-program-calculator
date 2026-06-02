# Dyson Sphere Program Calculator — Technical Reference

## What This Is
A static SPA that calculates production chains for the game Dyson Sphere Program.
Deployed as Nginx-served static files on Fly.io at
https://dyson-sphere-program-calculator.fly.dev/

## Workflow
```yaml
deployments:
  prod:
    branch: master
# feature branches merge straight to master, which auto-deploys to prod
```

## Intentional Deviations from STANDARDS.md
- **No backend** — pure static SPA. Do NOT add Express or any server-side runtime.
- **No database** — all game data is TypeScript constants in `src/lib/recipes.ts`.
- **No auth** — public tool, no user accounts.
- **Nginx, not Node, serves production** — Dockerfile ends with `nginx:alpine`
  serving `dist/` at port 8080. Do NOT replace with an Express server.
- **Single-package repo** — no `client/`/`server/` split. Do NOT restructure into a monorepo.
- **DaisyUI** — intentional UI component layer on top of Tailwind. Do NOT remove.
- **No staging environment** — deploys straight to production on master push.
- **Codified Playwright E2E tests** — the project includes a Playwright suite
  (`tests/e2e/`) that runs in CI, in addition to the done-gate MCP walkthrough.

## Stack
| Layer | In Use |
|-------|--------|
| Frontend | React 18, TypeScript, Vite, React Router v6, Tailwind CSS v4, DaisyUI v5 |
| Backend | None |
| Database | None |
| Auth | None |
| Deployment | Fly.io — app `dyson-sphere-program-calculator`, region `iad` |
| Web server | Nginx (static files, port 8080) |
| CI/CD | GitHub Actions — push to `master` triggers build → test → deploy |
| Node | 20 (`.nvmrc` + Dockerfile) |
| Unit tests | Vitest (772 tests in `tests/lib/`) |
| E2E tests | Playwright, Chromium only (`tests/e2e/`) |

## Repo Structure
```
src/
  assets/        # Game item images + scraped wiki HTML (committed)
  components/    # React components — App, Layout, Router, pages, UI
  lib/           # Static data: recipes.ts, types.ts, util.ts, images.ts
                 # Runtime state: ProductionSpeedContext.ts
  styles/        # index.css (source only — Vite compiles via @tailwindcss/vite)
tests/
  lib/           # Vitest unit tests for src/lib/ logic
  e2e/           # Playwright E2E tests
scripts/         # load-application-artifacts.ts — scrapes wiki → assets/html/
public/          # Vite static assets (favicon)
```

## Data Models
No database schema. All types in `src/lib/types.ts`, all data in `src/lib/recipes.ts`.

| Type | Description |
|------|-------------|
| `Item` | Union of ~160 string literals — every game item |
| `ManufacturingType` | `'assembling' \| 'smelting' \| 'chemical' \| 'physics' \| 'research'` |
| `Recipe` | `{ inputs: Partial<Record<Item, number>>, outputs: Partial<Record<Item, number>>, duration: number, manufacturingType: ManufacturingType }` |
| `ItemInfo` | `{ category: Category, recipes: Recipe[] }` |
| `RecipeList` | `Partial<Record<Item, ItemInfo>>` — master data structure |
| `Category` | enum: element, component, matrix, utility, electricalGrid, logisticsBuilding, productionBuilding, unit, fuelRod, defensiveBuilding, munition, darkFog |
| `ProductionSpeedState` | `{ assembling: 0.75 \| 1 \| 1.5, smelting: 1 \| 2, chemical: 1 \| 2 }` — held in React context |

## API Endpoints
None — static SPA, no backend.

## Frontend Routes
| Path | Component | Notes |
|------|-----------|-------|
| `/` | `Home` | Item selection grid |
| `/recipe/:id` | `Recipe` | Production chain for a specific item |
| `*` | `NotFound` | 404 fallback |

## Environment Variables
None. The app has no runtime configuration — no `.env` file, no `process.env` reads.

## Non-Obvious Conventions
- **All recipe data is static** — `src/lib/recipes.ts` exports a constant. Never fetch game data at runtime.
- **Production speed context** — machine speed multipliers (per manufacturing type) live in `ProductionSpeedContext` at the app root and are consumed by calculation components.
- **Images via manifest** — item images are in `src/assets/images/`; `src/lib/images.ts` maps `Item` keys to image imports.
- **Wiki scraper** — `scripts/load-application-artifacts.ts` uses `cheerio` + `node-fetch` to scrape game wiki HTML into `src/assets/html/`. Run manually; outputs are committed. Never runs in CI.
- **CI native binding workaround** — CI explicitly installs `@tailwindcss/oxide-linux-x64-gnu` and `@rolldown/binding-linux-x64-gnu` after `npm ci` to work around an npm bug (#4828) that skips optional platform-specific dependencies. Versions are extracted dynamically from the installed package to auto-track lockfile upgrades.

## Technical Debt (Do Not Address Unless Explicitly Asked)
- **ESLint legacy config** — `.eslintrc.cjs` (ESLint v8). STANDARDS.md expects flat config.
- **TypeScript strictness gaps** — missing `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`.
- **`JSX.Element` usage** — deprecated; should be `React.ReactElement`.

## Tagged Versions
None yet.
