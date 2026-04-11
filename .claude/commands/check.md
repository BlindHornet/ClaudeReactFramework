---
allowed-tools: Read, Glob, Grep
description: Audit a file or directory against CLAUDE.md rules — SEO, a11y, design tokens, and code hygiene
---

## Your Task

Audit the specified file or directory. Check only for rule violations — do not suggest refactors or improvements beyond what the rules require.

Usage: `/check [file or directory]`

Examples:
- `/check src/pages/HomePage.jsx`
- `/check src/components/`

### Checklist

**Design Tokens**
- [ ] No hardcoded HEX, RGB, or named colors — only `@theme` tokens
- [ ] No inline `style={{}}` where a Tailwind utility exists
- [ ] Dark mode variants present where light mode tokens are used

**SEO**
- [ ] Page-level components include `<Helmet>` with unique `title` and `description`
- [ ] Open Graph tags present on public pages
- [ ] `<html lang>` set on root
- [ ] One `<h1>` per page — no skipped heading levels
- [ ] `<link rel="canonical">` present

**Accessibility**
- [ ] All `<img>` have `alt` text (decorative = `alt=""`)
- [ ] Below-fold images have `loading="lazy"`
- [ ] Icon-only buttons have `aria-label`
- [ ] All form inputs have an associated `<label>`
- [ ] No `outline: none` without a visible focus replacement
- [ ] Semantic elements used (`<main>`, `<nav>`, `<header>`, etc.)

**Code Hygiene**
- [ ] No `console.log` or `debugger` statements
- [ ] No `export default` — named exports only
- [ ] Env vars use `import.meta.env.VITE_*`
- [ ] No hardcoded secrets or API keys
- [ ] No direct mutation of objects or arrays

## Output Format

Group findings by category. For each violation:

- [File : Line #] — [Rule violated] — [What to fix]

If a category is clean, write: "[Category] — clean."

No praise. No suggestions beyond rule violations.
