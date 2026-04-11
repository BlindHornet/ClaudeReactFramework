# Code Quality Rules

Applied to all source files in `src/`.

---

## MUST

- Every function has a single, clear responsibility
- All error paths handled explicitly — no empty `catch` blocks, no swallowed errors
- All public APIs and form inputs validated before processing (Zod or equivalent)
- Environment-specific values (URLs, keys, ports) come from `import.meta.env.VITE_*`
- All `TODO` and `FIXME` comments must include an associated issue or ticket number — `// TODO #42: ...`
- `useEffect` must have exhaustive dependency arrays and cleanup for async operations

## SHOULD

- Prefer early returns to reduce nesting depth
- Keep functions under 40 lines — extract helpers when exceeding this
- Prefer immutable data structures — use spread, `Array.map`, `Array.filter` over mutation
- Group imports: external libraries first, then internal (`@/...`), then relative
- Use descriptive variable names — avoid single-letter names except in tight loops (`i`, `j`, `k`)
- Co-locate related logic — hooks near the components that use them, tests next to source

## NEVER

- Leave `console.log` or `debugger` in production code
- Commit commented-out code — use git history instead
- Hardcode HEX, RGB, or named colors in components — use `@theme` design tokens
- Use `export default` — named exports only
- Use inline `style={{}}` attributes where a Tailwind utility exists
- Skip heading levels in HTML (`<h1>` → `<h3>` is wrong)
- Use a `<div>` or `<span>` where a semantic element fits
