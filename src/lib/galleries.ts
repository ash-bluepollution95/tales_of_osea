// Folder-scan galleries: the images live in public/images/characters/<slug>/,
// and this file reads them at build time instead of hand-wiring every entry
// in characters.ts. Captions stay hand-written — in OVERRIDES below, keyed by
// filename — so the words are still 100% the owner's; only the plumbing is
// automatic. Same pattern as stories.ts (server-side fs read).
//
// Add a character to MIGRATED when its captions have been moved over; everyone
// else keeps reading their characters.ts block unchanged.

import fs from "node:fs";
import path from "node:path";
import { imageSizeFromFile } from "image-size/fromFile";

export type GalleryShot = {
  /** Public web path, e.g. /images/characters/criss_solas/01-full.webp */
  src: string;
  /** Height divided by width — what BrickGallery needs to size bricks. */
  ratio: number;
  /** Optional screen-reader text. Falls back to the character's DEFAULTS. */
  alt?: string;
  /** Optional human caption under the shot. Absent = nothing shown. */
  caption?: string;
};

/** Captions/alt, hand-written. Keyed by character slug, then filename. */
const OVERRIDES: Record<string, Record<string, Pick<GalleryShot, "alt" | "caption">>> = {
  criss_solas: {
    "01-full.webp": {
      alt: "Criss Solas, blue and pink hair, braided messy long hair with fringe (bangs), teal and violet open jacket, black slacks, kneeling, purple floor.",
      caption: "Criss in an assumed end of the world scenario (Shadowbringers Dungeon)",
    },
    "02-full.webp": {
      alt: "Criss Solas and Angel Of'The'Night, Angel is a white/light blonde haired Elezen with assumed blue-violet eyes. Criss's appearance is, blue and pink hair, braided messy long hair with fringe (bangs), Criss is wearing the Story Teller's crop top dyed with black and teal, and Angel is wearing the Night of Devilry outfit in standard purple hues.",
      caption: "Angel flirting with Criss inside the Bloomers Bar and Grill.",
    },
    "03-full.webp": {
      alt: "Criss Solas, blue and pink hair, braided messy long hair with fringe (bangs), miqo'te, red eyes, teal and violet open jacket.",
      caption: "Criss inside the Paissa Litterbox Venue, likely a staff portrait.",
    },
    "04-full.webp": {
      alt: "Criss Solas, blue and pink hair, mid length hair, miqo'te, red eyes, teal and violet open jacket,",
      caption: "Criss spotted with shorter hair, most assume this is a form of 'turn' which in non-eorzean terms sort of just means form shift or switch.",
    },
  },
};

/** Fallback alt per character: the short description that used to be
 *  copy-pasted onto every entry. Leave out for characters without one. */
const DEFAULT_ALT: Record<string, string> = {
  criss_solas: "Criss Solas, blue and pink hair, miqo'te, red eyes, teal and violet open jacket.",
};

/** Characters that have moved to the folder-scan gallery. */
const MIGRATED = new Set(["criss_solas"]);

const IMAGE_EXTS = new Set([".webp", ".png", ".jpg", ".jpeg", ".gif", ".avif"]);

/** Images are named with padding (01-full.webp) but padding stops past 99,
 *  so sort by the leading number when there is one (natural order). */
function byImageNumber(a: string, b: string) {
  const num = (file: string) => Number(file.match(/^(\d+)/)?.[1] ?? NaN);
  const na = num(a);
  const nb = num(b);
  const byNum = na - nb;
  if (!Number.isNaN(byNum) && byNum !== 0) return byNum;
  return a.localeCompare(b);
}

/**
 * The full gallery for a character, straight from its image folder.
 * Returns null when the character isn't migrated (or its folder is
 * missing/empty) so callers can fall back to the hand-wired data.
 */
export async function galleriesFor(slug: string): Promise<GalleryShot[] | null> {
  if (!MIGRATED.has(slug)) return null;

  const dir = path.join(process.cwd(), "public", "images", "characters", slug);
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return null;
  }

  const names = entries
    .filter((entry) => entry.isFile() && IMAGE_EXTS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort(byImageNumber);
  if (names.length === 0) return null;

  const shots = await Promise.all(
    names.map(async (name) => {
      const overrides = OVERRIDES[slug]?.[name] ?? {};
      // A failed read shouldn't kill the whole gallery: assume 16:9.
      let ratio = 9 / 16;
      try {
        const size = await imageSizeFromFile(path.join(dir, name));
        if (size.width > 0) ratio = size.height / size.width;
      } catch {
        // keep the 16:9 default
      }
      return {
        src: `/images/characters/${slug}/${name}`,
        ratio,
        alt: overrides.alt ?? DEFAULT_ALT[slug] ?? "",
        caption: overrides.caption,
      };
    }),
  );

  return shots;
}
