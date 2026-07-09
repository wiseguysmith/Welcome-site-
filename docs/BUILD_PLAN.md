# BUILD PLAN — elijah.mindfultech.services
## v2 Rebuild: "The Gap"

**For:** Codex (or any coding agent)
**Date:** July 2026
**Status of this doc:** Approved for implementation. Strategy is locked — do not relitigate brand decisions. Where content is missing, use the marked placeholders; do not invent biography.

---

## 0. CONTEXT — WHAT EXISTS AND WHAT THIS IS

**Repo:** `wiseguysmith/Welcome-site-` · **Branch:** `claude/welcome-site-repo-7ime6r`

A working Next.js 14 (App Router) + TypeScript + Tailwind site is already on this branch:

- `src/app/` — homepage (8 sections), `/essays/[slug]` (MDX via `next-mdx-remote/rsc`), `/consultation` (react-hook-form, backend not wired)
- `src/components/` — `layout/Nav.tsx`, `ui/FadeIn.tsx` (Framer Motion), `ui/Button.tsx`, `ui/ProjectCard.tsx`, `sections/*`
- `src/data/` — `projects.ts` (7 ventures), `essays.ts`, `signals.ts`
- `src/lib/essays.ts` — fs + gray-matter MDX reader
- `content/essays/technology-capital-access.mdx`
- Design tokens in `tailwind.config.ts`: black `#0A0A08`, charcoal `#1A1A16`, gold `#B8960C`, cream `#F2EDE4`, bronze `#7A5C2E`; fonts via `next/font/google` in `layout.tsx`: Cormorant Garamond (`--font-cormorant`), Inter (`--font-inter`), JetBrains Mono (`--font-mono`)
- Deploy: Netlify (`netlify.toml` + `@netlify/plugin-nextjs`)

**This is a v2 restructure of that site**, per a brand audit. The v1 scaffold, design system, MDX pipeline, and consultation form are KEPT. The homepage architecture, copy register, and several sections change. This document is the single source of truth for v2.

**North star (locked):** The site is *a living proof of worldview* — not a portfolio, not a founder page. The visitor should feel they **met** Elijah, not read about him.

---

## 1. LOCKED BRAND DECISIONS (do not change)

1. **Identity:** Elijah Smith. Full name, everywhere. "WISE" / "Eli" / "Jah" are childhood nicknames — they may appear once as personal texture (About page), never as brand architecture, headline, or logo.
2. **The thread:** *"Who is locked out of this — and why?"* This question is the site's doorway (Section 3.1) and its closing mirror (Section 3.8).
3. **Philosophy anchor:** *"Technology is a tool. People are the purpose. Community is the multiplier."*
4. **Signature line:** *"Just a warrior that dreams he can bring peace."* This is the emotional spike. It is used EXACTLY TWICE on the whole site: hero (3.2) and closing (3.8). Never in a list, never in the sayings rotation.
5. **Origin lens:** psychology / social work / community organizing came first; technology was learned in service of it. This is foregrounded, not buried in About.
6. **No title-stacking.** "Systems Strategist. Founder. People Activator." is dead. Do not use "People Activator" anywhere.
7. **One hero venture** on the homepage (Title2Token). Other ventures live on `/work`.
8. **Elijahisms are NOT a database.** No table, no grid, no filter UI. They appear as single breathing lines between homepage sections (Section 4.3) and one rotating line in the footer.
9. **FrameSplit does not exist** anywhere in the codebase or content. (Already excluded — keep it that way.)

---

## 2. COPY REGISTER (hard rules for all text)

**Banned words/phrases** — build a lint habit; none of these may ship:
`revolutionizing · disrupting · seamless · synergy · leverage (as verb) · passionate about · serial entrepreneur · thought leader · transformative · empower (as empty verb) · cutting-edge · People Activator · human transformation · conscious technology`

**Banned pattern:** any sentence stacking 3+ of: *access, systems, infrastructure, ownership, coordination.* One abstract noun per sentence, max two.

**Register:** dinner-table, not pitch deck. First person. Short sentences. Specific nouns (Lexington, Title2Token, a real number) beat category nouns ("solutions", "ecosystems").

**Test for every headline:** would Elijah say this out loud to a friend? If not, rewrite.

---

## 3. HOMEPAGE — NEW SECTION ARCHITECTURE (in order)

