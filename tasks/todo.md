# Task Tracker — Field Foreman Website

## Active

<!-- Claude marks one item in_progress at a time -->

## Backlog

<!-- Features and fixes queued up -->

## Completed

<!-- Move items here when done — keeps a record of what shipped -->

---

# Implementation Plan — Field Foreman Newsletter Site

## Overview

A marketing + newsletter hub for "Field Foreman" — a witty, straight-talking AI tips publication
targeting blue collar trades (HVAC, roofing, landscaping, pressure washing, etc.).

**MVP Goals:**
- Email subscription capture (Beehiiv embed)
- Newsletter archive browser with 4-6 placeholder issues
- Shop teaser for AI prompt packs + "The Pocket Foreman" Chrome extension (waitlist)
- Partner/advertise page with ad tier pricing + inquiry form
- Beautiful, bold, trade-worker aesthetic — not corporate, not boring

**Resolved decisions:**
- Email service: Beehiiv — subscribe form posts to Beehiiv embed URL via `VITE_BEEHIIV_FORM_URL`
- Deploy: Netlify (future migration to Bluehost is DNS-level, no build changes needed)
- Newsletter content: 4-6 realistic AI-for-trades placeholder issues
- Shop: Pocket Foreman = waitlist only (`comingSoon: true`), prompt packs same
- Logo: Text-only — "FIELD FOREMAN" in Oswald, amber colored

**Stack:** React 18 + Vite 5 + JavaScript + Tailwind CSS v4 + React Router v6

---

## Site Map

| Route         | Page              | Description                                           |
| ------------- | ----------------- | ----------------------------------------------------- |
| `/`           | Home              | Hero, value prop, subscribe CTA, recent issues teaser |
| `/archive`    | Newsletter Archive| Full grid of past issues, filterable                  |
| `/shop`       | Shop              | Prompt packs + Pocket Foreman extension cards         |
| `/shop/:slug` | Product Detail    | Individual product page (Phase 2)                     |
| `/partner`    | Partner With Us   | Ad tier pricing, audience stats, inquiry form         |

---

## Design Direction

**Aesthetic:** Bold, industrial, no-nonsense. Like a well-worn field notebook — not Silicon Valley.

**Color System (Tailwind v4 `@theme` tokens):**
```css
--color-foreman: #d97706;       /* amber/orange — primary brand */
--color-foreman-dark: #b45309;
--color-foreman-light: #fbbf24;
--color-field: #111827;         /* near-black base */
--color-field-mid: #1f2937;     /* card backgrounds */
--color-field-light: #374151;   /* borders, subtle surfaces */
--color-dirt: #92400e;          /* earthy brown accent */
--color-smoke: #9ca3af;         /* muted text */
--font-display: "Oswald", sans-serif;  /* bold, industrial headlines */
--font-body: "Inter", sans-serif;      /* clean body copy */
--radius-card: 0.5rem;
--radius-btn: 0.375rem;
```

**Typography rules:**
- Headlines: Oswald, uppercase, bold, large
- Body: Inter, regular, generous line-height
- Accent text: amber/orange for emphasis

---

## Phase 1 — Project Bootstrap & Data Layer

> No backend needed for MVP. Static data + third-party email service.

### 1.1 — Vite project scaffold

- [ ] Run `npm create vite@latest . -- --template react` inside `foreman/`
- [ ] Install dependencies: `react-router-dom`, `tailwindcss@next` (v4)
- [ ] Set up `vite.config.js` with `@/` alias pointing to `src/`
- [ ] Configure `src/index.css` with Tailwind v4 `@import` and full `@theme` block
- [ ] Add Google Fonts import for Oswald + Inter (via `<link>` in `index.html`)
- [ ] Create `.env.example` with `VITE_BEEHIIV_FORM_URL` and `VITE_PARTNER_FORM_URL` placeholders
- [ ] Create `netlify.toml` — SPA redirect rule (`/* → /index.html 200`), build command, publish dir

### 1.2 — Static data files

