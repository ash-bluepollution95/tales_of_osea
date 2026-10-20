"use client";

import { SliceGallery, SliceGalleryItem } from "@/components/ui/slice-gallery";

export type GalleryItem = {
  thumb?: string;
  full: string;
  alt: string;
  caption?: string;
  title?: string;
};

const MAX_SLICES = 12;

/**
 * Slice-style gallery for the character sheet: one dramatic open slice,
 * the rest as thin labeled spines. Reads the 16:9 `full` image directly
 * (no thumbnails) and shows each shot's `caption` as the subtitle.
 *
 * `title` is the short label that runs up the closed slice's edge; until
 * it's filled in per image it falls back to the caption (long-ish) or the
 * image number.
 */
export default function CharacterGallerySlice({ gallery }: { gallery?: GalleryItem[] }) {
  if (!gallery || gallery.length === 0) return null;

  const items = gallery.slice(0, MAX_SLICES);

  return (
    <SliceGallery>
      {items.map((img, i) => {
        const num = String(i + 1).padStart(2, "0");
        return (
          <SliceGalleryItem
            key={img.full}
            title={img.title ?? num}
            label={img.title ? num : undefined}
            image={img.full}
            alt={img.alt}
          >
            {img.caption ? <p>{img.caption}</p> : null}
          </SliceGalleryItem>
        );
      })}
    </SliceGallery>
  );
}
