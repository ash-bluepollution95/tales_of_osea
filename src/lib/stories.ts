
export type ImageCredit = {
  author: string;       // "Greg Keelen"
  authorUrl?: string;   // their profile URL, e.g. https://unsplash.com/@greg_keelen
  source: string;       // "Unsplash"
  sourceUrl?: string;   // the photo's own page URL
};

export type Story = {
  slug: string;          // URL id, e.g. "the-cracks-show"
  title: string;
  blurb: string;         // one-line hook for the list
  date: string;          // when it was posted
  characters: string[];  // slugs of who appears → links out to /characters/[slug]
  music: string; // Inspiration: Eventually i want to re-route to the soundtrack slugs.
  body: StoryBlock[];    // the story as typed blocks → rendered with shadcn components
};



export type StoryBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string; credit?: ImageCredit };

export const stories: Story[] = [
  {
  slug: "the-first-memory",
  title: "The First Memory",
  blurb: "The event horizon, the moment it first fell into place.",
  date: "October 22 2026",
  characters: ["kay_solas", "criss_solas", "angel"],
  music: "Bob Dylan - Fall Out Boy, Drivers License - Olivia Rodrigo",
  body: [
    { type: "quote", text: "CRISS. IF YOU WANT TO SAVE ME YOU HAVE TO FIND THE PORTAL AGAIN." },
   {
  type: "image",
  src: "/images/stories/atlanta-000.webp",
  alt: "Brown and Black Concrete Building near the road, grafitti on the walls. Downtown Atlanta.",
  caption: "Downtown Atlanta. (An Aesthetic Representation of the Event.) ",
  credit: {
    author: "Greg Keelen",
    authorUrl: "https://unsplash.com/@greg_keelen",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/brown-and-black-concrete-building-near-road-during-daytime--xsFKKYt62U"
  }
} ,
	{ type: "heading", text: "Where it started" },
	{ type: "paragraph", text: "There wasn't much going on in downtown Atlanta, Georgia. I was on the way to my early morning shift at the local convenience store. A short breezy morning to start the day fresh, but the fresh feeling was taking forever to come through. Stale, the breeze was cut short, litter and leaves refusing to rustle during a spring morning on the way to work. Atlanta wasn't my true home at this stage, it was just the largest city where you could find work. After a long stint in recovery for my mental health, I finally was able to nab a job somewhere. Alas, in this case I'm really only working the early bird shift serving coffees and donuts. Feels like I'm about to either lose my marbles from the lack of sleep, or the fact something isn't right in the air currently." },
	{ type: "paragraph", text: "The sky was a different color than usual, something I just chalked up to a random weather pattern. Y'know the kind that happens when you know a weird thunderstorm's about to roll in and pour in about a week’s worth of rain in less than an hour? Yea, that." },
    { type: "paragraph", text: "I just dealt with watching them shut off access to the portal, which was the breaking point that sent me to recover in the first place. You'd think I would've had my memory wiped clean of everyone I'd ever met. That a paradox would've been something that would've sent shockwaves in the instance it happened. When in reality, it'd been a secondary family I'd never realized was someday going to no longer exist. Mirrors aren't meant to be a portal you can traverse. Yet since childhood, my father left one open by accident. I can't tell you how much therapy is required to untangle the mess when you don't know which one of your siblings is your real sibling and which is the mirror from the other universe." },
	{ type: "paragraph", text: "The only person I had left due to the aftermath was my sister." },
	{ type: "paragraph", text: "I'd tell you how much this caused her pain, but I feel like she blamed me for the whole of it and won't talk to me. It's been three years. My childhood is an entire lie by now." },
	{ type: "paragraph", text: "There's only about three blocks until I get to work, but something's brewing and I promise you it's not whatever I had for dinner last night. The sky is only getting darker and it's barely even seven in the morning. The stale air wasn't just stale anymore, it was heavy. It wasn't a humid, muggy heavy, it was a 'magic' kind of heavy. What can I say beyond that?" },
	{ type: "paragraph", text: "Except that the footsteps I was taking in the next few minutes were leading me towards another voice I swear I lost." },
	{ type: "paragraph", text: "``CRISS.``" },
	{ type: "paragraph", text: "I kept hearing it the closer I tried getting to work, but the block I was on kept getting longer. It sounded like my younger half-brother who loved to claim he was my twin. The one I just lost to his universe shutting itself down due to the final effects of the long standing paradox. I wanted to save him, I wanted him to live in our universe but we tried that and he got sicker every time he crossed the lines. Hearing his voice get louder wasn't helping because I couldn't see what was going on." },
	{ type: "paragraph", text: "``CRISS. IF YOU WANT TO SAVE ME YOU HAVE TO FIND THE PORTAL AGAIN.``" },
	{ type: "paragraph", text: "In the thickest of thick accents that I could ever pull, I yelled." },
	{ type: "paragraph", text: "``Ah DO NOT SEE WHERE IN SEVEN HELLS Ah'm supposed to find you Kay! Y'ALL DIED ON ME AND FADED TO THE FOUR WINDS.``" },
	{ type: "paragraph", text: "The block suddenly got shorter, and something felt like it was moving me forward. Like the motorized paths in an airport, when you're going to the next terminal." },
	{ type: "paragraph", text: "``CRISS. IF YOU WANT TO SAVE YOURSELF DONT FIGHT THE PULL THATS COMING. I GOT YOU. SOMETHINGS WRONG. WE'LL FIX IT.``" },
	{ type: "paragraph", text: "What could be more wrong than someone telling me they're alive, what could be more proof that I'm actually just hallucinating? I'm starting to panic, I could be late for work right now, time loss is a big problem with me and my managers have said I have to work harder or I won't have my job much longer." },
	{ type: "paragraph", text: "The path stops." },
	{ type: "paragraph", text: "A hazy wash of color forms a door of sorts in front of me, much like the portals my parents used to be able to make with their Osenayan magic. Yet this wasn't one made by my father, nor my older siblings who knew how to do the same things..." },
	{ type: "paragraph", text: "It was moving closer to me, and I had no choice. I blacked out, from what I'm unsure." },
	{ type: "paragraph", text: "Moments later I found myself awake, in a new place, my mind barely remembering what just happened." },
	{ type: "paragraph", text: "``Boy are you ok? You look like you saw a ghost, you’re not from around here?``" },
	{ type: "paragraph", text: "My eyes fluttered open, there wasn't much more I could do to keep them shut - the lights were on, nobody was home in the brain it felt like. Yet whoever this was had an odd accent." },
	{ type: "paragraph", text: "``Ah...ah... no Ah.. I 'm from ...``" },
	{ type: "paragraph", text: "``You're from everywhere and nowhere, and you need a job don't you?``" },
	{ type: "paragraph", text: "Ok, whoever this guy is, my eyes aren't focusing. It's so bright here the walls are a quite nice color but I can't see beyond the lights nor this man's face." },
	{ type: "paragraph", text: "``I'm Angel, you are?``" },
	{ type: "paragraph", text: "``C..riss. I don't know if I remember anymore than that at this stage.``" },
	{ type: "paragraph", text: "I looked at my hands, patted around my hair and my clothes and noticed everything had changed. Finally able to see past the lights, I looked up towards the man in front of me and tried to at least look friendly but it ended up looking like I was either drunk, mentally ill or resting bitch face." },
	{ type: "paragraph", text: "``You're going to be fine, whatever brought you here, you're gonna be in good hands - I'll get you sorted, I own the venue down the stairs and this bar and grill we're in right now. Grab a plate, get a drink, and I'll organize some housing for you.``" },
	{ type: "paragraph", text: "``I .. don't even know you. How will I pay you back?``" },
	{ type: "paragraph", text: "``With your soul..``" },
	{ type: "paragraph", text: "Somehow my mind couldn't handle his answer, and I blacked out yet again. I tried to recall my footsteps that just happened but the memories that brought me here are fading fast. I know I was on the way to work, but I'm starting to forget why, how or otherwise. This is gonna be a long night." }
	
    
  ],
},
];