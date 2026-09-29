"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

type GalleryItem = {
  thumb: string;
  full: string;
  alt: string;
  caption?: string;
};

type CharacterGalleryProps = {
  gallery?: GalleryItem[];
};

export default function CharacterGallery({ gallery }: CharacterGalleryProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  if (!gallery || gallery.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-xl border border-dashed border-border"
          >
            <div className="bg-muted/40 absolute inset-0 animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Dialog.Root
      open={selected !== null}
      onOpenChange={(open) => {
        if (!open) setSelected(null);
      }}
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((img) => (
          <button
            key={img.full}
            type="button"
            onClick={() => setSelected(img)}
            className="relative aspect-square w-full overflow-hidden rounded-xl border"
          >
            <Image
              src={img.thumb}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Viewport className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-8">
          <Dialog.Popup className="relative w-full max-w-6xl outline-none">
            <Dialog.Title className="sr-only">{selected?.alt}</Dialog.Title>
            <Dialog.Description className="sr-only">
              {selected?.caption ?? selected?.alt}
            </Dialog.Description>

            <Dialog.Close
              className="bg-black/60 absolute right-3 top-3 z-10 rounded-full p-2 text-white hover:bg-black/80"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>

            <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-black">
              {selected ? (
                <Image
                  src={selected.full}
                  alt={selected.alt}
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
