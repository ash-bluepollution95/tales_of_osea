export type EpisodeKind = "episode" | "short" | "teaser";

export type Episode = {
  slug: string;          // URL id, e.g. "s01e01" or "teaser"
  kind: EpisodeKind;     // which bucket: only "episode" | "short" | "teaser" allowed
  title: string;
  blurb: string;         // one-line hook for the list
  description: string;   // longer writeup for the detail page
  youtubeId: string;     // YouTube video id → embeds the player
  season?: number;       // "?" = shorts/teaser might not have one
  number?: number;       // "?" = episode number, not for teaser
  releaseDate: string;
  characters: string[];  // slugs of who appears → links out to /characters/[slug]
};

export const episodes: Episode[] = [
  {
    slug: "teaser",
    kind: "teaser",
    title: "Tales of Osea - Series Demo Trailer",
    blurb: "A teaser introduction to Kay Solas and Criss Solas, and their journey in Eorzea",
    description: "Tales of Osea: A series mirroring the concept of multiversal selves, fictionalizing the world and feelings of those that may have once lived before. Much like the sundered worlds, the cracks of other worlds start to show - and the differences start flooding in.",
    youtubeId: "F-xtOSVcVeo",
    releaseDate: "August 27, 2026",
    characters: ["criss_solas", "kay_solas"],
  },
    {
    slug: "s01e01",
    kind: "episode",
    title: "Episode 001",
    blurb: "An introduction to Kay Solas and Criss Solas, and their journey in Eorzea",
    description: "Tales of Osea: A series mirroring the concept of multiversal selves, fictionalizing the world and feelings of those that may have once lived before. Much like the sundered worlds, the cracks of other worlds start to show - and the differences start flooding in.",
    youtubeId: "HoCDbN9SbtY",
    season: 1,
    number: 1,
    releaseDate: "September 9th, 2026",
    characters: ["criss_solas", "kay_solas"],
  },
  {
    slug: "short-1",
    kind: "short",
    title: "TBA",
    blurb: "TBA",
    description: "TBA",
    youtubeId: "TBA",
    releaseDate: "TBA",
    characters: [],
  },

];
