# Project: [App Name]

**Stack:** React 19 + Vite 5 + Javascript + Tailwind CSS v4
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
- No commented-out code — delete it, git history is the record
- No `TODO` or `FIXME` without an issue number: `// TODO #42: description`

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
- `/ship` - Lint, build, test, then commit
- `/write_tests` - Write tests for the provided argument
- `/scaffold [type] [Name]` - Generate boilerplate (component, page, hook, service)
- `/check [file]` - Audit a file or directory against SEO, a11y, and code rules
- `/learn` - Capture a correction or lesson and route it to the right file
- `/commit` - Commit the changes via git rules

## Architecture

| Folder            | What goes here                                             |
| ----------------- | ---------------------------------------------------------- |
| `src/components/` | Reusable UI — no business logic, no data fetching          |
| `src/features/`   | Feature-scoped components + hooks (co-located)             |
| `src/hooks/`      | Shared custom hooks used across features                   |
| `src/utils/`      | Pure functions — no side effects, no React                 |
| `src/config/`     | App configuration, env vars, constants                     |
| `src/layouts/`    | Page shell components (nav + footer wrappers)              |
| `src/services/`   | API call functions — raw fetch/axios, no React hooks       |
| `src/assets/`     | SVGs, fonts, images — imported via Vite, not via `public/` |
| `src/pages/`      | Route-level entry components — one file per route          |

## Tailwind v4 Rules

- Use CSS custom properties via `@theme` block, NOT `tailwind.config.js`
- Utility classes only — no arbitrary values unless unavoidable
- Dark mode: class strategy via `dark:` prefix

## Design Tokens

Define all tokens in `src/index.css` under `@theme`. Never use raw hex values in components.

```css
@theme {
  /* Brand */
  --color-primary: ...;
  --color-primary-hover: ...;
  --color-secondary: ...;

  /* Semantic feedback */
  --color-success: ...;
  --color-warning: ...;
  --color-danger: ...;
  --color-info: ...;

  /* Surfaces */
  --color-bg: ...;
  --color-surface: ...;
  --color-border: ...;

  /* Text */
  --color-text: ...;
  --color-text-muted: ...;
  --color-text-inverse: ...;
}
```

- WCAG AA contrast minimum: 4.5:1 for body text, 3:1 for large text and UI components
- Dark mode token variants defined alongside light tokens — not as afterthoughts
- Color alone never conveys meaning — pair color with icon or text label

## SEO

### Meta & Document

- Every route needs a unique `<title>` and `<meta name="description">` — use `react-helmet-async`
- Root `<html>` element must have `lang="en"` (or the app's primary language)
- Open Graph tags on every public page: `og:title`, `og:description`, `og:image`, `og:url`
- Twitter card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Canonical `<link rel="canonical">` on every page to prevent duplicate content

### Semantic HTML

- One `<h1>` per page — never skip heading levels (h1 then h3 is wrong)
- Use landmark elements: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`
- Never use a `<div>` or `<span>` where a semantic element fits

### Images

- `alt` text required on every `<img>` — decorative images use `alt=""`
- `loading="lazy"` on all below-the-fold images
- Prefer WebP format — provide fallback via `<picture>` if needed
- Always set explicit `width` and `height` to prevent layout shift (CLS)

### Performance (Core Web Vitals)

- Lazy-load all routes: `React.lazy()` + `<Suspense>`
- `<link rel="preconnect">` in `index.html` for any external origin (fonts, APIs, CDNs)
- No layout shift — define dimensions on images and dynamic content containers

### Public Files

- `public/robots.txt` — always create one, even if permissive
- `public/sitemap.xml` — create for any public-facing app

## Accessibility

- All interactive elements reachable and operable by keyboard alone
- Focus indicators always visible — never `outline: none` without a visible replacement
- Icon-only buttons and links require `aria-label`
- Form inputs always have an associated `<label>` (via `for`/`id` or wrapping)
- Color alone never conveys meaning — pair with text or icon

## Coding Standards

- Functional components only, no class components
- Explicit Javascript — no `any`, no implicit returns on complex functions
- Tests live in a `__tests__/` subfolder next to the source: `src/components/Button/__tests__/Button.test.jsx`
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

Update memory files when: schema changes, new patterns emerge, bugs are discovered, or architectural decisions are made.

## Task Tracking

- `tasks/todo.md` — update whenever a non-trivial task is started, in progress, or completed; write the plan here before touching code
- `tasks/lessons.md` — update after every correction or mistake with the rule derived from it, so the same error is never repeated

**Update rules:**

- `tasks/todo.md` — add items when new work is identified, mark complete as each step finishes
- `tasks/lessons.md` — after any correction (wrong approach, bug introduced, misunderstood requirement), log what happened and the rule going forward
