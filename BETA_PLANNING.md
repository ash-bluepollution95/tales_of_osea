# Tales of Osea — Beta Planning

## ✅ Done
- **Character type + data** — `src/lib/characters.ts` (full nested type + Kay's row, TBA-filled)
- **Character pages** — list (`/characters`) + detail (`/characters/[slug]`), all 12 sections render
- **Episode type + data** — `src/lib/episodes.ts` (`EpisodeKind` union, teaser + s01e01 real, short-1 TBA)
- **Episode pages** — list (`/episodes`) + detail (`/episodes/[slug]`) with YouTube iframe embed
- **Navigation reorganized** — `src/lib/navigation.ts` (union type `NavigationSection = NavigationLink | NavigationGroup` + grouped `navigationData`); header branches link vs group (desktop `NavigationMenuTrigger`/`Content`, mobile `DropdownMenuGroup`/`Label`)

## 🧱 Next up (homework)
- [x] Fill **Kay's real copy** into `characters.ts` (replace all the `"TBA"` strings with his sheet's content)
- [x] Add **Criss's row** to `characters.ts` (then add his slug to `s01e01.characters`)
- [ ] **Homework #2** — on the episode detail page, turn `Featuring: {episode.characters.join(", ")}` into real `<Link>`s to `/characters/[slug]` — and resolve each slug to its `Character.name` so it *displays* the name (e.g. "Kay"), not the raw slug (`kay_solas`)
- [ ] Fill **short-1** with real data (+ duplicate for `short-2`, `short-3`, etc. if more shorts)
- [ ] Add teaser **cameo slugs** to `teaser.characters` (currently `[]`)
- [ ] **Privacy + Terms pages** — currently placeholder copies of the Copyright page (routes exist so the nav links resolve); write real copy

## 🗺️ Routing left
- [ ] **World/Lore** — decide flat vs nested first, then `lore.ts` + list + `[slug]`
- [ ] **Credits** — decide static vs data-routed (per-character VA names may live on `Character`, not `Episode`)

## 🎨 Design / theme (do once, last)
- [ ] **Dark & ethereal theme** — `globals.css` + Tailwind + `layout.tsx`, applies to every page
- [ ] Static pages: **Home** (featured data), **About**, **Credits**, **Disclaimer**

## 🔮 Later
- [ ] **Reusable faceted search** — a shared `<FacetedSearch>` / `useFacetedSearch` hook: facet `<Select>` + text `<Input>`, filters any typed array client-side with `match-sorter` (`keys`). Build once, reuse on `/characters`, `/soundtrack`, `/episodes`. Plain-substring v1 → `match-sorter` v2. Turns those lists into `"use client"` components. Build together.
- [ ] "Appears in:" section on character page (derive via `episodes.filter(...)`)
- [ ] Reusable `<YouTubeEmbed>` component
- [ ] Per-character VA field on `Character`
- [ ] Episodes **card layout** — show videos (via `YouTubePlayer`) as cards on the same page as the episode list, instead of a bare list + separate detail page
- [ ] Character **dialogue as text messages** — use the installed chat bubble/message components to render dialogue between characters like a text thread (left/right alignment per speaker, avatars = portraits, names as labels)
- [ ] **Cards + div layers** on pages where needed (page layout structure)
- [ ] **Bento grids** for image layouts (or find a better gallery option first)
- [ ] **Character Blog** — RP "side-story" posts written as markdown files (like FFXIV side quests outside the MSQ), eventually hooked up to characters via frontmatter/slug (e.g. `characters: [kay_solas]`). Idea parked — don't start this yet.

## Notes / conventions
- Slug format: `name_surname` (e.g. `kay_solas`). `title` = first/last name, not an epithet.
- One source of truth: `Episode.characters` is the only stored link; reverse lookups are **derived** with `.filter()`, never mirrored.
- VA casting is **per-character** — a character's VA name belongs on `Character`.
- Fill the data slot only when the data exists (no empty "nothing found" sections).
- **Gallery images (per-character)** — files live in `public/images/characters/<slug>/` as `01-thumb.webp` + `01-full.webp` (16:9 webP, two tiers, no mid). Referenced as `Character.gallery: [{ thumb, full, alt, caption? }]`. `thumb` (~640×360) = grid tiles; `full` (~1920×1080) = lightbox. Rendered with `next/image`: tiles are `aspect-video` + `object-cover` (zero crop, 16:9 matches), lightbox shows `full` `object-contain` in a 16:9 frame + caption. `alt` = screen-reader text; `caption` = optional text shown only in the lightbox (thumbnails stay clean). Cap `full` at 1920×1080; don't ship raw FFXIV screenshots.

## 🧠 Memory recall (one-liners for future you)
- **All UI is Base UI now** — zero Radix in `src`; `radix-ui` stays in `package.json` as a "this was Radix, swap me" marker.
- **Base UI composes with `render={...}`**, not Radix's `asChild`. Item hover state is `data-highlighted`, not `focus:`.
- **Cubby-ui surface tokens** (`--surface-*` ladder) live in `globals.css`. Don't `shadcn add @cubby-ui/style` — it wipes the purple theme + font mappings.
- **Theme** = one space/nebula/ethereal identity, varied per page: front page gets an animated eyecatcher (the *concept*, not necessarily the current satin one); other pages neutral-dark + OKLCH accents. Scope the *background*, not the tokens.
- **Install policy** = prefer Base UI; Radix/other-lib components are fine case-by-case (assistant migrates them).
- **Character gallery** = `ExpandableCard` (already Base UI) for the character showcase; `DepthCarousel` / bento grid for per-character galleries.
