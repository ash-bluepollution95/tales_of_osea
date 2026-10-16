# Adding a Story (Tales page)

The step-by-step for the Stories feature — RP "side-story" posts, like FFXIV side
quests that live outside the main series. No terminal needed to *add content*;
everything is typing into files.

## File map (where everything lives)

| What | File |
| --- | --- |
| The `Story` type + `StoryBlock` union | `src/lib/stories.ts` |
| The actual story data | `src/lib/stories.ts` (same file, `stories` array) |
| Stories list page | `src/app/stories/page.tsx` |
| Story detail page | `src/app/stories/[slug]/page.tsx` |

---

## 1. The data shape (already in `stories.ts`)

Each story is one object in the `stories` array. The type is:

```ts
export type StoryBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Story = {
  slug: string;          // URL id, e.g. "the-cracks-show"
  title: string;
  blurb: string;         // one-line hook for the list
  date: string;          // when it was posted
  characters: string[];  // slugs of who appears → links out to /characters/[slug]
  body: StoryBlock[];    // the story as typed blocks → rendered with shadcn components
};
```

`StoryBlock` is a **discriminated union**: the `type` field is the tag that says
which shape the block is. A `heading` has `text` but no `src`; an `image` has
`src` + `alt` but no `text`. TypeScript enforces this, so a block can't carry the
wrong fields for its type.

---

## 2. Build the list page

Create `src/app/stories/page.tsx`. Mirror the characters list (`/characters`) —
same structure, just `stories` instead of `characters`:

```tsx
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { stories } from "@/lib/stories";

export default function StoriesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>Stories</h1>
        <p className="text-foreground/80 mx-auto mt-3 max-w-2xl">
          Side-stories from Osea — the bits that happen between the episodes.
        </p>
      </header>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((s) => (
          <li key={s.slug}>
            <div className="group bg-background/70 bg-gradient-to-b from-white/[0.06] to-transparent text-card-foreground rounded-2xl border p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="text-muted-foreground text-sm">{s.date}</p>
              <p className="text-muted-foreground text-sm">{s.blurb}</p>
              <Link
                href={`/stories/${s.slug}`}
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Read story
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
```

The `stories.map(...)` is the important bit: add one object to the `stories`
array and a card appears. You never hand-write a card.

---

## 3. Build the detail page

Create `src/app/stories/[slug]/page.tsx`. Two things differ from the character
page: (a) `params` is a Promise — await it; (b) the `body` is a list of blocks
you render with a `switch`.

```tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { stories } from "@/lib/stories";
import { characters } from "@/lib/characters";
import type { StoryBlock } from "@/lib/stories";

function Block({ block }: { block: StoryBlock }) {
  switch (block.type) {
    case "heading":
      return <h2>{block.text}</h2>;
    case "paragraph":
      return <p className="text-muted-foreground">{block.text}</p>;
    case "quote":
      return (
        <blockquote className="border-l-2 pl-4 italic text-foreground/80">
          {block.text}
        </blockquote>
      );
    case "image":
      return (
        <figure>
          <Image
            src={block.src}
            alt={block.alt}
            width={1920}
            height={1080}
            className="rounded-xl border"
          />
          {block.caption ? (
            <figcaption className="text-muted-foreground text-sm">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
  }
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10">
        <h1>{story.title}</h1>
        <p className="text-muted-foreground text-sm">{story.date}</p>
        <p className="text-muted-foreground mt-2">{story.blurb}</p>
      </header>

      {/* who appears — slug → name + link */}
      {story.characters.length > 0 ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {story.characters.map((slug) => {
            const c = characters.find((x) => x.slug === slug);
            return c ? (
              <Link key={slug} href={`/characters/${slug}`}>
                {c.name}
              </Link>
            ) : null;
          })}
        </div>
      ) : null}

      {/* the story body */}
      <div className="space-y-6">
        {story.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </main>
  );
}
```

The `switch (block.type)` is the key new pattern. Inside each `case`, TypeScript
has narrowed `block` to that specific shape — so `block.text` only exists in the
`heading`/`paragraph`/`quote` cases, and `block.src` only in `image`. If you add a
new block type to the union later, TypeScript flags this switch as not covering it:
a built-in "don't forget to render this one" reminder.

---

## 4. Add a story

Open `src/lib/stories.ts` and add an object to the `stories` array:

```ts
{
  slug: "the-cracks-show",
  title: "The Cracks Show",
  blurb: "Kay notices the universes bleeding through again.",
  date: "October 2026",
  characters: ["kay_solas", "criss_solas"],
  body: [
    { type: "heading", text: "Where it started" },
    { type: "paragraph", text: "The first time Kay saw it, he blamed the energy drinks." },
    { type: "quote", text: "That's not a reflection, Criss. That's us." },
    {
      type: "image",
      src: "/images/stories/the-cracks-show.webp",
      alt: "a description for screen readers",
      caption: "optional caption under the image",
    },
  ],
},
```

- `characters` holds **slugs** (e.g. `kay_solas`) — the same IDs as the character
  pages. The detail page turns each slug into a link + the character's display name
  via `characters.find(...)`.
- `body` is a list of blocks **in reading order**. Order matters — that's the
  reading order.
- If a story has no images yet, just leave `image` blocks out of `body`.

---

## 5. Extend the union (add a block type later)

Want a `divider`, a `pullQuote`, or a `gallery` block? Two moves:

1. **Add the type** in `src/lib/stories.ts`:
   ```ts
   | { type: "divider" }
   ```
2. **Handle it** in the `Block` switch:
   ```tsx
   case "divider":
     return <hr className="border-border" />;
   ```

TypeScript complains until you do both — that's the safety net working, not an error.

---

## 6. Nav (later step)

The Stories page is **not in the nav yet**. The nav rearrange (moving Characters
out of its dropdown + adding a Stories link) is a separate step we're doing *after*
the pages work. Don't touch `src/lib/navigation.ts` yet.

---

## 7. Testing

- `npm run build` then `npm run start` — fast, no watching.
- Open `/stories` for the list, click into a story for the detail page.
