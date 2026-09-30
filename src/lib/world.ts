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
      "The world and land known as Osea is thought to have been many islands. \n\n A fantastical idea if you think about it, a world full of islands! \n\n If anything this is the theory that was poised, what is actually Osea? \n\n  Maybe one day in the ancient past, the world of Osea was not islands but it's own planet filled with different races and spaces. \n\n  Over time, these people were scattered over multiple universes, much like the concept of reincarnation. With no true way of documenting their history, much seems lost. \n\n  The ideation of islands, is that wherever they lay their home in their future, it feels like distant islands from each other. \n\n  Swimmable, per se, maybe even traversable via a boat or other means. \n\n  Whatever the idea of islands is to them, it's a minds-eye concept to those viewing the series.\n\n  In more simple english, think of the metaphor, 'beauty is in the eye of the beholder'. Whatever these islands means to you, even if you are just the one experiencing it, you are welcome.",
  },
  {
    slug: "the-rifts",
    title: "The Rifts",
    summary: "The cracks between worlds — and what leaks through.",
    content:
      "Rifts, portals, however you want to classify them. Except that each hold a different concept for each situation. Unlike the 'sundered' worlds concept, the rifts and portals don't always mean the same exact thing in Osenayan terms. While it's true that while on the lands of Etheryis/The Source, these things mean entirely what you are likely thinking...  \n\n  It isn't uncommon of someone to think of traversing time, space and otherwsise just to find their kin once again. \n\n  A dangerous, clearly paradoxical way of doing things, and has clearly in the past lead to some unforseen consequences. Mirrors aren't always meant to be able to sit in the same space as each other, it's why you can't time travel to the past and bitch-slap yourself. \n\n  The cracks, and the rifts are more to do with the concept of these consequences, comparable in part yes to the sundering etc - yet the consequences weren't because of some long lost ancient idea. In short: We have this thing called the 'brigade' - partial, full and otherwise mirrors of Criss or connections to him, or his sister Kitch. \n\n  This is part of the story of what makes Osea so wild, the consequences of those seeking their kin. Of course, in turn, not everything is about that brigade. \n\n  We've taken care to start shoe-horning in things that aren't directly related, you will see hilariously some fictional fan additions for fun added. A certain Cajun from tales in illustrated pages, one that is indeed missing his Southern Belle.",
  },
  {
    slug: "the-book",
    title: "The Book of Memories",
    summary: "An ancient artifact from Osea that contains incantations, spells, as well as past, present and future memories.",
    content:
      "A book that from the sheer first glance, you would think it's just a family memoir. Family photos, stories and otherwise. \n\n But what would you do if you picked up a book that had incantations, spells, recipies, things that are stories that aren't just a fun story about someone's childhood. \n\n  A history book with things that would scare even those that learned about magic in the world of Eorzea. \n\n  To put it in reality terms, in ways that you'd read about in our real life history...  \n\n  Think of things that would confuse wiccans, pagans, and even yes 'ALCHEMISTS' - Theosophy, occultism, while not all of those are 'safe' to learn about at every stage in life, the example here is that this book would be a danger in the wrong hands. \n\n  It would confuse, it could likely destroy things. It can change narratives, rewrite things used the wrong way. You could even in some ways classify it as an object that a political entity could use to re-write everything. \n\n  Clearly yes a fictional trope in some ways, but it is a truth that that V'anzey line was guarding this book.  \n\n Handed down generations, thousands of years across worlds, this book even contains memories of worlds unknown to those who hold the book. \n\n  If for example, the Ancients of Etheryis were to be classified as Osenayan, then their memories and struggles would be documented. \n\n The magic isn't just the spells in this case.  \n\n A book this large would need several volumes, but each page intentionally writes itself with pictures and information as the spells are uttered to catch the historical information.",
  },
];
