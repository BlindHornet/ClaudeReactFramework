---
allowed-tools: Bash(npm run:*), Bash(git status:*), Bash(git diff:*), EditFile(tasks/todo.md)
description: Pre-deployment verification and automated shipping workflow
---

## Your Task

Execute the high-integrity shipping sequence for the current work. **Stop immediately if any step fails.**

### Step 1: Quality Control

Run the following commands in order:

1. `npm run lint` — If errors exist, fix them automatically or report them.
2. `npm run build` — Confirm no Vite build errors.
3. `npm run test` — Ensure all unit and integration tests pass.

### Step 2: Verification

Review the `git diff` and check for:

- Hardcoded API keys, tokens, or credentials
- `console.log` or `debugger` statements
- `TODO:` comments left in code
- Raw HEX or RGB values that should be design tokens
- Any `export default` where named exports are required

### Step 3: Persistence

- **Commit:** Use `/commit` to create a conventional commit based on the changes.
- **Documentation:** Open `tasks/todo.md` and mark relevant items complete with `[x]`.

### Critical Rules

- **Hard Stop:** If `npm run build` or `npm run test` fails, DO NOT proceed to commit. Report the error.
- **Tailwind v4 Check:** Ensure no `tailwind.config.js` was accidentally recreated during the build.
