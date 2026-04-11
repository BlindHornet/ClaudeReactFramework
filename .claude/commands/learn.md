---
allowed-tools: Read, Edit, Glob
description: Capture a lesson or correction and route it to the right file — the compounding engineering loop
---

## Your Task

A mistake was made, a correction was given, or a new pattern emerged. Capture it so it never repeats.

### Step 1 — Identify the lesson

What specifically failed or was discovered? Write one sentence.

### Step 2 — Categorize it

| Category | Description |
|---|---|
| Coding standard | How code should be written |
| Gotcha / trap | Something that broke or surprised |
| Workflow | How tasks, plans, or commits should be handled |
| Architecture decision | A structural choice and its reasoning |
| Pattern | A reusable approach worth repeating |

### Step 3 — Write the rule

One specific, actionable rule. Not "be careful with X" — write "always do Y when Z."

### Step 4 — Route it to the right file

| Scope | File |
|---|---|
| Applies to all future sessions on this project | `CLAUDE.md` — add to the relevant section |
| Code quality rule (how to write code) | `.claude/rules/code-quality.md` — add under MUST / SHOULD / NEVER |
| Known trap or bug pattern | `memory/gotchas.md` |
| Architectural choice | `memory/decisions.md` |
| Reusable component/hook pattern | `memory/patterns.md` |
| Personal/local preference only | `CLAUDE.local.md` |

### Step 5 — Confirm

State: "Added [rule] to [file]."

### Critical Rule

Be specific. Vague lessons ("be more careful") have no value. The rule must be concrete enough that a future session can follow it without asking.
