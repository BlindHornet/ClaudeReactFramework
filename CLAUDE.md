# Project: [App Name]

**Stack:** React 18 + Vite 5 + Javascript + Tailwind CSS v4
**State:** [Zustand / Context API]
**Data Fetching:** [TanStack Query / plain fetch]
**Routing:** React Router v6
**Testing:** Vitest + React Testing Library

### 1. Code Organization

- Many small files over few large files
- High cohesion, low coupling
- 200-400 lines typical, 800 max per file
- Organize by feature/domain, not by type

### 2. Code Style

- No emojis in code, comments, or documentation
- Immutability always - never mutate objects or arrays
- No console.log in production code
- Proper error handling with try/catch
- Input validation with Zod or similar

### 3. Testing

- TDD: Write tests first
- 80% minimum coverage
- Unit tests for utilities
- Integration tests for APIs
- E2E tests for critical flows

### 4. Security

- No hardcoded secrets
- Environment variables for sensitive data
- Validate all user inputs
- Parameterized queries only
- CSRF protection enabled

## Commands

- `/plan` - Create implementation plan
- `/review` - Review code quality
- `/fix` - Fix build errors
- `/write_tests` - Write tests for the provided argument
- `/commit` - Commit the changes via git rules

## Architecture

| Folder            | What goes here                                    |
| ----------------- | ------------------------------------------------- |
| `src/components/` | Reusable UI — no business logic, no data fetching |
| `src/features/`   | Feature-scoped components + hooks (co-located)    |
| `src/hooks/`      | Shared custom hooks used across features          |
| `src/utils/`      | Pure functions — no side effects, no React        |
| `src/config/`     | App configuration, env vars, constants            |

## Tailwind v4 Rules

- Use CSS custom properties via `@theme` block, NOT `tailwind.config.js`
- Utility classes only — no arbitrary values unless unavoidable
- Dark mode: class strategy via `dark:` prefix

## Coding Standards

- Functional components only, no class components
- Explicit Javascript — no `any`, no implicit returns on complex functions
- Co-locate tests with components: `Button.test.tsx` next to `Button.tsx`
- Named exports preferred over default exports
- Error boundaries on every route

## Git

- Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`
- Never commit to main directly
- PRs require review
- All tests must pass before merge

## Memory

- @memory/decisions.md — architectural choices
- @memory/patterns.md — component patterns
- @memory/gotchas.md — known traps
- @memory/schema.md — database structure

**Update rules:**

- `memory/schema.md` — when any Firestore collection, field, or relationship changes
- `memory/patterns.md` — when a new reusable pattern is established or an existing one changes
- `memory/gotchas.md` — when a new bug or trap is discovered, or after any correction is made
- `memory/decisions.md` — when an architectural decision is made or an existing one is reversed
