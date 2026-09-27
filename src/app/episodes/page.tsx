import Link from "next/link";
import { episodes, type Episode } from "@/lib/episodes";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EpisodeThumbnail from "@/components/episode-thumbnail";

function thumbnailFor(ep: Episode): string | null {
  if (ep.thumbnail) return ep.thumbnail;
  if (ep.youtubeId && ep.youtubeId !== "TBA") {
    return `https://i.ytimg.com/vi/${ep.youtubeId}/maxresdefault.jpg`;
  }
  return null;
}

function fallbackFor(ep: Episode): string | null {
  if (ep.youtubeId && ep.youtubeId !== "TBA") {
    return `https://i.ytimg.com/vi/${ep.youtubeId}/hqdefault.jpg`;
  }
  return null;
}

export default function EpisodesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>Episodes</h1>
        <p className="text-foreground/80 mx-auto mt-3 max-w-2xl">
          (TEMPORARY) Be aware this section is under heavy construction.
        </p>
      </header>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {episodes.map((ep) => (
          <li key={ep.slug}>
            <Card className="h-full overflow-hidden">
              <div className="bg-muted relative -mt-6 aspect-video w-full">
                <EpisodeThumbnail
                  primary={thumbnailFor(ep)}
                  fallback={fallbackFor(ep)}
                  alt={ep.title}
                />
              </div>
              <CardHeader>
                <CardTitle>{ep.title}</CardTitle>
                <Badge className="w-fit capitalize">{ep.kind}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{ep.blurb}</p>
                <Link
                  href={`/episodes/${ep.slug}`}
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Open episode
                </Link>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
