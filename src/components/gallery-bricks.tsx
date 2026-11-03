"use client";

import { MouseEvent, useState } from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import { BrickGallery } from "@/components/ui/brick-gallery";
import type { GalleryShot } from "@/lib/galleries";

/**
 * Brick masonry + lightbox for folder-scan galleries.
 *
 * Composition of two installed pieces, neither modified:
 *  - BrickGallery (the lego): items with `href` render as real <a> tiles,
 *    so they stay focusable and keyboard-activatable.
 *  - Base UI Dialog (same as character-gallery's proven lightbox): the
 *    clicked tile opens the full-res view with a close button.
 *
 * The click is caught by a delegated handler on the wrapper — BrickGallery
 * keeps its own contract ("links go where href says"), we just prevent the
 * navigation and open the dialog showing the same image.
 */
export default function GalleryBricks({ shots }: { shots: GalleryShot[] }) {
  const [selected, setSelected] = useState<GalleryShot | null>(null);

  // One delegated listener instead of per-tile wiring: find the tile's
  // link, stop the navigation, remember which shot opened it.
  function handleTileClick(e: MouseEvent<HTMLDivElement>) {
    const target = e.target instanceof Element ? e.target : null;
    const link = target?.closest("a");
    if (!link) return;
    e.preventDefault();
    const src = link.getAttribute("href") ?? "";
    setSelected(shots.find((shot) => shot.src === src) ?? null);
  }

  return (
    <Dialog.Root
      open={selected !== null}
      onOpenChange={(open) => {
        if (!open) setSelected(null);
      }}
    >
      <div onClick={handleTileClick}>
        <BrickGallery
          items={shots.map((shot) => ({ ...shot, href: shot.src }))}
        />
      </div>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Viewport className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-8">
          <Dialog.Popup className="relative w-full max-w-6xl outline-none">
            <Dialog.Title className="sr-only">
              {selected?.caption ?? selected?.alt}
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              {selected?.alt}
            </Dialog.Description>

            <Dialog.Close
              className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>

            <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-black">
              {selected ? (
                <Image
                  src={selected.src}
                  alt={selected.alt ?? ""}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              ) : null}
            </div>

            {selected?.caption ? (
              <p className="text-muted-foreground mt-3 text-center text-sm">
                {selected.caption}
              </p>
            ) : null}
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
