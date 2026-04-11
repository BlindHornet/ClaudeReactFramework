# Responsive Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Field Foreman to be PC-friendly and visually distinctive using a Rugged Industrial aesthetic — scanline hero, alternating warm/cool section backgrounds, flush card grids, and amber structural accents.

**Architecture:** Targeted className edits only — no new components, no new production dependencies. All visual changes are isolated to their respective component files. CSS theme tokens in `index.css` are updated first so all downstream components can reference the new values.

**Tech Stack:** React 19, Vite 8, Tailwind CSS v4, Vitest + React Testing Library (added as dev deps in Task 1)

**Spec:** `docs/superpowers/specs/2026-04-04-responsive-visual-redesign.md`

---

## File Map

| File | Change |
|---|---|
| `package.json` | Add vitest, @vitest/ui, jsdom, @testing-library/react, @testing-library/jest-dom |
| `vite.config.js` | Add vitest test config block |
| `src/test/setup.js` | New — import @testing-library/jest-dom |
| `src/index.css` | Add `--color-warm-dark`, `--color-near-black` tokens |
| `src/components/layout/Navbar.jsx` | Amber bottom border, near-black background |
| `src/components/layout/Navbar.test.jsx` | New — render test |
| `src/components/layout/Footer.jsx` | Amber top border, near-black background |
| `src/components/layout/Footer.test.jsx` | New — render test |
| `src/features/hero/HeroSection.jsx` | Scanline texture, amber glow div, clamp heading, warm gradient bg, amber span |
| `src/features/hero/HeroSection.test.jsx` | New — render test |
| `src/features/value/ValueSection.jsx` | Warm dark section bg, flush grid (no Card), ghost numbers, amber hover reveal |
| `src/features/value/ValueSection.test.jsx` | New — render test |
| `src/features/newsletter/NewsletterCard.jsx` | Remove emoji, add issue-number badge + date meta row, raw tag style, left border hover |
| `src/features/newsletter/NewsletterCard.test.jsx` | New — render test |
| `src/features/subscribe/SubscribeSection.jsx` | Warm dark background |
| `src/features/subscribe/SubscribeForm.jsx` | Fused input+button (no gap, borderless join) |
| `src/features/subscribe/SubscribeForm.test.jsx` | New — render test |

---

## Task 1: Set up Vitest + React Testing Library

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Create: `src/test/setup.js`

- [ ] **Step 1: Install test dependencies**

```bash
npm install --save-dev vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Expected: packages added to `devDependencies` in `package.json`.

- [ ] **Step 2: Add test script to package.json**

Open `package.json`. Add to the `"scripts"` block:

```json
"test": "vitest",
"test:ui": "vitest --ui",
"coverage": "vitest run --coverage"
```

- [ ] **Step 3: Add vitest config to vite.config.js**

Replace the entire file with:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    globals: true,
  },
})
```

- [ ] **Step 4: Create test setup file**

Create `src/test/setup.js`:

```js
import '@testing-library/jest-dom'
```

- [ ] **Step 5: Verify vitest runs**

```bash
npm test -- --run
```

Expected: "No test files found" or similar — no errors, just no tests yet.

- [ ] **Step 6: Commit**

```bash
git add package.json vite.config.js src/test/setup.js
git commit -m "chore: add vitest and react testing library"
```

---

## Task 2: Add CSS theme tokens

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add new tokens to the @theme block**

Open `src/index.css`. Replace the entire file with:

```css
@import "tailwindcss";

@theme {
  --color-foreman: #d97706;
  --color-foreman-dark: #b45309;
  --color-foreman-light: #fbbf24;
  --color-field: #111827;
  --color-field-mid: #1f2937;
  --color-field-light: #374151;
  --color-dirt: #92400e;
  --color-smoke: #9ca3af;
  --color-warm-dark: #1c1208;
  --color-near-black: #0a0a0a;
  --font-display: "Oswald", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius-card: 0.5rem;
  --radius-btn: 0.375rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-field);
  color: #f9fafb;
  font-family: var(--font-body);
  line-height: 1.6;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/index.css
git commit -m "feat: add warm-dark and near-black theme tokens"
```

