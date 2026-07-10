# WISE Personal Site

Personal site for WISE — built with Next.js 14, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — custom design tokens (black/gold/cream palette)
- **Framer Motion** — tasteful scroll-triggered animations
- **next-mdx-remote** — MDX essay rendering
- **react-hook-form** — consultation form
- **Vercel** — recommended deployment target

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing a New Essay

1. Create a new file in `content/essays/your-essay-slug.mdx`
2. Add frontmatter at the top:

```mdx
---
title: "Your Essay Title"
description: "One sentence about what this essay is about."
date: "July 2026"
category: "Systems"
readTime: "4 min read"
---

Your essay content here...
```

3. Add an entry to `src/data/essays.ts` so it shows in the index and homepage preview.
4. Push to GitHub — Vercel will auto-deploy.

**Categories:** Systems · Capital · Ecosystems · Philosophy · Field Notes

## Adding a Project

Edit `src/data/projects.ts` and add an object to the array.

## Wiring Up the Consultation Form

The form at `/consultation` is ready for a backend. When you have an email service:

1. Create `src/app/api/consultation/route.ts`
2. In `ConsultationForm.tsx`, replace the `console.log` with a `fetch('/api/consultation', ...)` call
3. Recommended services: **Resend**, **Formspree**, or **SendGrid**

## Deployment (Vercel)

1. Connect this repo to [vercel.com](https://vercel.com)
2. Set root directory to `/` (default)
3. Framework preset: **Next.js** (auto-detected)
4. Deploy — no environment variables needed for v1

For your custom domain: add `elijah.mindfultech.services` in Vercel's Domains settings and point your DNS accordingly.

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — full story |
| `/work` | Ventures + partnerships |
| `/essays` | Writing index |
| `/essays/[slug]` | Individual essay |
| `/about` | Editorial personal story |
| `/consultation` | Lead capture + Calendly |
