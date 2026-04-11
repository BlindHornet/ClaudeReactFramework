---
allowed-tools: Read, Glob, Grep, EditFile(tasks/todo.md)
description: Technical architecture and phased implementation strategy
---

## Your Task

Act as a Lead Systems Architect. Analyze the codebase and the user's request to create a bulletproof implementation plan. **Do not write any application code.**

### Execution Steps

1. **Discovery:** Use `Glob` and `Read` to audit existing components, hooks, services, and types related to the request.
2. **Impact Mapping:** List every file that will be modified and any new files that need to be created.
3. **The "Elegant" Check:** Evaluate if there is a simpler approach — can a custom hook replace a complex component? Can a utility function replace duplicated logic?
4. **Task Extraction:** Write a prioritized, phased plan into `tasks/todo.md`. Use `[ ]` for pending tasks.

### Plan Structure (in tasks/todo.md)

- **Phase 1: Data & Services** (API calls, service functions, data shapes)
- **Phase 2: Core Logic** (Hooks, utils, type definitions)
- **Phase 3: UI / Components** (Tailwind v4 styling, React components)
- **Phase 4: Verification** (Unit tests, build check)

### Critical Rules

- **No Implementation:** If you start writing `export function...` before the plan is approved, you have failed.
- **Context Awareness:** Reference existing naming conventions (`camelCase` for variables, `PascalCase` for components).
- **Stack Awareness:** Respect Tailwind v4 CSS-variable-first theme structure, Vite env vars (`import.meta.env.VITE_*`), and React Router v6 patterns.