- [ ] Create `src/config/newsletters.js` — 4-6 realistic placeholder issues
  ```js
  // Shape: { id, slug, title, blurb, date, tags: [], coverEmoji, readUrl }
  // Example issues:
  // "5 AI Prompts That'll Save Your HVAC Tech 2 Hours on Friday"
  // "How a Roofer Used ChatGPT to Write Every Customer Follow-Up This Month"
  // "The Landscaper's Cheat Sheet: AI for Quotes, Scheduling, and Angry Clients"
  // "Pressure Washing & AI: A Love Story Nobody Asked For (But Everyone Needs)"
  // "AI-Generated Job Site Safety Checklists That Actually Hold Up"
  // "Stop Googling Parts Numbers — Here's a Better Way"
  ```
- [ ] Create `src/config/products.js` — array of shop product objects
  ```js
  // Shape:
  { id, slug, name, tagline, description, price, badge, comingSoon, imageUrl }
  ```
- [ ] Create `src/config/adTiers.js` — static array of advertising tier objects
  ```js
  // Shape: { id, name, price, billingPeriod, spots, description, perks: [], badge }
  // Tiers: Shout-Out ($X/mo), Sponsored Section ($X/mo), Title Sponsor ($X/mo)
  ```
- [ ] Create `src/config/env.js` — centralizes all `import.meta.env.VITE_*` access

### 1.3 — Router setup

- [ ] Create `src/router/index.jsx` — React Router v6 `createBrowserRouter` with lazy-loaded pages
- [ ] Wrap app in `<RouterProvider>` in `src/main.jsx`

---

## Phase 2 — Core Logic (Hooks + Utilities)

### 2.1 — Subscribe hook

- [ ] Create `src/hooks/useSubscribe.js`
  - State: `{ email, status: 'idle' | 'loading' | 'success' | 'error', errorMsg }`
  - `submit(email)` — POSTs to Beehiiv embed URL from `config/env.js`
  - Validates email with a simple regex before submitting
  - Returns `{ email, setEmail, status, submit }`

### 2.2 — Partner inquiry hook

- [ ] Create `src/hooks/usePartnerInquiry.js`
  - State: `{ fields, status: 'idle' | 'loading' | 'success' | 'error' }`
  - Fields: `{ name, company, email, tier, message }`
  - `submit(fields)` — POSTs to `VITE_PARTNER_FORM_URL` (Netlify Forms or a form service)
  - Validates all required fields before submitting
  - Returns `{ fields, setField, status, submit }`

### 2.3 — Utility functions

- [ ] Create `src/utils/formatDate.js` — formats ISO date strings to "March 2025" style
- [ ] Create `src/utils/cn.js` — simple class name joiner utility (no need for clsx dep)

---

## Phase 3 — UI Components & Pages

Build order: primitives → layout → features → pages.

### 3.1 — Primitive UI components (`src/components/ui/`)

- [ ] `Button.jsx` — variants: `primary` (amber fill), `outline` (amber border), `ghost`
- [ ] `Badge.jsx` — small label chip, variants: `default`, `new`, `coming-soon`
- [ ] `Input.jsx` — styled text input, dark background, amber focus ring
- [ ] `Card.jsx` — dark surface card with optional hover lift

### 3.2 — Layout components (`src/components/layout/`)

- [ ] `Navbar.jsx`
  - Logo: "FIELD FOREMAN" in Oswald, amber colored
  - Nav links: Home, Archive, Shop
  - Mobile: hamburger menu with slide-down drawer
  - Sticky, dark background, subtle bottom border
- [ ] `Footer.jsx`
  - Logo + tagline
  - Nav links grouped: Site, Legal
  - "Built for the people who actually build things" — cheeky CTA
  - Social icons (placeholder)
- [ ] `PageWrapper.jsx` — consistent page container with max-width + padding

### 3.3 — Feature: Hero (`src/features/hero/`)

- [ ] `HeroSection.jsx`
  - Full-viewport section, dark background
  - Bold Oswald headline: "AI Tips for People Who Actually Work for a Living"
  - Subheadline: brief punchy description of the newsletter
  - Two CTAs: "Subscribe Free" (primary amber button) + "Browse Issues" (ghost)
  - Background: subtle texture or geometric pattern (CSS-only, no images required)
  - Small trust line below: "Trusted by X HVAC techs, roofers, and landscapers" (placeholder)

