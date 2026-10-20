import { notFound } from "next/navigation";
import Link from "next/link";
import { characters } from "@/lib/characters";
import CharacterGallery from "@/components/character-gallery";
import { buttonVariants } from "@/components/ui/button";

export default async function CharacterGalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = characters.find((c) => c.slug === slug);

  if (!character) notFound();

  const hasGallery = character.gallery && character.gallery.length > 0;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>{character.name} — Gallery</h1>
        <p className="text-muted-foreground mt-2">
          Every screenshot. Click any image to view it full-size.
        </p>
      </header>

      {hasGallery ? (
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
