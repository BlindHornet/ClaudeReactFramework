# /review

You are doing a code quality review before this work ships. Read the files
that were changed, then check each category below.

## React

- No hooks called conditionally or inside loops
- useEffect has correct dependency arrays — no missing deps, no infinite loops
- No unnecessary re-renders — large lists or expensive values should use useMemo/useCallback
- No prop drilling more than 2 levels deep — suggest context or composition instead
- All async operations inside useEffect have cleanup functions where needed

## TypeScript

- No `any` types
- All function params and return types are explicit
- No non-null assertions (`!`) without a comment explaining why
- Interfaces preferred over inline object types for reusable shapes

## Tailwind CSS v4

- No deprecated v3 syntax (`bg-opacity-*`, `ring-opacity-*`, `divide-opacity-*`, etc.)
- No inline styles when a utility class exists
- No hardcoded color values outside of the `@theme` block in CSS
- Responsive variants used correctly (`sm:`, `md:`, `lg:`)

## General Code Quality

- No `console.log` left in production code
- No hardcoded strings that should be constants or env vars
- No dead code — unused variables, imports, or functions
- Error states and loading states are handled, not silently ignored
- No magic numbers without a named constant explaining what they are

## Security

- No secrets, API keys, or credentials in source code
- Environment variables use `import.meta.env.VITE_*` prefix (not `process.env`)
- No `dangerouslySetInnerHTML` without sanitization

## File & Structure

- New components are in the correct folder (`components/` for reusable UI, `features/` for scoped logic)
- Named exports used — no default exports unless required by the framework
- Test file exists alongside the component if logic is non-trivial

## Output Format

Give a numbered list of issues found. For each one:

- File name and line reference if possible
- What the problem is
- What the fix should be

If nothing is wrong, say "No issues found" and stop. No praise, no summary.
