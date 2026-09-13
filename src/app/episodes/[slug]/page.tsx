import { notFound } from "next/navigation";
import { episodes } from "@/lib/episodes";
import { YouTubePlayer } from "@/components/ui/youtube-video-player";

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = episodes.find((e) => e.slug === slug);

  if (!episode) notFound();

  return (
    <main>
      <h1>{episode.title}</h1>
      <p>{episode.kind}</p>
      <p>{episode.blurb}</p>
      <p>{episode.description}</p>

      <YouTubePlayer videoId={episode.youtubeId} title={episode.title} />

      <p>Featuring: {episode.characters.join(", ")}</p>
    </main>
  );
}
