export type Soundtrack = {
  slug: string;        // URL id, e.g. "main_theme" or "kay_theme"
  title: string;       // track name
  artist: string;      // who wrote/performed it
  blurb: string;       // one-line hook for the list
  description: string; // longer writeup for the detail page
  youtubeId: string;   // YouTube video id → embeds the player
  thumbnail?: string;  // "?" = cover art; falls back to YouTube thumbnail
  album?: string;      // "?" = which album/OST it's from
  duration?: string;   // "?" = length like "3:24"
  episode?: string;    // "?" = slug of the episode it appears in → links to /episodes/[slug]
  characters?: string[]; // "?" = slugs of characters the track "represents"
};

export const soundtrack: Soundtrack[] = [
  {
    slug: "fight_for_osea",
    title: "Fight For Osea",
    artist: "Duskfall",
    blurb: "Duskfall - Fight For Osea / A techno/EDM style track that adheres to a dance vibe that pushes a narrative about passion, the need to feel, and of course fight for one's rights.",
    description: "A techno/EDM style track that adheres to a dance vibe that pushes a narrative about passion, the need to feel, and of course fight for one's rights.",
    youtubeId: "ulJHGk3zT6E",
    // thumbnail: "/images/episodes/teaser.webp",
	duration: "3:18",
	episode: "teaser",
    characters: ["criss_solas", "kay_solas"],
  },
      {
    slug: "caught_up",
    title: "Caught Up",
    artist: "Duskfall",
    blurb: "Duskfall - Caught Up / A song about emotional distance, heartache, and longing. Originally began production and arrangement in 2024 during a stressful time in a relationship.",
    description: "A song about emotional distance, heartache, and longing. Originally began production and arrangement in 2024 during a stressful time in a relationship.",
    youtubeId: "Y5xw7vT3bNg",
    // thumbnail: "/images/episodes/teaser.webp",
	duration: "4:44",
	episode: "teaser",
    characters: ["criss_solas", "kay_solas"],
  },
    {
    slug: "afternoon_chill",
    title: "Afternoon Chill & Vibes [No Copyright Twitch Friendly Tunes]",
    artist: "Duskfall",
    blurb: "No Copyright Twitch Friendly Tunes - A longform video that includes one of the songs used in the teaser or first episode.",
    description: "A longform video that includes one of the songs used in the teaser or first episode.",
    youtubeId: "3Mrgke670MQ",
    // thumbnail: "/images/episodes/teaser.webp",
	duration: "1:06:11",
	episode:  "s01e01",
    characters: ["criss_solas", "kay_solas"],
  },
  {
    slug: "kitch_toothpicks",
    title: "Toothpicks and Faded Dreams",
    artist: "Duskfall",
    blurb: "Two systems. One family. Someone's had to sleep off a sickness. Will this be here when he wakes? A song created by Earthnicity and Duskfall both in memory of a time when Criss was really struggling. It's from Kitch's perspective, and applies to most of her family.",
    description: "A song created by Earthnicity and Duskfall both in memory of a time when Criss was really struggling. It's from Kitch's perspective, and applies to most of her family.",
    youtubeId: "wNx6AgVa8ss",
    // thumbnail: "/images/episodes/teaser.webp",
	duration: "3:50",
	episode:  "s01e01",
    characters: ["criss_solas", "kay_solas"],
  },
   {
    slug: "bob_dylan",
    title: "Bob Dylan",
    artist: "Fall Out Boy",
    blurb: "Fall Out Boy - Bob Dylan / Copyright to Fall Out Boy (rooting for you, Frankie ⚡️⚡️) Cause everyone loves Bob Dylan  I just want you to love me like that, yeah Would you bury me next to Johnny Cash? I`m obsessed, do you love me like that? (Not in an episode is linked in a story)",
    description: "Copyright to Fall Out Boy (rooting for you, Frankie ⚡️⚡️) Cause everyone loves Bob Dylan  I just want you to love me like that, yeah Would you bury me next to Johnny Cash? I`m obsessed, do you love me like that? (Not in an episode is linked in a story)",
    youtubeId: "DVJExMd5pRU",
    // thumbnail: "/images/episodes/teaser.webp",
	duration: "4:44",
	episode: "teaser",
    characters: ["criss_solas", "kay_solas", "angel"],
  },
  {
    slug: "drivers_license",
    title: "Drivers License",
    artist: "Olivia Rodrigo",
    blurb: "Olivia Rodrigo - drivers license (Official Video) Music video by Olivia Rodrigo performing drivers license. © 2021 Olivia Rodrigo, under exclusive license to Geffen Records (Not in an episode is linked in a story)",
    description: "Music video by Olivia Rodrigo performing drivers license. © 2021 Olivia Rodrigo, under exclusive license to Geffen Records (Not in an episode is linked in a story)",
    youtubeId: "ZmDBbnmKpqQ",
    // thumbnail: "/images/episodes/teaser.webp",
	duration: "4:44",
	episode: "teaser",
    characters: ["criss_solas", "kay_solas", "angel"],
  },

];
