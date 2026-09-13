# Tales of Osea — Beta Planning

## ✅ Done
- **Character type + data** — `src/lib/characters.ts` (full nested type + Kay's row, TBA-filled)
- **Character pages** — list (`/characters`) + detail (`/characters/[slug]`), all 12 sections render
- **Episode type + data** — `src/lib/episodes.ts` (`EpisodeKind` union, teaser + s01e01 real, short-1 TBA)
- **Episode pages** — list (`/episodes`) + detail (`/episodes/[slug]`) with YouTube iframe embed

## 🧱 Next up (homework)
- [x] Fill **Kay's real copy** into `characters.ts` (replace all the `"TBA"` strings with his sheet's content)
- [x] Add **Criss's row** to `characters.ts` (then add his slug to `s01e01.characters`)
- [ ] **Homework #2** — on the episode detail page, turn `Featuring: {episode.characters.join(", ")}` into real `<Link>`s to `/characters/[slug]` — and resolve each slug to its `Character.name` so it *displays* the name (e.g. "Kay"), not the raw slug (`kay_solas`)
- [ ] Fill **short-1** with real data (+ duplicate for `short-2`, `short-3`, etc. if more shorts)
- [ ] Add teaser **cameo slugs** to `teaser.characters` (currently `[]`)

## 🗺️ Routing left
- [ ] **World/Lore** — decide flat vs nested first, then `lore.ts` + list + `[slug]`
- [ ] **Credits** — decide static vs data-routed (per-character VA names may live on `Character`, not `Episode`)

## 🎨 Design / theme (do once, last)
- [ ] **Dark & ethereal theme** — `globals.css` + Tailwind + `layout.tsx`, applies to every page
- [ ] Static pages: **Home** (featured data), **About**, **Credits**, **Disclaimer**

## 🔮 Later
- [ ] "Appears in:" section on character page (derive via `episodes.filter(...)`)
- [ ] Reusable `<YouTubeEmbed>` component
- [ ] Per-character VA field on `Character`
- [ ] Episodes **card layout** — show videos (via `YouTubePlayer`) as cards on the same page as the episode list, instead of a bare list + separate detail page

## Notes / conventions
- Slug format: `name_surname` (e.g. `kay_solas`). `title` = first/last name, not an epithet.
- One source of truth: `Episode.characters` is the only stored link; reverse lookups are **derived** with `.filter()`, never mirrored.
- VA casting is **per-character** — a character's VA name belongs on `Character`.
- Fill the data slot only when the data exists (no empty "nothing found" sections).
