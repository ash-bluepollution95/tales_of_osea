<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Tales of Osea — Project Guide

## What this is
A FFXIV-based fan/creative site that fictionalizes the owner's plural system's exomemories (alters' "past life" memories), told through machinima/YouTube. Visual direction: **dark & ethereal**. Planned pages: Home, About, Characters, World/Lore, Episodes, Credits, Disclaimer. It's a personal creative project (not a commercial "shippable" product), but it *will* eventually be public-facing.

## How we work — most important
- **The owner is learning.** Hobbyist, design degree, prior PHP/HTML tinkering. This is a learning project as much as a shipping project.
- **Co-pilot, not autopilot.** Explain the concepts and the *why* first — then let the owner type the code themselves. Do NOT dump full solutions to copy-paste.
- **One step at a time.** Break work into small steps. The owner types, reports back after each step, and only then do we continue. Wait for their report.
- **Teach as you go.** When something is new (a hook, an API, a pattern), explain it in plain language before touching code.
- **"Legos" = shadcn/ui components.** The owner uses this term for them.
- **Installables are fine.** Themes, component libraries, etc. — install them rather than hand-rolling CSS or OKLCH color work from scratch. The owner understands both to a point; no need to DIY styling.

## The stack
- Next.js 16.3.4 · React 19.2 · Tailwind CSS v4
- App Router, code lives in `src/`
- Path alias `@/*` → `src/*`
- Content lives as typed data files in `src/lib/*.ts`

## Where things live
- `src/app/` — routes
- `src/app/characters/page.tsx` — character list
- `src/app/characters/[slug]/page.tsx` — character detail (`params` is a Promise, must be awaited)
- `src/app/nav-links.tsx` — nav ("use client", uses `usePathname`)
- `src/lib/characters.ts` — `Character` type + data
- `src/lib/episodes.ts` — `Episode` type + data

## Data conventions
- Slugs: `name_surname` (lowercase, underscore), e.g. `kay_solas`
- `name` = short display name; `title` = full name (NOT a lore epithet — characters are based on real alters)
- Voice actors are cast **per-character**, so a VA name lives on `Character`, not `Episode`
- `Episode.characters` is the ONLY stored link; reverse lookups ("which episodes is X in") are **derived** with `.filter()`, never mirrored

## Source of truth
- `BETA_PLANNING.md` is the live status board — check it at the start of a session, update it as work finishes.

## Notes
- `CLAUDE.md` just re-imports this file (`@AGENTS.md`) — edit here, not there.
- The Next.js block at the top is auto-managed by `next dev` — leave it alone.