---

## Task 3: Navbar — amber border + near-black background

**Files:**
- Modify: `src/components/layout/Navbar.jsx`
- Create: `src/components/layout/Navbar.test.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/layout/Navbar.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  function renderNavbar() {
    return render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
  }

  it('renders the brand name', () => {
    renderNavbar()
    expect(screen.getByText('FIELD FOREMAN')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    renderNavbar()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Archive')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Partner')).toBeInTheDocument()
  })

  it('renders a mobile menu toggle button', () => {
    renderNavbar()
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it passes (component already exists)**

```bash
npm test -- --run Navbar
```

Expected: PASS — we're testing existing behavior, not new behavior.

- [ ] **Step 3: Update Navbar classes**

Open `src/components/layout/Navbar.jsx`. Change the `<nav>` className from:

```jsx
<nav className="sticky top-0 z-50 bg-field border-b border-field-light">
```

to:

```jsx
<nav className="sticky top-0 z-50 bg-near-black border-b-2 border-foreman">
```

- [ ] **Step 4: Run test to verify still passes**

```bash
npm test -- --run Navbar
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Navbar.jsx src/components/layout/Navbar.test.jsx
git commit -m "feat: navbar amber bottom border and near-black background"
```

---

## Task 4: Footer — amber top border + near-black background

**Files:**
- Modify: `src/components/layout/Footer.jsx`
- Create: `src/components/layout/Footer.test.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/layout/Footer.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Footer } from './Footer'

