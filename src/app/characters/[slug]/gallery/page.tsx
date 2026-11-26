import { notFound } from "next/navigation";
import Link from "next/link";
import { characters } from "@/lib/characters";
import CharacterGallery from "@/components/character-gallery";
import GalleryBricks from "@/components/gallery-bricks";
import { galleriesFor } from "@/lib/galleries";
import { buttonVariants } from "@/components/ui/button";

export default async function CharacterGalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = characters.find((c) => c.slug === slug);

  if (!character) notFound();

  // Migrated characters read straight from their image folder; everyone
  // else falls back to the hand-wired character.gallery data.
  const scanned = await galleriesFor(character.slug);
  const isScanned = scanned !== null;

  // Gallery header tagline: the character speaks first (slogan), then their
  // blurb, then a plain visitor-useful instruction as the safety net.
  const tagline =
    character.slogan ??
    character.blurb ??
    "Every screenshot. Click any image to view it full-size.";

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>{character.name} — Gallery</h1>
        <p className="text-muted-foreground mt-2">{tagline}</p>
      </header>

      {isScanned ? (
        // Migrated path: the lego grid + lightbox, fed from the image folder.
        <GalleryBricks shots={scanned} />
      ) : character.gallery && character.gallery.length > 0 ? (
        // Old hand-wired path: the grid + lightbox that was here before.
        <CharacterGallery gallery={character.gallery} />
      ) : (
        <p className="text-muted-foreground text-center">
          No gallery images yet.
        </p>
      )}

      <div className="mt-10 text-center">
        <Link
          href={`/characters/${character.slug}`}
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          ← Back to {character.name}&apos;s sheet
        </Link>
      </div>
    </main>
  );
}
