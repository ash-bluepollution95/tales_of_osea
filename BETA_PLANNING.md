# Tales of Osea — Beta Planning

## ✅ Done
- **Character type + data** — `src/lib/characters.ts` (full nested type + Kay's row, TBA-filled)
- **Character pages** — list (`/characters`) + detail (`/characters/[slug]`), all 12 sections render
- **Episode type + data** — `src/lib/episodes.ts` (`EpisodeKind` union, teaser + s01e01 real, short-1 TBA)
- **Episode pages** — list (`/episodes`) + detail (`/episodes/[slug]`) with YouTube iframe embed
- **Navigation reorganized** — `src/lib/navigation.ts` (union type `NavigationSection = NavigationLink | NavigationGroup` + grouped `navigationData`); header branches link vs group (desktop `NavigationMenuTrigger`/`Content`, mobile `DropdownMenuGroup`/`Label`)
- **Home page** — hero demoted `<main>`→`<section>`, home page got a content-column `<main>` (`max-w-7xl space-y-16`), plus `home-bento.tsx` (video card → `/episodes/teaser` + Characters/About/World/Episodes/Soundtrack cards). Characters card shows a featured slice (`characters.slice(0, 3)`) + "see all" link.

## 🧱 Next up (homework)
- [ ] **Stories** (`/stories`) — RP "side-story" posts linked to characters via a `characters: [slug]` field. Build: typed `src/lib/stories.ts` (mirroring `characters.ts`, `body` = typed `StoryBlock[]` union — heading/paragraph/quote/image — rendered with existing shadcn/Base UI components, zero new deps), `/stories` list (`.map()`), `/stories/[slug]` detail.
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
- [ ] **Align mobile nav menu to the surface ladder** — desktop nav (cubby-ui `NavigationMenu` in `header.tsx`) wears the `--surface-*` elevation ladder (highlight rim + layered shadow → "sleek"); the mobile dropdown (`src/components/ui/dropdown-menu.tsx` + the `md:hidden` block in `src/components/shadcn-studio/blocks/hero-section-01/header.tsx`) uses flat shadcn `bg-popover` + `shadow-md` + `ring-foreground/10` + `bg-accent` row hover, so contrast doesn't match. **Look for:** the popup line in `dropdown-menu.tsx` (`bg-popover … shadow-md ring-1 ring-foreground/10`) and the item hover (`data-highlighted:bg-accent`). **Fix:** swap the popup's shadow/ring for the surface rim + combined shadow, and use the surface hover token on items.

## 🔮 Later
- [ ] **Reusable faceted search** — a shared `<FacetedSearch>` / `useFacetedSearch` hook: facet `<Select>` + text `<Input>`, filters any typed array client-side with `match-sorter` (`keys`). Build once, reuse on `/characters`, `/soundtrack`, `/episodes`. Plain-substring v1 → `match-sorter` v2. Turns those lists into `"use client"` components. Build together.
- [ ] "Appears in:" section on character page (derive via `episodes.filter(...)`)
- [ ] Reusable `<YouTubeEmbed>` component
- [ ] Per-character VA field on `Character`
- [ ] Episodes **card layout** — show videos (via `YouTubePlayer`) as cards on the same page as the episode list, instead of a bare list + separate detail page
- [ ] **Cards + div layers** on pages where needed (page layout structure)
- [ ] **Bento grids** for image layouts (or find a better gallery option first)
- [ ] **Nicer expandable cards** — the characters list already peek-expands via native `<details>`/`<summary>`; upgrade it to a smoother animated expandable (height transition, chevron icon, nicer open/close). Audition existing legos (`v-collapsible-3`, Base UI `collapsible`) before hand-rolling.
- [ ] **Video backlit glow** — add a subtle purple backlight glow behind every YouTube thing (the home-bento video card, `EpisodeThumbnail`, `YouTubePlayer`) so videos read "lit from behind" against the nebula. Consistent treatment site-wide.
- [ ] **Hero card side-art (hover crossfade)** — semi-transparent WebP(s) with characters on the left/right edges, transparent in the middle so the hero text sits in the clear zone. On hover, crossfade between 1–4 variants. Technique: stack all variants `absolute inset-0` (z-0) behind a `relative z-10` text layer, crossfade via `opacity` transitions (plain CSS — no WebKit hacks, and the 1990s image-slicing isn't needed, WebP alpha does the frame). Considerations: preload all variants, mark `aria-hidden` (decorative), respect `prefers-reduced-motion`, keep each WebP ≤ ~500KB (owner's cap — transparency can bloat the file).

## ♿ Accessibility (later)
- [ ] **Text-size toggle** — `A- / A / A+` buttons that scale the root font size (everything is `rem`, so one number scales the whole page). Client component + `localStorage` persistence. Foundation first: verify no `maximum-scale=1` in the viewport meta (don't disable browser zoom), keep `rem` units, check dark-theme color contrast.
- [ ] **Scroll-to-top button** — floating bottom-right button, appears after scrolling down, smooth-scrolls to top. ✅ Component already exists (`src/components/ui/scroll-to-top.tsx`, 5 variants: round/pill/minimal/progress/text, all themed + accessible) — just import + drop one in `layout.tsx` (site-wide). No build-from-scratch needed.

## 🐞 Known issues (polish — non-blocking, build is clean)
- [ ] **Characters bento card — audition button overflows at narrow widths.** In `home-bento.tsx`, the Characters card's `RainbowButton` ("🎙️ Audition Form Available!") pokes outside the card edge when the window is squished to mobile-ish width. Likely cause: the long label + the button's `whitespace-nowrap`, so the text can't wrap at narrow widths. Fix options (pick one): shorten the label (e.g. "🎙️ Audition"), add `whitespace-normal break-words` to let it wrap, or make the button `w-full`. Visual-only, no build impact.

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
