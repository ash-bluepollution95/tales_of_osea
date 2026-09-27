"use client";

import { useState } from "react";
import Image from "next/image";

type EpisodeThumbnailProps = {
  primary: string | null;
  fallback?: string | null;
  alt: string;
};

export default function EpisodeThumbnail({
  primary,
  fallback,
  alt,
}: EpisodeThumbnailProps) {
  const [failed, setFailed] = useState(false);

  const src = failed ? fallback : primary;
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover"
      onError={() => {
        if (!failed && fallback) setFailed(true);
      }}
    />
  );
}
