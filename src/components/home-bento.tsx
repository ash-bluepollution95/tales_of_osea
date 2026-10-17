import Link from "next/link";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { episodes } from "@/lib/episodes";
import { characters } from "@/lib/characters";
import { Play, Users, BookOpenText, Compass, Clapperboard, Music } from "lucide-react";
import EpisodeThumbnail from "@/components/episode-thumbnail";
import { soundtrack } from "@/lib/soundtrack";
import { worldSections } from "@/lib/world";
import { stories } from "@/lib/stories";
import { RainbowButton } from "@/components/ui/rainbow-button";

const teaser = episodes.find((e) => e.slug === "teaser");
const featuredEpisodes = episodes.filter((e) => e.kind !== "teaser").slice(0, 3);
const featuredTracks = soundtrack.slice(0, 2);												  
const featuredCharacters = characters.slice(0, 3);
const featuredWorld = worldSections.slice(0, 3);
const featuredStories = stories.slice(0, 2);

export default function HomeBento() {
  return (
    <BentoGrid>
      {/* The video card — spans 2 of 3 columns */}
{teaser && (
  <Link
    href={`/episodes/${teaser.slug}`}
    className="md:col-span-2 md:row-span-2 group relative block overflow-hidden rounded-xl border bg-background/70 backdrop-blur-xl"
  >
    <div className="absolute inset-0">
      <EpisodeThumbnail
        primary={`https://i.ytimg.com/vi/${teaser.youtubeId}/maxresdefault.jpg`}
        fallback={`https://i.ytimg.com/vi/${teaser.youtubeId}/hqdefault.jpg`}
        alt={teaser.title}
      />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-border/20 bg-background/80 backdrop-blur-sm transition-transform group-hover:scale-110">
        <Play className="h-6 w-6 translate-x-[2px] fill-primary text-primary" />
      </span>
    </div>
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
      <h3 className="text-lg font-semibold">Series Trailer</h3>
      <p className="text-muted-foreground text-sm">Watch the teaser</p>
    </div>
  </Link>

      )}

     <Card className="h-full transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/15">
  <CardHeader>
    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
      Characters
    </span>
     <h2 className="flex items-center gap-2 text-xl">
      <Users className="h-5 w-5 text-primary" />
      The Cracked & Osenayans
    </h2>
 
  
  </CardHeader>
  <CardContent className="space-y-3">
    <ul className="space-y-2">
      {featuredCharacters.map((c) => (
        <li key={c.slug}>
          <Link href={`/characters/${c.slug}`} className="text-sm font-medium hover:underline">
            {c.name}
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/characters" className="inline-block text-sm text-muted-foreground hover:underline">
      See all characters →
    </Link>
	<div className="space-y-3"> <RainbowButton
        variant="outline"
        size="sm"
        nativeButton={false}
        render={
          <a
            href="https://forms.gle/NwgmNXbivXaCbJix5"
            target="_blank"
            rel="noopener noreferrer"
          />
        }
      >
        🎙️ Audition Form Available!
      </RainbowButton> </div>
  </CardContent>
</Card>

       <Card className="h-full transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/15">
  <CardHeader>
     <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
      Stories
    </span>  
      <h2 className="flex items-center gap-2 text-xl">
      <BookOpenText className="h-5 w-5 text-primary" />
      Stories & Tales
    </h2> 
	 </CardHeader> 
  <CardContent className="space-y-3">
    <ul className="space-y-2">
      {featuredStories.map((s) => (
        <li key={s.slug}>
          <Link href={`/stories/${s.slug}`} className="text-sm font-medium hover:underline">
            {s.title}
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/stories" className="inline-block text-sm text-muted-foreground hover:underline">
      See all stories →
    </Link>
  </CardContent>
</Card>

      <Card className="h-full transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/15">
  <CardHeader>
    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground"> 
     The World
    </span>  
      <h2 className="flex items-center gap-2 text-xl"><Compass className="h-5 w-5 text-primary" /> The World </h2>
  </CardHeader>
  <CardContent className="space-y-3">
    <ul className="space-y-2">
      {featuredWorld.map((s) => (
        <li key={s.slug}>
          <Link href={`/world#${s.slug}`} className="text-sm font-medium hover:underline">
            {s.title}
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/world" className="inline-block text-sm text-muted-foreground hover:underline">
      See the world →
    </Link>
  </CardContent>
</Card>

       <Card className="h-full transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/15">
  <CardHeader>
    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground"> Episodes </span>  
      <h2 className="flex items-center gap-2 text-xl">  <Clapperboard className="h-5 w-5 text-primary" />     Episodes </h2>
  </CardHeader>
  <CardContent className="space-y-3">
    <ul className="space-y-2">
      {featuredEpisodes.map((ep) => (
        <li key={ep.slug}>
          <Link href={`/episodes/${ep.slug}`} className="text-sm font-medium hover:underline">
            {ep.title}
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/episodes" className="inline-block text-sm text-muted-foreground hover:underline">
      See all episodes →
    </Link>
  </CardContent>
</Card>
	  
	  <Card className="h-full transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/15">
  <CardHeader>
    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">  Soundtrack </span>  
      <h2 className="flex items-center gap-2 text-xl"> <Music className="h-5 w-5 text-primary" /> Soundtrack</h2>
  </CardHeader>
  <CardContent className="space-y-3">
    <ul className="space-y-2">
      {featuredTracks.map((t) => (
        <li key={t.slug}>
          <Link href={`/soundtrack/${t.slug}`} className="text-sm font-medium hover:underline">
            {t.title}
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/soundtrack" className="inline-block text-sm text-muted-foreground hover:underline">
      See the soundtrack →
    </Link>
  </CardContent>
</Card>
    </BentoGrid>
  );
}