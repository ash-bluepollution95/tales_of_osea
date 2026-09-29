# Adding a Character (and their gallery)

The step-by-step for adding a new character to the site, plus their images and any
extra fields. No terminal needed for any of this — it's all typing into files.

## File map (where everything lives)

| What | File |
| --- | --- |
| The `Character` type (the "schema") | `src/lib/characters.ts` |
| The actual character data | `src/lib/characters.ts` (same file, `characters` array) |
| Characters list page | `src/app/characters/page.tsx` |
| Character detail page | `src/app/characters/[slug]/page.tsx` |
| The image gallery component | `src/components/character-gallery.tsx` |
| Character images | `public/images/characters/{slug}/` |

---

## 1. Add the character object

Open `src/lib/characters.ts`, find `export const characters: Character[] = [ ... ]`,
and copy Kay or Criss as a template. Each character is one object between `{ ... }`,
separated by a comma.

The **slug** is the key convention:

```
slug: "name_surname"   // lowercase, underscore — becomes the URL: /characters/name_surname
name:  "Kay"           // short display name
title: "Kay Solas"     // full name (NOT a fantasy epithet — these are real alters)
blurb: "..."           // one-line hook shown on the list page
```

### Required fields (every character needs all of these)

| Field | What it holds |
| --- | --- |
| `slug` | URL id, `name_surname` |
| `name` | short display name |
| `title` | full name |
| `blurb` | one-line hook |
| `identity` | `birthName, osenayanName, eorzeanName, gender, orientation, religion, politics` |
| `currentSituation` | `mainClass, sideClass, job, residence, economicClass` |
| `appearance` | `age, hair, eyes, skin, height, build, outfit` |
| `background` | `hometown, heritage, firstLanguage, lifeEvents, regrets` |
| `skills` | `qualifications, talents, languages` |
| `qualities` | `conditions, strengths, weaknesses` |
| `desires` | `yearning, goals, wishes, dreamJob` |
| `other` | `fears, secrets, habits, hobbies` |
| `family` | `parents: string[]`, `siblings: string[]`, `children?: string` |
| `relationships` | `friends: string[]`, `enemies: string[]`, `partner?`, `crush?`, `exes?` |
| `noGos` | `string[]` — a list, not a single string |

Note the two shapes: some fields are a **string**, some are a **`string[]`** (a list,
wrapped in `[...]`). Check the type at the top of the file if you're unsure which.

### Optional fields (the ones with `?`)

| Field | Notes |
| --- | --- |
| `voicedBy?: string` | voice actor (per-character — a VA lives on `Character`, never on `Episode`) |
| `favorites?: string` | one-off free text |
| `tech?: { implants, geneticMods }` | not every character has implants/mods |
| `gallery?: { thumb, full, alt, caption? }[]` | the image gallery (see below) |

An optional field can be left out entirely. TypeScript won't complain, and the page
just renders without it.

---

## 2. Add their gallery (images)

### Step A — drop the files in

Create the folder using the character's slug **exactly** (lowercase, underscore):

```
public/images/characters/kay_solas/
  01-thumb.webp
  01-full.webp
  02-thumb.webp
  02-full.webp
```

Rules:
- Folder name = `slug` (`kay_solas`, `criss_solas`, ...).
- Filenames are `NN-thumb.webp` and `NN-full.webp` — `NN` is a two-digit number
  (`01`, `02`, ...) that **pairs** a thumb with its full. `01-thumb` + `01-full`
  are the same picture at two sizes.
- Both are `.webp`.
- **Thumb = square (1:1).** The grid tile is `aspect-square` with `object-cover`,
  so a non-square thumb gets center-cropped (head chopped off — ask me how we found out).
- **Full = 16:9.** The lightbox is `aspect-video` with `object-contain`, so it shows
  the whole image (letterboxed) and never crops.

### Step B — add the `gallery` array to the character

