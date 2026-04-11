# Field Foreman — Responsive Visual Redesign

**Date:** 2026-04-04
**Status:** Approved

## Problem

The site has two issues:
1. **Not PC-friendly** — the hero fills full viewport with centered text and no visual weight on wide screens; sections bleed into each other with near-identical dark grey backgrounds.
2. **Bland** — very flat, low-contrast sections, the hero texture is invisible (opacity 0.03), no visual rhythm or hierarchy between sections.

## Design Decisions

### Visual Direction: Rugged Industrial
Heavy typography, high contrast, raw structural feel. Amber as a strong accent. Feels like a toolbox built for tradespeople — not a tech startup.

### Hero: Full-bleed with scanline texture + amber glow
- Keep `min-h-screen` full-bleed approach
- Replace the near-invisible diagonal pattern with horizontal scanlines (`repeating-linear-gradient`) at 18% opacity
- Add a `radial-gradient` amber glow (`rgba(217,119,6,0.18)`) centered behind the headline
- Background uses a warm-to-cool gradient (`#1a1006 → #111827 → #0f1a0f`)
- Headline uses `clamp()` sizing for fluid scaling from mobile to 4K
- Highlight "Actually Work" in `#fbbf24` for visual punch

### Section Rhythm: Alternating Warm / Cool backgrounds
Alternate between pure dark (`#111827`) and warm dark brown-black (`#1c1208`) with a subtle amber border (`rgba(217,119,6,0.15)`) between transitions. No divider lines — just background contrast.

| Section | Background |
|---|---|
| Hero | warm gradient `#1a1006 → #111827` |
| Value | warm dark `#1c1208` |
| Recent Issues | cool dark `#111827` |
| Subscribe | warm dark `#1c1208` |
| Footer | near-black `#0a0a0a` |

### Navbar
- Change bottom border from `border-field-light` (grey) to `border-foreman` (amber, 2px)
- Background changes from `bg-field` to near-black (`#0a0a0a`) to anchor the top of the page

### Value Section
- Remove the `Card` component wrapper — use flat flush cards with `2px` gap (no rounded corners, no padding between cards)
- Add large ghost numbers (`01`, `02`, `03`) as decorative background element
- Add an amber top-edge reveal on hover (`scaleX` transform from left)
- Replace SVG icons with the numbered system — cleaner, more industrial

### Newsletter Cards
- Replace `border-l-4 border-transparent` hover with a permanent visible border (`border-field-light`) that turns amber on hover
- Add issue number badge (e.g. "Issue #14") styled as a small amber-tinted label
- Tags styled as raw unstyled labels (small uppercase, grey border, no background fill)
- Remove cover emoji — replace with issue number + date meta row

### Subscribe Section
- Fuse the email input and submit button — remove gap, input has `border-right: none`, button is flush against it
- Input background: near-black (`#0a0a0a`) with a grey border that turns amber on focus

### Footer
- Add `border-top: 2px solid #d97706` — mirrors the navbar bottom border, frames the page
- Background: near-black `#0a0a0a`

## Implementation Approach

**Targeted polish — edit className strings only.** No structural changes, no new files, no new components. All changes are in:

- `src/index.css` — new `@theme` tokens and one new body background value
- `src/components/layout/Navbar.jsx` — border + background tweak
- `src/components/layout/Footer.jsx` — border + background tweak
- `src/components/ui/Card.jsx` — add border-left variant
- `src/features/hero/HeroSection.jsx` — new background treatment, clamp sizing, amber glow div
- `src/features/value/ValueSection.jsx` — replace Card with flat grid, add ghost numbers
- `src/features/newsletter/NewsletterCard.jsx` — new meta row, replace emoji, tag style
- `src/features/subscribe/SubscribeSection.jsx` — section background
- `src/features/subscribe/SubscribeForm.jsx` — fused input+button layout

## Responsive Requirements

- All changes must remain mobile-first
- Navbar hamburger menu stays — no changes to mobile nav logic
- Value grid: `grid-cols-1 md:grid-cols-3` — no change to breakpoints
- Newsletter grid: `grid-cols-1 md:grid-cols-3` — no change
- Hero headline: `clamp(42px, 7vw, 80px)` via inline style or Tailwind arbitrary value
- Subscribe form: stacked on mobile (`flex-col sm:flex-row`), fused on sm+

## Out of Scope

- No changes to routing, page structure, or component logic
- No changes to Shop, Partner, or Archive pages (unless visual tokens carry through automatically)
- No new dependencies
- No animation library — CSS transitions only
