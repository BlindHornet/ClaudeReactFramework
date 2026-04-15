# Claude React Framework

A personal project skeleton for React + Vite apps with Claude Code integration built in. Clone this as the base for any new project instead of starting from scratch.

---

## What This Is

A pre-configured starting point that wires together:

- The right folder structure and conventions
- A `CLAUDE.md` that tells Claude how to work in this codebase
- A memory system so Claude builds context across sessions
- Custom slash commands (`/plan`, `/review`, `/fix`, `/ship`)
- Claude Code settings with safe permission defaults

When you start a new project from this base, Claude already knows the stack, the patterns, the rules, and how to help you — without re-explaining it every session.

---

## Stack

| Layer      | Choice                         |
| ---------- | ------------------------------ |
| Framework  | React 19                       |
| Build tool | Vite 5                         |
| Language   | JavaScript                     |
| Styling    | Tailwind CSS v4                |
| State      | React Context + useReducer     |
| Testing    | Vitest + React Testing Library |

---

## Folder Structure

```
src/
  components/   # Reusable UI — no business logic, no data fetching
  features/     # Feature-scoped components + hooks (co-located)
  hooks/        # Shared custom hooks used across features
  utils/        # Pure functions — no side effects, no React
  config/       # App config, env vars, constants
```

---

## Starting a New Project

1. Clone or copy this repo
2. Replace `[App Name]` at the top of `CLAUDE.md` with your project name
3. Fill in your stack choices in `CLAUDE.md` (state, routing, data fetching)
4. Run `npm create vite@latest . -- --template react` to bootstrap the app
5. Install Tailwind v4: `npm install tailwindcss@next @tailwindcss/vite@next`
6. Start building — Claude has context from day one

---

## Claude Integration

### Slash Commands

| Command   | What it does                                                                      |
| --------- | --------------------------------------------------------------------------------- |
| `/plan`   | Think through a task, write a phased plan to `tasks/todo.md` before touching code |
| `/review` | Review code quality, patterns, and correctness                                    |
| `/fix`    | Fix build errors autonomously                                                     |
| `/ship`   | Lint, build, test, then commit with a conventional message                        |

### Memory System

Claude maintains persistent context across sessions in the `memory/` folder:

| File                  | Contents                                            |
| --------------------- | --------------------------------------------------- |
| `memory/decisions.md` | Architectural choices and the reasoning behind them |
| `memory/patterns.md`  | Reusable patterns established in the project        |
| `memory/gotchas.md`   | Known bugs, traps, and lessons learned              |
| `memory/schema.md`    | Data shapes, API endpoints, key relationships       |

Claude updates these automatically when relevant changes happen.

### Agents

| Agent      | Role                                                                 |
| ---------- | -------------------------------------------------------------------- |
| `planner`  | Architecture planning — reads code, writes phased plans, flags risks |
| `reviewer` | Read-only code review — quality gates before committing              |

### Settings

`.claude/settings.json` configures:

- Allowed and denied tool permissions (blocks force push, `rm -rf`, hard resets)
- A `PreToolUse` hook that intercepts destructive bash commands
- An audible beep on session end so you know when Claude finishes
- Telemetry disabled

---

## Conventions

### Git

- Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`
- Never commit directly to `main`
- PRs require review
- All tests must pass before merge

### Code

- Functional components only
- Named exports preferred over default exports
- Immutability always — never mutate objects or arrays
- No `console.log` in production code
- Error boundaries on every route
- Co-locate tests with components: `Button.test.jsx` next to `Button.jsx`

### Tailwind v4

- Design tokens defined in CSS via `@theme {}` — no `tailwind.config.js`
- `bg-opacity-*` removed — use `bg-black/50` syntax
- Dark mode via `dark:` prefix (class strategy)

### Environment Variables

- Always `import.meta.env.VITE_*` — never `process.env`
- Centralize in `src/config/env.js` — never access directly inside components

---

## Task Tracking

`tasks/todo.md` — active work, backlog, and completed items. Claude writes plans here before starting non-trivial tasks and marks items complete as work progresses.

`tasks/lessons.md` — running log of mistakes and the rules derived from them. Claude updates this after every correction.
