export type WorldSection = {
  slug: string;     // anchor id used by the in-page nav, e.g. "the-sundering"
  title: string;    // section heading
  summary: string;  // one-line hook shown in the nav / card subtitle
  content: string;  // body text; separate paragraphs with a blank line (\n\n)
};

export const worldSections: WorldSection[] = [
  {
    slug: "osea",
    title: "The Islands of Osea",
    summary: "A land that may have once existed, across multiple universes.",
    content:
      "(TEMPORARY) LOREM IPSUM DUSK NEEDS TO WRITE MORE SOON - JUST ADDING TEXT SO I HAVE TIME TO THINK.",
  },
  {
    slug: "the-rifts",
    title: "The Rifts",
    summary: "The cracks between worlds — and what leaks through.",
    content:
      "(TEMPORARY) LOREM IPSUM DUSK NEEDS TO WRITE MORE SOON - JUST ADDING TEXT SO I HAVE TIME TO THINK",
  },
  {
    slug: "the-book",
    title: "The Book of Memories",
    summary: "An ancient artifact from Osea that contains incantations, spells, as well as past, present and future memories.",
    content:
      "(TEMPORARY) LOREM IPSUM DUSK NEEDS TO WRITE MORE SOON - JUST ADDING TEXT SO I HAVE TIME TO THINK",
  },
];