### 3.4 — Feature: Value Prop (`src/features/value/`)

- [ ] `ValueSection.jsx`
  - 3-column grid of cards explaining what readers get
  - Card 1: "Prompts That Actually Work" — real-world AI prompts for job site problems
  - Card 2: "No Fluff, Just Signal" — short reads, 5 min max, zero buzzword soup
  - Card 3: "Tools You Can Use Monday" — software, extensions, time-saving tricks
  - Icons: simple inline SVGs (wrench, lightning bolt, toolbox)
  - Amber accent on icons, dark card backgrounds

### 3.5 — Feature: Subscribe (`src/features/subscribe/`)

- [ ] `SubscribeForm.jsx` — email input + submit button, uses `useSubscribe` hook
  - Shows inline success message on submission
  - Shows inline error message on failure
  - Loading spinner state on button
- [ ] `SubscribeSection.jsx` — full-width section wrapping SubscribeForm
  - "Don't Miss the Next One" headline
  - "Join the crew getting smarter every week" subtext
  - Centered layout, amber accent bar at top of section

### 3.6 — Feature: Newsletter (`src/features/newsletter/`)

- [ ] `NewsletterCard.jsx`
  - Takes one newsletter object
  - Shows: cover emoji (large), title, blurb, date badge, tag chips
  - "Read Issue" link styled as ghost button
  - Hover: subtle lift + amber left-border accent
- [ ] `NewsletterGrid.jsx` — responsive grid (1 col mobile, 2 tablet, 3 desktop)
- [ ] `RecentIssuesSection.jsx` — shows 3 most recent, "See All Issues" link

### 3.7 — Feature: Shop (`src/features/shop/`)

- [ ] `ProductCard.jsx`
  - Takes one product object
  - Shows: name, tagline, price or "Coming Soon" badge
  - "Get It" or "Join Waitlist" CTA button
  - Amber highlight on hover
- [ ] `ProductGrid.jsx` — 2-column grid (stacks on mobile)
- [ ] `ShopHero.jsx` — shop page header: "The Foreman's Tool Chest" headline + subtext

### 3.8 — Pages

- [ ] `src/pages/HomePage.jsx`
  - Sections in order: HeroSection, ValueSection, RecentIssuesSection, SubscribeSection
- [ ] `src/pages/ArchivePage.jsx`
  - PageWrapper + "All Issues" heading + NewsletterGrid (full list)
  - Simple tag filter buttons at top (All, HVAC, Roofing, Landscaping, etc.)
- [ ] `src/pages/ShopPage.jsx`
  - ShopHero + ProductGrid + SubscribeSection (teaser)
- [ ] `src/pages/NotFoundPage.jsx`
  - 404 page: "Lost on the job site?" — link back home

### 3.10 — Feature: Partner With Us (`src/features/partner/`)

- [ ] `AudienceStats.jsx`
  - 3-4 stat cards: subscribers, open rate, industries covered, avg CTR
  - Amber number, label below, dark card — leads with credibility
- [ ] `AdTierCard.jsx`
  - Takes one ad tier object
  - Shows: tier name, price/billing, spots available badge, perks list, CTA button
  - "Most Popular" badge variant for middle tier
  - Hover: amber border glow
- [ ] `AdTierGrid.jsx` — 3-column grid (stacks to 1 on mobile)
- [ ] `PartnerInquiryForm.jsx`
  - Fields: Name, Company, Email, Ad Tier (select), Message
  - Uses `usePartnerInquiry` hook
  - Success message: "We'll be in touch before the next issue drops."
  - Uses Netlify Forms (`netlify` attribute on `<form>`) — no separate form service needed
- [ ] `PartnerHero.jsx`
  - Headline: "Get Your Brand in Front of the Trades"
  - Subtext: audience description, newsletter tone pitch
  - "No fluff sponsorships. Real reach. Real workers."

### 3.11 — Partner page

- [ ] `src/pages/PartnerPage.jsx`
  - Sections: PartnerHero, AudienceStats, AdTierGrid, PartnerInquiryForm
  - Add "Partner" link to Navbar

### 3.9 — Error Boundaries

