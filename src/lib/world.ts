export type WorldSection = {
  slug: string;     // anchor id used by the in-page nav, e.g. "the-sundering"
  title: string;    // section heading
  summary: string;  // one-line hook shown in the nav / card subtitle
  content: string;  // body text; separate paragraphs with a blank line (\n\n)
};

export const worldSections: WorldSection[] = [
  {
    slug: "the-sundering",
    title: "The Sundering",
    summary: "How one world became many.",
    content:
      "(TEMPORARY) Fill in the Sundering lore here. What was the world before it split, and what caused the break?\n\n(TEMPORARY) Add a second paragraph: what survived, and what was lost.",
  },
  {
    slug: "the-rifts",
    title: "The Rifts",
    summary: "The cracks between worlds — and what leaks through.",
    content:
      "(TEMPORARY) Describe the rifts themselves here. Where do they open, and why?\n\n(TEMPORARY) What crosses between worlds — memories, selves, or something stranger?",
  },
  {
    slug: "osea",
    title: "Osea",
    summary: "The world our story calls home.",
    content:
      "(TEMPORARY) Describe Osea itself here — its regions, its people, its mood.\n\n(TEMPORARY) How does Osea relate to Eorzea, and where do the alters' memories fit?",
  },
];
