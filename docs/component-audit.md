# Component Audit — Tales of Osea

Keep/remove review. Audited 123 files under `src/components/` (excluding `svgs`, counted separately). ~17 live, ~106 dead. **Nothing removed yet.**

> Caveat: this traced static `@/components` and relative imports only — no dynamic imports or CSS `@import`s. Double-check the "borderline" items before deleting.

### ✅ Owner's decisions (as of audit review)
- **Backgrounds:** KEEP `MagicRings` (live) + `video-ambient`. PRUNE the other 7. Animated shaders on cards = no.
- **Borders** (`border-beam`, `glow`, `ElectricBorder`) = MAYBE.
- **Carousels** (`carousel`, `DepthCarousel`, `kokonutui/carousel-cards`) = KEEP for gallery (when a character has >4 images).
- **Bento grid** = KEEP for now (owner will explain the plan later).
- **Hooks** = KEEP (toolbox).
- **`scene-container`** = MAYBE — reusable R3F canvas wrapper (details below).
- **`discord-badge`** = REMOVE.
- **`pouf`** = REMOVE (aesthetic mismatch).

### How to read this — three buckets, not two
- **Live** — actually imported and rendering.
- **Toolbox** — installed as a future option ("consideration"). Not imported right now, but kept on purpose. *Most non-background primitives live here, per the owner.*
- **Abandoned** — old backgrounds, mismatched vendor themes, leftovers. Safe to remove.

**Important:** "dead component" ≠ "feature unused." You often use the Tailwind-native version of a thing instead of the shadcn wrapper. Example: `aspect-video` / `aspect-square` utility classes are used all over (`character-gallery`, `youtube-video-player`, `episodes`, `soundtrack`), so the shadcn `AspectRatio` *component* is just the unused wrapper — not the feature.

## Confirmed decisions
- **`pouf` → remove.** Aesthetic mismatch ("marshmallow style"), never used, and `pouf.css` is never imported either.
- **Dead loose files → mostly valid removals.** Some were old files, some abandoned design considerations.

## ✅ Live (reachable from app routes)
- `shadcn-studio/blocks/hero-section-01/header.tsx` (used in `layout.tsx`)
- `shadcn-studio/blocks/hero-section-01/hero-section-01.tsx` (home page)
- `blocks/ecommerce/ecommerce-footers/with-socials.tsx` (footer)
- `shadcn-space/blocks/cookie-consent-01/index.tsx`
- `character-gallery.tsx`
- `episode-thumbnail.tsx`
- `MagicRings.tsx` (background)
- `compose-refs.ts`
- `ui/button.tsx`
- `ui/card.tsx`
- `ui/collapsible.tsx`
- `ui/badge.tsx`
- `ui/dropdown-menu.tsx`
- `ui/toast.tsx`
- `ui/youtube-video-player.tsx`
- `ui/cubby-ui/navigation-menu.tsx`
- `ui/svgs/bluesky.tsx`