- [ ] `src/components/ErrorBoundary.jsx` — class-based, wraps each route

---

## Phase 4 — Verification

- [ ] Run `npm run build` — zero warnings, zero errors
- [ ] Run `npm run dev` — verify all pages load, routing works
- [ ] Manual checklist:
  - [ ] Subscribe form validates email and shows success state
  - [ ] Newsletter archive renders all 6 placeholder issues with correct tags
  - [ ] Shop renders all products — Pocket Foreman shows waitlist badge/state
  - [ ] Partner page shows 3 ad tiers, inquiry form validates and shows success
  - [ ] Netlify Forms `netlify` attribute present on partner inquiry form
  - [ ] Mobile nav opens/closes correctly, all links present including Partner
  - [ ] All routes accessible and 404 page works
  - [ ] Dark aesthetic consistent across all pages
  - [ ] Oswald + Inter fonts loading from Google Fonts
  - [ ] `netlify.toml` SPA redirect rule present

---

## File Impact Map

### New files to create

```
foreman/
  src/
    main.jsx
    App.jsx
    index.css                          # Tailwind v4 @theme tokens
    router/
      index.jsx
    config/
      env.js
      newsletters.js
      products.js
      adTiers.js
    hooks/
      useSubscribe.js
      usePartnerInquiry.js
    utils/
      formatDate.js
      cn.js
    components/
      ui/
        Button.jsx
        Badge.jsx
        Input.jsx
        Card.jsx
      layout/
        Navbar.jsx
        Footer.jsx
        PageWrapper.jsx
      ErrorBoundary.jsx
    features/
      hero/
        HeroSection.jsx
      value/
        ValueSection.jsx
      subscribe/
        SubscribeForm.jsx
        SubscribeSection.jsx
      newsletter/
        NewsletterCard.jsx
        NewsletterGrid.jsx
        RecentIssuesSection.jsx
      shop/
        ProductCard.jsx
        ProductGrid.jsx
        ShopHero.jsx
      partner/
        PartnerHero.jsx
        AudienceStats.jsx
        AdTierCard.jsx
        AdTierGrid.jsx
        PartnerInquiryForm.jsx
    pages/
      HomePage.jsx
      ArchivePage.jsx
      ShopPage.jsx
      PartnerPage.jsx
      NotFoundPage.jsx
  netlify.toml
  index.html
  vite.config.js
  package.json
  .env.example
```

---

## Elegant Architecture Notes

1. **No backend for MVP.** Static data in `config/` files is enough to ship fast. When real
   newsletters need to come from a CMS, swap `config/newsletters.js` for a TanStack Query hook
   against Contentful or Notion API — the component contracts don't change.

2. **Subscribe form is service-agnostic.** `useSubscribe` POSTs to a URL from env. Plug in
   ConvertKit, Mailchimp, or Beehiiv's form endpoint — no code change, just update `.env`.

3. **Shop is placeholder-ready.** `comingSoon: true` flag on products renders a badge + disables
   the CTA. When Stripe is wired up, set `comingSoon: false` and add a `stripeUrl` field.
   Product detail pages (`/shop/:slug`) are reserved in the router but not built until needed.

4. **Tag filtering on archive is pure derived state** — no library needed. Filter the static array
   in component, no server call.

5. **Fonts via Google Fonts** avoids a font npm dependency. Self-host later if performance becomes
   a concern (use `next/font` pattern if migrating, or `fontsource` packages).

6. **Partner inquiry form uses Netlify Forms** — zero-config, no third-party service needed.
   Netlify detects the `netlify` attribute at deploy time and wires up form submissions automatically.
   Responses land in the Netlify dashboard. Upgrade to Zapier/email notification later if volume grows.

7. **Ad tier pricing is static** — defined in `src/config/adTiers.js`. Easy to update without
   touching components. When payment processing is added, each tier gets a Stripe Payment Link URL.

---

## All questions resolved — ready to build.

---

<!--
FORMAT:
- [ ] Task description
- [x] Completed task

Claude should:
1. Write a plan here before starting any non-trivial task
2. Check in before implementing
3. Mark items complete as work progresses
4. Add a ## Review section below completed work summarizing what changed
-->