describe('Footer', () => {
  function renderFooter() {
    return render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
  }

  it('renders the brand name', () => {
    renderFooter()
    expect(screen.getByText('FIELD FOREMAN')).toBeInTheDocument()
  })

  it('renders footer nav links', () => {
    renderFooter()
    const links = screen.getAllByRole('link')
    const labels = links.map((l) => l.textContent)
    expect(labels).toContain('Home')
    expect(labels).toContain('Archive')
  })

  it('renders copyright notice', () => {
    renderFooter()
    expect(screen.getByText(/2025 Field Foreman/)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it passes**

```bash
npm test -- --run Footer
```

Expected: PASS

- [ ] **Step 3: Update Footer classes**

Open `src/components/layout/Footer.jsx`. Change the `<footer>` className from:

```jsx
<footer className="bg-field border-t border-field-light mt-auto">
```

to:

```jsx
<footer className="bg-near-black border-t-2 border-foreman mt-auto">
```

- [ ] **Step 4: Run test to verify still passes**

```bash
npm test -- --run Footer
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Footer.jsx src/components/layout/Footer.test.jsx
git commit -m "feat: footer amber top border and near-black background"
```

---

## Task 5: Hero — scanline texture, amber glow, clamp heading, warm gradient

**Files:**
- Modify: `src/features/hero/HeroSection.jsx`
- Create: `src/features/hero/HeroSection.test.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/features/hero/HeroSection.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  function renderHero() {
    return render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    )
  }

  it('renders the main heading', () => {
    renderHero()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders Subscribe Free button', () => {
    renderHero()
    expect(screen.getByRole('link', { name: /subscribe free/i })).toBeInTheDocument()
  })

  it('renders Browse Issues link', () => {
    renderHero()
    expect(screen.getByRole('link', { name: /browse issues/i })).toBeInTheDocument()
  })

  it('renders the eyebrow label', () => {
    renderHero()
    expect(screen.getByText(/weekly ai tips/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it passes (existing component)**

```bash
npm test -- --run HeroSection
```

Expected: PASS

- [ ] **Step 3: Rewrite HeroSection**

Replace the entire content of `src/features/hero/HeroSection.jsx` with:

```jsx
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1006 0%, #111827 40%, #0f1a0f 100%)',
      }}
    >
      {/* Scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)',
        }}
      />

      {/* Amber radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(217,119,6,0.18), transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center px-4 py-20">
        <span className="inline-block text-foreman text-xs font-display uppercase tracking-widest mb-6 border border-foreman/30 px-3 py-1 bg-foreman/5">
          Weekly AI Tips for the Trades
        </span>

        <h1
          className="font-display uppercase font-bold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(42px, 7vw, 80px)', letterSpacing: '2px' }}
        >
          AI Tips for People Who{' '}
          <span className="text-foreman-light">Actually Work</span>{' '}
          for a Living
        </h1>

        <p className="text-smoke text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Field Foreman delivers practical, no-BS AI strategies straight to your inbox every week. Built for the trades. Zero buzzword soup.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="#subscribe">
            <Button variant="primary" size="lg">
              Subscribe Free
            </Button>
          </a>
          <Link to="/archive">
            <Button variant="outline" size="lg">
              Browse Issues
            </Button>
          </Link>
        </div>

        <p className="text-smoke text-sm">
          Joined by HVAC techs, roofers, landscapers &amp; more
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify passes**

```bash
npm test -- --run HeroSection
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/features/hero/HeroSection.jsx src/features/hero/HeroSection.test.jsx
git commit -m "feat: hero scanline texture, amber glow, clamp heading"
```

---

## Task 6: Value Section — warm dark bg, flush grid, ghost numbers

**Files:**
- Modify: `src/features/value/ValueSection.jsx`
- Create: `src/features/value/ValueSection.test.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/features/value/ValueSection.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { ValueSection } from './ValueSection'

describe('ValueSection', () => {
  it('renders the section heading', () => {
    render(<ValueSection />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders all three value card headings', () => {
    render(<ValueSection />)
    expect(screen.getByText(/Prompts That Actually Work/i)).toBeInTheDocument()
    expect(screen.getByText(/No Fluff, Just Signal/i)).toBeInTheDocument()
    expect(screen.getByText(/Tools You Can Use Monday/i)).toBeInTheDocument()
  })

  it('renders ghost numbers for each card', () => {
    render(<ValueSection />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test — ghost numbers test will fail**

```bash
npm test -- --run ValueSection
```

Expected: "renders ghost numbers for each card" FAILS — ghost numbers don't exist yet.

- [ ] **Step 3: Rewrite ValueSection**

Replace the entire content of `src/features/value/ValueSection.jsx` with:

```jsx
const VALUE_CARDS = [
  {
    num: '01',
    title: 'Prompts That Actually Work',
    body: 'Real-world AI prompts tested on job site scenarios — writing customer emails, generating quotes, researching parts. Not theory. Actual copy-paste prompts.',
  },
  {
    num: '02',
    title: 'No Fluff, Just Signal',
    body: "Every issue is 5 minutes max. We cut the buzzword soup and get straight to what matters. Your coffee won't go cold while you're reading.",
  },
  {
    num: '03',
    title: 'Tools You Can Use Monday',
    body: "Software, extensions, and AI tricks that save real time on real jobs. If it doesn't work for a landscaper or an HVAC tech, we don't cover it.",
  },
]

export function ValueSection() {
  return (
    <section className="py-24 px-4 bg-warm-dark border-t border-foreman/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-foreman text-xs font-display uppercase tracking-widest mb-4 border-l-2 border-foreman pl-3">
            What You&apos;re Getting
          </span>
          <h2 className="font-display text-4xl md:text-5xl uppercase font-bold text-white mb-4">
            What You&apos;re Actually Getting
          </h2>
          <p className="text-smoke text-lg max-w-2xl mx-auto">
            Every issue takes under 5 minutes to read and leaves you with something you can use that same week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {VALUE_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-field p-8 relative group border-t-2 border-transparent hover:border-foreman transition-colors duration-300"
            >
              <div
                className="font-display font-bold text-white/5 leading-none mb-4 select-none"
                style={{ fontSize: '64px' }}
              >
                {card.num}
              </div>
              <h3 className="font-display text-lg uppercase font-bold tracking-wider text-foreman-light mb-3">
                {card.title}
              </h3>
              <p className="text-smoke leading-relaxed text-sm">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify passes**

```bash
npm test -- --run ValueSection
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/features/value/ValueSection.jsx src/features/value/ValueSection.test.jsx
git commit -m "feat: value section warm dark bg, flush grid, ghost numbers"
```

---

## Task 7: Newsletter Card — issue badge, remove emoji, raw tag style

**Files:**
- Modify: `src/features/newsletter/NewsletterCard.jsx`
- Create: `src/features/newsletter/NewsletterCard.test.jsx`

The `newsletters` config has no `issueNumber` field. The card will derive a display number from the `id` field (e.g. `"issue-006"` → `"#006"`).

- [ ] **Step 1: Write the failing test**

Create `src/features/newsletter/NewsletterCard.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { NewsletterCard } from './NewsletterCard'

const mockNewsletter = {
  id: 'issue-006',
  title: "5 AI Prompts That'll Save Your HVAC Tech 2 Hours on Friday",
  blurb: 'Friday afternoons are for getting out early.',
  date: '2025-03-01',
  tags: ['HVAC', 'Prompts'],
  coverEmoji: '🔧',
  readUrl: '#',
}

describe('NewsletterCard', () => {
  it('renders the newsletter title', () => {
    render(<NewsletterCard newsletter={mockNewsletter} />)
    expect(screen.getByText(mockNewsletter.title)).toBeInTheDocument()
  })

  it('renders an issue number badge derived from the id', () => {
    render(<NewsletterCard newsletter={mockNewsletter} />)
    expect(screen.getByText('#006')).toBeInTheDocument()
  })

  it('renders all tags', () => {
    render(<NewsletterCard newsletter={mockNewsletter} />)
    expect(screen.getByText('HVAC')).toBeInTheDocument()
    expect(screen.getByText('Prompts')).toBeInTheDocument()
  })

  it('renders a Read Issue link', () => {
    render(<NewsletterCard newsletter={mockNewsletter} />)
    expect(screen.getByRole('link', { name: /read issue/i })).toBeInTheDocument()
  })

  it('does not render the cover emoji', () => {
    render(<NewsletterCard newsletter={mockNewsletter} />)
    expect(screen.queryByText('🔧')).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test — issue badge and no-emoji tests will fail**

```bash
npm test -- --run NewsletterCard
```

Expected: "renders an issue number badge" FAILS, "does not render the cover emoji" FAILS.

- [ ] **Step 3: Rewrite NewsletterCard**

Replace the entire content of `src/features/newsletter/NewsletterCard.jsx` with:

```jsx
import { formatDate } from '@/utils/formatDate'

function parseIssueNumber(id) {
  const match = id.match(/(\d+)$/)
  return match ? `#${match[1].padStart(3, '0')}` : null
}

export function NewsletterCard({ newsletter }) {
  const issueNumber = parseIssueNumber(newsletter.id)

  return (
    <div className="bg-field-mid border-l-4 border-field-light hover:border-foreman transition-colors duration-200 hover:-translate-y-1 transition-transform">
      <div className="p-7 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          {issueNumber && (
            <span className="font-display text-xs uppercase tracking-widest text-foreman bg-foreman/10 border border-foreman/30 px-2 py-0.5">
              Issue {issueNumber}
            </span>
          )}
          <span className="text-smoke text-xs">{formatDate(newsletter.date)}</span>
        </div>

        <h3 className="font-display text-white font-semibold text-lg leading-snug mb-3">
          {newsletter.title}
        </h3>

        <p className="text-smoke text-sm leading-relaxed mb-4 flex-1">
          {newsletter.blurb}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {newsletter.tags.map((tag) => (
            <span
              key={tag}
              className="text-smoke/70 text-xs uppercase tracking-wider border border-field-light px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={newsletter.readUrl}
          className="font-display text-xs uppercase tracking-widest text-foreman hover:text-foreman-light transition-colors"
        >
          Read Issue →
        </a>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify passes**

```bash
npm test -- --run NewsletterCard
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/features/newsletter/NewsletterCard.jsx src/features/newsletter/NewsletterCard.test.jsx
git commit -m "feat: newsletter card issue badge, remove emoji, raw tag style"
```

---

## Task 8: Subscribe — warm dark section + fused input/button

**Files:**
- Modify: `src/features/subscribe/SubscribeSection.jsx`
- Modify: `src/features/subscribe/SubscribeForm.jsx`
- Create: `src/features/subscribe/SubscribeForm.test.jsx`

- [ ] **Step 1: Write the failing test**

Create `src/features/subscribe/SubscribeForm.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeForm } from './SubscribeForm'

describe('SubscribeForm', () => {
  it('renders an email input', () => {
    render(<SubscribeForm />)
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    render(<SubscribeForm />)
    expect(screen.getByRole('button', { name: /join the crew/i })).toBeInTheDocument()
  })

  it('input and button are siblings inside the same form row', () => {
    render(<SubscribeForm />)
    const input = screen.getByPlaceholderText('your@email.com')
    const button = screen.getByRole('button', { name: /join the crew/i })
    expect(input.closest('div')).toBe(button.closest('div'))
  })

  it('updates email value on input', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)
    const input = screen.getByPlaceholderText('your@email.com')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })
})
```

- [ ] **Step 2: Run test to verify passes (existing behavior)**

```bash
npm test -- --run SubscribeForm
```

Expected: PASS — existing component already satisfies these.

- [ ] **Step 3: Update SubscribeSection background**

Open `src/features/subscribe/SubscribeSection.jsx`. Change the section className from:

```jsx
<section id="subscribe" className="py-20 px-4">
```

to:

```jsx
<section id="subscribe" className="py-20 px-4 bg-warm-dark border-t border-foreman/10">
```

- [ ] **Step 4: Update SubscribeForm for fused layout**

Replace the entire content of `src/features/subscribe/SubscribeForm.jsx` with:

```jsx
import { useSubscribe } from '@/hooks/useSubscribe'
import { Button } from '@/components/ui/Button'

export function SubscribeForm() {
  const { email, setEmail, status, errorMsg, submit } = useSubscribe()

  function handleSubmit(e) {
    e.preventDefault()
    submit()
  }

  const buttonLabel =
    status === 'loading' ? 'Sending...' :
    status === 'success' ? "You're In" :
    'Join the Crew'

  const isDisabled = status === 'loading' || status === 'success'

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isDisabled}
          className="flex-1 px-4 py-3 bg-near-black border-2 border-field-light sm:border-r-0 text-white placeholder:text-smoke focus:outline-none focus:border-foreman transition-colors duration-150 disabled:opacity-50"
        />
        <Button
          type="submit"
          variant="primary"
          disabled={isDisabled}
          className="sm:rounded-l-none"
        >
          {buttonLabel}
        </Button>
      </form>

      {status === 'success' && (
        <p className="mt-3 text-sm text-foreman text-center">
          You&apos;re in. Check your inbox — the next issue drops soon.
        </p>
      )}

      {status === 'error' && errorMsg && (
        <p className="mt-3 text-sm text-red-400 text-center">
          {errorMsg}
        </p>
      )}
    </div>
  )
}
```

- [ ] **Step 5: Run test to verify passes**

```bash
npm test -- --run SubscribeForm
```

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/features/subscribe/SubscribeSection.jsx src/features/subscribe/SubscribeForm.jsx src/features/subscribe/SubscribeForm.test.jsx
git commit -m "feat: subscribe section warm dark bg, fused input/button"
```

---

## Task 9: Run all tests + visual verification

**Files:** none — verification only

- [ ] **Step 1: Run full test suite**

```bash
npm test -- --run
```

Expected: All tests PASS. No failures.

- [ ] **Step 2: Start dev server and visually verify**

```bash
npm run dev
```

Open http://localhost:5173 and verify:
- Navbar has amber bottom border, near-black background
- Hero has scanline texture, amber glow behind headline, "Actually Work" in amber/yellow
- Value section has warm dark background, ghost numbers (01/02/03), flush 2px-gap grid
- Newsletter cards show issue badge, no emoji, raw tags, amber left-border on hover
- Subscribe section has warm dark background, input and button are fused on desktop
- Footer has amber top border, near-black background
- On mobile (resize to 375px): all grids are single column, subscribe form stacks vertically

- [ ] **Step 3: Commit if any final tweaks were needed**

```bash
git add -p
git commit -m "fix: visual tweaks from verification pass"
```