## 🌌 Backgrounds / ambient (unused) — the "don't flow 5 backgrounds" bucket
These are full-page/eyecatcher visual effects, separate from borders/buttons/text. The one live background is `MagicRings`; these 8 are idle. **Decision: keep `MagicRings` (live) + `video-ambient` (owner's pick, saved to learn later). Prune the other 7.**

1. `Hyperspeed.tsx` (+ `HyperSpeedPresets.ts`) — Three.js starfield/warp — prune
2. `MoltenMetal.tsx` — ogl molten/ember/frost shader — prune
3. `animated-gradient.tsx` — the old Plasma background (already known old) — prune
4. `animated-wash.tsx` (+ `animated-wash-shader.ts`) — grain-gradient wash — prune
5. `ui/background-gradient.tsx` — motion-based gradient — prune
6. `ui/dither-gradient.tsx` — dither gradient — prune
7. `ui/warp-tunnel.tsx` — react-three-fiber warp tunnel — prune
8. `unlumen-ui/video-ambient.tsx` — ambient video background — ✅ KEEP

**Borders/edges** (NOT backgrounds — keep these separate): `ElectricBorder.tsx`, `ui/border-beam.tsx`, `ui/glow.tsx`.

**Text effects** (third bucket, neither background nor border): `ui/glitch-text.tsx`, `echo-text.tsx`, `ui/handwritten-response.tsx`, `kokonutui/matrix-text.tsx`, `grootstudio/text-outline-glow.tsx`, `dither.ts`.

## 🗑️ Dead vendor folders (0 live files — whole folder removable)
| Folder | Files | Note |
|---|---|---|
| `radix-nova/` | 10 | card, button, accordion, collapsible, expandable-card + blocks (old Radix stuff, already migrated off) |
| `pouf/` | 3 + CSS | confirmed remove |
| `kokonutui/` | 4 | |
| `satori-ui/` | 2 | |
| `uiable/` | 2 | |
| `microkit/` | 1 | |
| `kibo-ui/` | 2 | |
| `8starlabs-ui/` | 1 | |
| `grootstudio/` | 1 | |
| `interior/` | 1 | reading-progress |
| `smoothui/` | 1 | |
| `tailgrids/` | 1 | |
| `unlumen-ui/` | 1 | |

## 🗑️ Dead loose files (top of `src/components/`)
- `Hyperspeed.tsx`, `HyperSpeedPresets.ts`
- `MoltenMetal.tsx`
- `ElectricBorder.tsx`
- `animated-gradient.tsx` (old Plasma background)
- `animated-wash.tsx`, `animated-wash-shader.ts`
- `carousel.tsx`
- `DepthCarousel.tsx`
- `ScrollExpand.tsx`
- `v-collapsible-3.tsx`
- `echo-text.tsx`
- `dither.ts`, `dither-gradient` (in `ui/`)
- `full-width-divider.tsx`
- `discord-badge.tsx`
- `portal.tsx`, `presence.tsx`, `client-only.tsx`
- `styles.ts`, `theme.ts`, `index.ts`
- `bento-grid-demo.tsx`
- `hand-toggle.tsx` (re-exported by the dead `index.ts`)

## 🗑️ Dead inside `ui/` (base primitives not currently used)
`background-gradient`, `bar-list`, `border-beam`, `brand-icons`, `bubble`, `context-menu`, `cubby-ui/card`, `dither-gradient`, `empty`, `glitch-text`, `glow`, `handwritten-response`, `morphing-dialog`, `navigation-menu`, `rainbow-button`, `scroll-area`, `scroll-to-top`, `separator-extended`, `theme-customizer`, `tooltip`, `warp-tunnel`, and every `svgs/*` **except** `bluesky`.

## ⚠️ Borderline (imported only by dead code — confirm before removing)
- `ui/aspect-ratio` — **the component** is only imported by dead `uiable` files, but you use `aspect-video`/`aspect-square` Tailwind utilities everywhere, so you ARE using aspect ratio. Keep the utility habit; the component is optional.
- `ui/bento-grid` (imported by dead `bento-grid-demo`)
- `ui/scene-container` (imported by dead `warp-tunnel`)
- `ui/theme-toggle` + `animate-ui/icons/brush-cleaning` (imported by dead `theme-customizer`)

## 💭 Dream ideas (explicit scope creep — parked, not planned)
- **OS "login" page:** a long-term concept — a page styled like logging into an operating system. Would give `toast` (already live via the cookie consent) a bigger starring role, plus other OS-y components. Owner flagged it as "cool but I probably don't have the stamina" — so it's parked as inspiration, not scheduled.

## 🧹 Admin findings (not components)
- **Orphaned route:** `src/app/hero-section-01/page.tsx` — leftover demo page from the shadcn-studio block install (present since initial commit `14693a9`). Harmless duplicate of the home hero. Delete the whole `src/app/hero-section-01/` folder to remove it.
- **Footer socials:** ✅ fine, no action. Discord and Threads are `<img>` tags pointing to `public/Discord-Symbol-Blurple.svg` and `public/threads-logo-white.svg` (official brand files, both present in `public/`); Bluesky uses the `ui/svgs/bluesky` component. So the other `ui/svgs/*` component files being dead is expected — those platforms use the brand SVG files instead.
- **Roi image-folder mismatch:** slug is `roi_vanzey` but the gallery images/folder are `roiadan_vanzey` (matching the osenayan name "Roi'adan Vanzey"). Images still load because the paths match, but it diverges from the `<slug>` folder convention. Reconcile the folder name or the slug at some point.
