---
allowed-tools: Read, Glob, Grep, Write, Edit
description: Generate a boilerplate file following project patterns
---

## Your Task

Generate a scaffold for the requested type. Follow existing project patterns exactly — do not invent new ones.

Usage: `/scaffold [type] [Name]`

Examples:
- `/scaffold component Button`
- `/scaffold page Dashboard`
- `/scaffold hook useAuth`
- `/scaffold service userService`

### Scaffold Types

**component** → `src/components/[Name]/[Name].jsx` + `src/components/[Name]/__tests__/[Name].test.jsx`

```jsx
// Named export, no default export
// Props destructured in signature
// Follows: state → derived values → effects → handlers → return
```

**page** → `src/pages/[Name]Page.jsx`

```jsx
// Route-level component
// Wraps in <main> with semantic structure
// Lazy-loadable (no heavy imports at top level)
// Includes react-helmet-async <Helmet> with title and description
```

**hook** → `src/hooks/use[Name].js` + `src/hooks/__tests__/use[Name].test.js`

```js
// Follows useAsync pattern from memory/patterns.md
// Returns { data, loading, error } where applicable
// Named export only
```

**service** → `src/services/[name]Service.js` + `src/services/__tests__/[name]Service.test.js`

```js
// Pure functions only — no React, no hooks
// All functions are named exports
// Each function handles one API operation
// Errors thrown, not swallowed
```

### Rules

- Read `memory/patterns.md` before generating — follow established patterns exactly
- Always generate the test stub alongside the source file
- Never add logic beyond the boilerplate — leave implementation to the developer
- Use `import.meta.env.VITE_*` for any env var references