```ts
gallery: [
  {
    thumb: "/images/characters/kay_solas/01-thumb.webp",
    full:  "/images/characters/kay_solas/01-full.webp",
    alt:   "short description for screen readers",
    caption: "optional text under the lightbox image",
  },
  // more entries...
],
```

- The path starts with `/images/...` — no `public` (that's the URL).
- `alt` is required (accessibility), `caption` is optional.

If a character has **no** `gallery` field at all, the page shows a skeleton
placeholder grid automatically. So you can add the character now and the images later.

---

## 3. Add an optional field (e.g. `voicedBy`)

Three moves, always the same dance:

1. **Type it** — in `src/lib/characters.ts`, add to the `Character` type:
   ```ts
   voicedBy?: string;   // "?" = optional
   ```
2. **Fill it** — add `voicedBy: "Name",` to a character's object.
3. **Render it** — read it somewhere in a page (see below).

### Render pattern (the "Voiced By" card/chip)

On `src/app/characters/[slug]/page.tsx`, inside the grid:

```tsx
{character.voicedBy ? (
  <div className="rounded-xl border p-4">
    <span className="text-muted-foreground text-sm">Voiced by </span>
    <span className="text-sm font-medium">{character.voicedBy}</span>
  </div>
) : null}
```

The `character.voicedBy ? (...) : null` is a **conditional render**: if the field
exists it shows the box, otherwise it shows nothing. Use this for any optional field
so uncast/unfilled characters don't show an empty card.

---

## 4. Navigation & routes

### How routes work (App Router)

In Next.js the **folder path = the URL path**. A file `src/app/{something}/page.tsx`
becomes the page at `/{something}`.

```
src/app/about/page.tsx            →  /about
src/app/world/page.tsx            →  /world
src/app/characters/page.tsx       →  /characters         (the list)
src/app/characters/[slug]/page.tsx → /characters/kay_solas (each character)
```

`[slug]` is a **dynamic segment** — one file that handles every character URL.
The folder name literally has brackets in it; that's intentional, not a typo.

### Where the menu lives

The nav menu is **data-driven**. It's just an array in `src/app/layout.tsx`
(around line 29):

```ts
const navigationData: NavigationSection[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Characters", href: "/characters" },
  // ...
];
```

The `Header` component reads that array and renders a link per entry — for BOTH
the desktop menu and the mobile dropdown. So adding a page to the menu is two moves:

1. **Create the page** — make the folder + `page.tsx` (a component with a `default export`).
2. **Add a line** — drop `{ title: "World", href: "/world" },` into `navigationData`.

Reorder, rename, or delete a menu item = edit that array. You never touch the Header
component itself.

> ⚠️ There's a *second* `navigationData` in `src/app/hero-section-01/page.tsx`.
> That's a leftover demo route, **not** the live menu. The one in `layout.tsx` is what
> actually shows across the site. Edit that one.

### Linking / organizing characters differently

The menu is **flat** right now — one link per entry, no dropdowns. So your options:

- **Link straight to a character:** `{ title: "Kay", href: "/characters/kay_solas" }`.
  Works today, zero new code.
- **Group characters on the list page** (e.g. "by family"): that's a *data* change,
  not a nav change — add a field like `group?: string` to the type, tag each character,
  then filter/group inside `src/app/characters/page.tsx`.
- **A "Characters ▾" dropdown with sub-links:** not built yet — the header only renders
  flat links. This is a small enhancement we'd do together if you ever want it.

So for "organize characters differently for linking," the fastest path today is linking
to each character directly, or grouping the *list page* with a new field. A real dropdown
menu is a future upgrade, not something the current nav already supports.

---

## 5. Testing (build + start)

- **Quick look at the site:** `npm run build` then `npm run start` — fast, no watching.
- **Editing spree:** `npm run dev` — slow on this HDD, but it hot-reloads and surfaces
  type/errors as you go.

Nothing here requires the terminal to *add content* — only to rebuild/serve.
