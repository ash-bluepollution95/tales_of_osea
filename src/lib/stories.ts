export type StoryBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Story = {
  slug: string;          // URL id, e.g. "the-cracks-show"
  title: string;
  blurb: string;         // one-line hook for the list
  date: string;          // when it was posted
  characters: string[];  // slugs of who appears → links out to /characters/[slug]
  body: StoryBlock[];    // the story as typed blocks → rendered with shadcn components
};

export const stories: Story[] = [
  {
  slug: "the-cracks-show",
  title: "The Cracks Show",
  blurb: "Kay notices the universes bleeding through again.",
  date: "October 2026",
  characters: ["kay_solas", "criss_solas"],
  body: [
    { type: "heading", text: "Where it started" },
    { type: "paragraph", text: "The first time Kay saw it, he blamed the energy drinks." },
    { type: "quote", text: "That's not a reflection, Criss. That's us." },
    {
      type: "image",
      src: "/images/stories/the-cracks-show.webp",
      alt: "a description for screen readers",
      caption: "optional caption under the image",
    },
  ],
},
];