Replace the current 8-section homepage with the following 8. Reuse `FadeIn`, `Button`, section spacing patterns from v1.

### 3.1 THE DOORWAY (new component: `sections/Doorway.tsx`)
The site does not open with a name. It opens with the question, alone on black.

- Full-viewport (`100svh`), pure `black`, no nav visible (nav fades in only after this section scrolls past — extend the existing scroll-opacity logic in `Nav.tsx`).
- Centered, Cormorant Garamond, large (clamp ~2.2rem–4rem), cream:
  > **Who is locked out of this — and why?**
- After ~1.2s (or on first scroll intent), a second line fades in below, smaller, gold, mono:
  > `The question behind everything I build.`
- Subtle scroll indicator (reuse v1 hero's gradient-line indicator).
- Motion: single orchestrated fade/settle on load. Respect `prefers-reduced-motion` (render everything static, visible).
- This section replaces any splash/loader idea — it must be real DOM, indexable, zero-JS-required to read.

### 3.2 HERO — THE MAN (rework `sections/Hero.tsx`)
- Kill the giant "WISE" wordmark. Headline is **Elijah Smith** (Cormorant, large but not billboard — clamp ~3.5rem–6.5rem).
- Directly under the name, italic serif, cream at 80%:
  > *Just a warrior that dreams he can bring peace.*
- One short supporting paragraph (3 lines max), first person:
  > I started in psychology and community work in Lexington, Kentucky. I learned to build technology because the people I served kept hitting walls that someone had designed. Now I build doors.
- Two CTAs (reuse `Button`): `The work →` (anchors to 3.4) and `Start a conversation` (→ `/consultation`).
- Keep the v1 grid-pattern background + gold ambient glow; they survive the redesign.
- Photo: reserve a slot (right column on desktop, above name on mobile) with a styled placeholder block — `PHOTO_PENDING` comment; user will supply.

### 3.3 HOW I THINK (rework existing section — now the ONLY pure-philosophy section)
Merge the best of v1 "How I Think" + planned "What I Believe" into one tight section. Exactly four beliefs, no more:

1. **Technology is a tool. People are the purpose. Community is the multiplier.**
2. **Communities need operating systems, not just inspiration.**
3. **Fragmentation is the state of the world. We are here to put it together.**
4. **Nobody should be locked out by a credential.** I taught myself to code because the door was closed. Then I propped it open.

Layout: numbered editorial list (mono numerals, serif statements, one short supporting sentence each in Inter). Link at bottom: `The full operating system → /principles`.

### 3.4 THE WORK — ONE BRIDGE, DEEP (new: `sections/HeroVenture.tsx`)
One venture, told as a story. **Title2Token.**

- Eyebrow (mono, gold): `CURRENT MISSION`
- Structure: *the wall → the door → the state of the build.*
  - **The wall:** most people can't own a piece of the buildings their lives happen in. Ownership of real assets is gated by minimums, paperwork, and networks.
  - **The door:** Title2Token — real-asset ownership, tokenized, built on Chainlink CCIP. (Pull tech detail from `projects.ts`, keep it to one line.)
  - **The build:** honest status. Use the `Active Development` status from data — say "being built now," never imply it's shipped.
- Single CTA: `All the work → /work`
- Below the CTA, one quiet mono line: `Also building: Mindful Tech · BarcodeDAO · Mindful360 · La Mesa · Dream Up Properties · ISD` — names only, as links to `/work` anchors. No cards, no descriptions.

### 3.5 THE SCAR (new: `sections/Scar.tsx`) — ⚠ CONTENT PENDING
The failure story. **This section's copy is not written yet** — it requires Elijah's answer (see §7 Blockers). Build the section with structure + placeholder:

- Eyebrow: `WHERE IT BROKE`
- Layout: narrow prose column (max ~62ch), serif, quieter than every other section — no gold accent except the eyebrow. Design it to feel like a lowered voice.
- Placeholder content clearly marked:
  ```
  {/* SCAR_CONTENT_PENDING — one true story: what he built that failed,
      what it cost, what it taught. Ship hidden (see flag) until copy lands. */}
  ```
- **Feature-flag it:** export a `SHOW_SCAR = false` const in `src/data/site.ts`; render null when false. The section ships in code, dark until the story arrives.

### 3.6 SIGNALS (keep, trim)
Keep the v1 `signals.ts` proof-point section largely as-is — it does the trust work. Trim to the 6 strongest (drop the weakest two at implementer's judgment; keep Empower's 24 speakers / 1,000+ attendees — real numbers are the point). Retitle the section: **"Receipts"** (mono eyebrow), not "Signals."

### 3.7 ESSAYS (keep as-is)
Existing essays teaser section and MDX pipeline unchanged. One live essay is fine; the section renders whatever `content/essays/` holds.

### 3.8 THE MIRROR (new: `sections/Mirror.tsx`) — the signature moment
Near-final section. The question comes back, turned on the visitor.

- Full-viewport again, black, mirroring 3.1 visually — same type treatment, so the visitor *recognizes* the doorway.
- Sequence (scroll-triggered stagger, generous timing):
  > You've spent a few minutes with me.
  >
  > **So — who were you locked out of?**
  >
  > **And who are you keeping out?**
- Beat of space. Then small, italic, cream 60%:
  > *Just a warrior that dreams he can bring peace. — see you in the work.*
- Two quiet actions: `Start a conversation` (→ `/consultation`) · `elijah@mindfultech.services` mailto (confirm address before wiring; placeholder OK).
- This IS the footer's emotional job; the actual footer below it is minimal (nav links, one rotating saying, copyright).

### Removed from homepage
- ❌ "What I Believe" (merged into 3.3)
- ❌ "Questions I'm Exploring" (its best question is now 3.8)
- ❌ Ventures grid of 7 cards (→ `/work`)
- ❌ "Principles preview" (link from 3.3 suffices)

---

## 4. PAGES

### 4.1 `/work` (new)
All ventures, one page. Reuse `ProjectCard` but loosen it: each venture gets *the wall it addresses* as its first line, then role, status, tech tags. Order: Title2Token first, then by status (Active → Building). Anchor ids per venture (`#title2token` etc.) for the 3.4 links. FrameSplit remains excluded.

### 4.2 `/principles` (new) — The Elijah Operating System
Reference material, deliberately calm. Three parts:

1. **The five questions (The Filter):** Who does this serve? / Who does this exclude? / Does this increase access or reduce it? / Infrastructure or trend? / Can it outlast me?
2. **Non-negotiables** (from Constitution §07 — six lines, plain list).
3. **Mental models** (Constitution §10 — Gap Model, Translation Model, Infrastructure Test, Access Question, Multiplier Frame; number them, one short paragraph each).

Source content verbatim from `docs/elijah-constitution.md` (committed alongside this plan). Typeset like a document, not a landing page: narrow column, serif, mono labels.

### 4.3 `/about` (rework)
Order matters — the origin leads:

1. **Where it started:** psychology, social work, community organizing, Lexington KY. Mental health practice in Denver — one brief mention, as already agreed.
2. **The turn:** self-taught Python/Solidity/Chainlink because credentials were the wall. (This is a belief made biography — write it that way.)
3. **The geography:** KY → DFW → Bay Area → Denver → Costa Rica, framed as *going where the gaps are*, not as a résumé of relocations.
4. **The nicknames:** one warm sentence — family and friends have called him Wise, Eli, Jah since he was a kid. Texture, not branding.
5. Photo slot (same `PHOTO_PENDING` placeholder pattern).
6. **Voice slot:** reserve an audio element block, feature-flagged `SHOW_VOICE = false` in `src/data/site.ts` — 20–30s of Elijah reading his own lines, when recorded. `<audio>` with poster/label styling; no autoplay, ever.

### 4.4 `/essays`, `/essays/[slug]`, `/consultation` — keep
No structural changes. `/consultation` backend wiring stays a tracked TODO (Resend recommended); not part of this build.

---

## 5. THE SAYINGS SYSTEM (replaces "Elijahisms database")

### 5.1 Data: `src/data/sayings.ts` (new)
```ts
export interface Saying {
  text: string
  weight: 'breath' | 'footer'   // breath = between-section lines; footer = rotation pool
}
export const sayings: Saying[] = [ /* curated, see below */ ]
```
Curate **8–12 total** from the Elijahisms list — the ones that are philosophical or quietly funny and stand alone without context. EXCLUDE: the warrior line (reserved, §1.4), anything requiring cultural context a stranger won't have, and anything that reads as an inside joke. If curation judgment is needed, prefer fewer.

### 5.2 Component: `ui/Breath.tsx` (new)
A between-sections interstitial: one saying, alone, centered, italic Cormorant, cream at 70%, gold em-dash, ~40vh of vertical whitespace. Fades in on scroll (reuse `FadeIn`, longer duration). Place exactly **three** on the homepage: after 3.3, after 3.5 (or 3.4 while Scar is flag-off), after 3.7. Assign fixed sayings per slot (deterministic — no hydration mismatch).

### 5.3 Footer rotation
Footer shows one `footer`-weight saying, chosen by day (`date-seeded index`, computed server-side — stable per day, no client randomness).

---

## 6. FILE-LEVEL WORK ORDER

| # | Action | Files |
|---|--------|-------|
| 1 | Add site flags | `src/data/site.ts` (new: `SHOW_SCAR`, `SHOW_VOICE`) |
| 2 | Add sayings data | `src/data/sayings.ts` (new) |
| 3 | Doorway section | `src/components/sections/Doorway.tsx` (new) |
| 4 | Rework hero | `src/components/sections/Hero.tsx` |
| 5 | Nav fade-after-doorway | `src/components/layout/Nav.tsx` |
| 6 | Merge philosophy | `src/components/sections/HowIThink.tsx` (rework) |
| 7 | Hero venture | `src/components/sections/HeroVenture.tsx` (new) |
| 8 | Scar (flagged) | `src/components/sections/Scar.tsx` (new) |
| 9 | Breath interstitial | `src/components/ui/Breath.tsx` (new) |
| 10 | Mirror | `src/components/sections/Mirror.tsx` (new) |
| 11 | Recompose homepage | `src/app/page.tsx` |
| 12 | Work page | `src/app/work/page.tsx` (new) |
| 13 | Principles page | `src/app/principles/page.tsx` (new) |
| 14 | About rework | `src/app/about/page.tsx` |
| 15 | Footer + rotation | `src/components/layout/Footer.tsx` |
| 16 | Copy sweep | every page — apply §2 banned list |
| 17 | Metadata | update `generateMetadata`/titles: "Elijah Smith" (no WISE) |

Delete obsolete v1 section components after recomposition (whatever `page.tsx` no longer imports) — don't leave dead sections in the tree.

---

## 7. CONTENT BLOCKERS (needed from Elijah — build around them, don't wait)

| Blocker | Blocks | Ship strategy |
|---|---|---|
| **The failure story** ("the wound") | 3.5 Scar copy | Ship flag-off |
| **The enemy, named in his words** (what he's against — gatekeeping? credentialism?) | sharpens 3.3 belief #4 + About | Ship current copy; one-line swap later |
| **Voice recording** (20–30s) | 4.3 voice slot | Ship flag-off |
| **Personal photo** | 3.2 + 4.3 | Styled placeholder |
| **Organizing moment** (public or not?) | About depth | Omit entirely until answered |
| **Confirm contact email** | 3.8 mailto | Placeholder `hello@mindfultech.services` behind a const |

---

## 8. ACCEPTANCE CRITERIA

1. `npm run build` passes clean; all pages static where possible.
2. The word "WISE" appears **zero** times as branding (About nickname sentence is the only allowed instance). Grep for it.
3. Every §2 banned word greps to zero across `src/` and `content/`.
4. The warrior line appears exactly twice (3.2, 3.8).
5. Homepage renders 7 sections max with Scar off; no venture grid on homepage.
6. `prefers-reduced-motion`: Doorway and Mirror fully readable with all animation disabled.
7. No hydration warnings (saying selection is deterministic/server-side).
8. Mobile: Doorway and Mirror hold composition at 375px; no horizontal scroll anywhere.
9. Lighthouse: no regression vs. v1 baseline; fonts still via `next/font` (no CSS @import).
10. FrameSplit: zero occurrences (grep).

---

## 9. OUT OF SCOPE (do not build in this pass)

- Consultation form backend (tracked separately)
- CMS / admin for sayings or essays
- Netlify connection (manual, user-driven)
- Any "movement site" expansion — this pass is the founder site done right

---

*Companion document: `docs/elijah-constitution.md` (brand foundation, v1.1). If this plan and the Constitution ever conflict on copy, this plan wins — it post-dates the Constitution and incorporates the final audit.*
