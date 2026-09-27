import Link from "next/link";
import { notFound } from "next/navigation";
import { episodes } from "@/lib/episodes";
import { characters } from "@/lib/characters";
import { buttonVariants } from "@/components/ui/button";
import { YouTubePlayer } from "@/components/ui/youtube-video-player";

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = episodes.find((e) => e.slug === slug);

  if (!episode) notFound();

  const cast = episode.characters
    .map((slug) => characters.find((c) => c.slug === slug))
    .filter((c) => c !== undefined);

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-8 text-center">
        <h1>{episode.title}</h1>
        <p className="text-muted-foreground mt-2 text-sm capitalize">
          {episode.kind}
        </p>
      </header>

      <p className="text-muted-foreground mb-6">{episode.description}</p>

      <YouTubePlayer videoId={episode.youtubeId} title={episode.title} />

      {cast.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-3">Featuring</h2>
          <ul className="flex flex-wrap gap-2">
            {cast.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/characters/${c.slug}`}
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
