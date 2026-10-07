export type Character = {
  // --- shared by BOTH pages (list + detail) ---
  slug: string;      // URL id, e.g. "gibb-slap"
  name: string;      // display name
  title: string;     // epithet you invent
  blurb: string;     // one-line hook for the list

  // --- detail-page only ---
  voicedBy?: string;   // "?" = optional, so uncast characters don't break anything
  charNotes?: string;
  identity: Identity;
  currentSituation: CurrentSituation;
  appearance: Appearance;
  background: Background;
  skills: Skills;
  qualities: Qualities;
  desires: Desires;
  favorites?: string;   // "?" = optional
  other: Other;
  family: Family;
  relationships: Relationships;
  tech?: Tech;             // "?" = not every char has implants/mods
  noGos: string[];         // "Things you can't get away with" → a LIST
  gallery?: { thumb: string; full: string; alt: string; caption?: string }[];   // "?" = per-character image gallery; thumb = grid tile, full = lightbox, alt = screen-reader, caption = optional lightbox text
};

type Identity = {
  birthName: string;
  chosenName?: string; 
  osenayanName: string;
  eorzeanName: string;
  race?: string;
  gender: string;
  orientation: string;
  religion: string;
  politics: string;
};

type CurrentSituation = {
  mainClass: string;
  sideClass: string;
  job: string;
  residence: string;
  economicClass: string;
};

type Appearance = {
  age: string;
  hair: string;
  eyes: string;
  skin: string;
  height: string;
  build: string;
  bodyMod?: string;
  face?: string;
  dominantHand?: string;
  outfit: string;
};

type Background = {
  hometown: string;
  heritage: string;
  firstLanguage: string;
  lifeEvents: string;
  historicalevents: string;
  regrets: string;
};

type Skills = {
  qualifications: string;
  talents: string;
  languages: string;
};

type Qualities = {
  conditions: string;
  strengths: string;
  weaknesses: string;
};

type Desires = {
  yearning: string;
  goals: string;
  wishes: string;
  dreamJob: string;
};


type Other = {
  fears: string;
  secrets: string;
  habits: string;
  hobbies: string;
};

type Family = {
  parents: string[];     
  siblings: string[];   
  children?: string; 
  other?: string;
};

type Relationships = {
  friends: string[];
  enemies: string[];
  partner?: string;      // "?" = might not exist for every char
  crush?: string;
  exes?: string;
};

type Tech = {
  implants: string;
  geneticMods: string;
};

export const characters: Character[] = [
  {
  slug: "kay_solas",
  name: "Kay",
  title: "Kay Solas",
  blurb: "Chaotic Sibling, 'Worst Healer Ever', Career crafter, chronic energy-drink addict.",
  
  voicedBy:"Cheese",
  
  identity: {
  birthName: "He refuses to tell anyone, including Criss.",
  osenayanName: "Doesn't remember.",
  eorzeanName: "He just goes by Kay, he didn't bother to really fake an Eorzean name.",
  race: "Miqo'te Sunseeker",
  gender: "Male (Transgender) ",
  orientation: "Greysexual, Panromantic",
  religion: "Saturday Morning cartoons",
  politics: "Ugh.",
  },
  currentSituation: {
  mainClass: "Viper",
  sideClass: "Astrologian",
  job: "Career crafter within Amelie Corp inside Bloomer's HQ -- Tataru made him a slave.",
  residence: "He likes to say that he has an apartment in Emperyum, but in reality he's got a live in apartment in that HQ -- Tataru's accomplice Amelie signed off on it recently.",
  economicClass: "He spent all of his gil one weekend on the Light heavyweight healer jacket, and had to ask his employer for a ride home -- because he could not walk home from Solution Nine.",
  },
  
  appearance: {
  age: "Earlier 30s. maybe late 20s",
  hair: "red/black - Dawntreader braided hair.",
  eyes: "Red",
  skin: "Similar to the rest of the fam he's not entirely white but he's also not native, nor any other thing he is just half osenayan and whiter than Criss. ",
  height: "181 cm",
  build: "Kay states, and we quote 'It is all in the hips baby!'",
  face: "face 4",
  bodyMod: "TBSE/SBTL",
  dominantHand: "*looks at hands* BOTH! I CAN SLAP EVERYONE JUST LIKE DAVIE504!",
  outfit: "Light Heavyweight jacket of Healing, and his comfort outfit is a Baseball style shirt-jacket with no undershirt, and really worn jeans.",
	  
  },
  
  background: {   hometown: "Eorzea wise, he was found to have 'hailed' from somewhere out in the Twelveswood, but Kay's other universe location was in Georgia, just outside of Atlanta.",
  heritage: "Half Osenayan, but he didn't grow up knowing much about it - so he just thinks he's a suntanned part irish kid",
  firstLanguage: "ELELATOR GO DOWN DA HOOOOOOLLEEE (Yea Y'shtola and G'raha still dont undesrtand that reference)",
  lifeEvents: "Winning the Jumbo Cacpot, and then getting stranded in Ul'dah because he lost it all on Triple Triad",
  historicalevents:"Witnessing Eorzean Jesus after a few too many energy drinks in Solution nine.",
  regrets: "Pissing Kitch off, because Criss doesn't know it yet but she's here, and SHE IS AN ANGY BUNNY.",
  
  },
  skills: {   qualifications: "I majored in if you ain't got no money i'll take my broke ass home",
  talents: "Quoting 90s cartoons",
  languages: "English",
  
  },
  qualities: {   conditions: "Similar to Criss he's got DID, CPTSD, Borderline,  AuDHD of the kind that drinks the Solution nine energy drinks and STILL can't function.",
  strengths: "Not a lot, but Forchenault once said he's A Hyperactive one, and then sent him through to the Studium, and he aced the Culinarian studies",
  weaknesses: "anytime he hears the words 'ARCHON LOAF' he mutters 'CEMENT' ", 
  },
  desires: {   yearning: "To figure out the scariest of truths: Document the reality of which universe is what, so his and Criss's memories can finally rest easy. He just doesn't realize that the realities issue isn't just because of the past, but because of the Ancient Osenayan book that's causing havoc.",
  goals: "Wanting to learn Marauder, probably because AuDHD and focusing issues.",
  wishes: "If he can't fix what's wrong, or figure out the truth- that someone just wipes his mind. ",
  dreamJob: "Wanted to be a recording artist as a kid, settled for Hot Dog Seller and then upgraded to Tech specialist.", },
  other: {   fears: "He's already lost his mind, but he fears gaining it back's going to make him lose his family. As well as the idea that the infection he can't control from the implants will take over and he'll either die or lose his mind.", 
  secrets: "Transmasc male, is not actually Criss's twin but his partial mirror from a mirrored universe -- but in some format or another is acutally his half brother. ", 
  habits: "Walking into the Rising Stones, burping really loud -- and then shrugging, and blaming it on Urianger.", 
  hobbies: "Singing (badly), 'ARTING' - likes drawing and secretly has a stash of books with sketches in it, but nobody really has seen them.", },
  family: {   parents: ["Marai'ii X'voor, Rowan McNamara"],   
  siblings: [" Michael (Mica), Cameron (Cam), Timothy (Tim), Lucien (Gren), Kitch (Christina), Criss (Criss), Aeron (Arrow), Adriana (Adri), MEEEEEEE (Gibbs Slap/Kay), Tobias (Tobi), Victoria (Tori) , Matthew (Jun)   "], 
  children: "He said he's not really got any but he was in relationship with Felix in some format of a polycule, so Criss's kids call him Cunckle? (At least Tayvin likes to call him that xD it's his way of calling him Cunt of an Uncle XD) ",  },
  relationships: {   friends: ["He made friends with a Drunk at the Gold Saucer, said his name was 'JIMMY' for some reason -- it was probably Godbert playing Triple Triad. "],  
  enemies: ["Himself."], 
  partner: "In another 'time'/universe it was Felix, and just like Kitch, Kay knows EXACTLY where to find him -- he's just unsure if Felix knows what's up or down yet.",      
  crush: "Erenville.", 
  exes: "He jokes Wuk Lamat is his Ex, but in reality he's just a dumb catboy XD ",  },
  tech: {   implants: "He's got a knee replacement, and it's not one he had when he was alive outside of Eorzea, he got stabbed in a fight and they stuck an electrope based replacement in it-- he's got some story about it - because it's slowly causing some 'issues'. ", 
  geneticMods: "Technically the replacement is a 'GENETIC MODIFICATION' but Kay didn't know about the effects, he'll joke he didn't read the ToS -- but in reality, it was a dodgy side deal because he didn't have the funds to deal with it -- and Criss wasn't around yet. ",  },             
 gallery: [
 { thumb: "/images/characters/kay_solas/01-thumb.webp", full: "/images/characters/kay_solas/01-full.webp", alt: "Kay Solas, black and red hair miqo'te, red eyes, red and black open jacket.", caption: "Kay and Criss in Aethrochemical Research Facility." },
  { thumb: "/images/characters/kay_solas/02-thumb.webp", full: "/images/characters/kay_solas/02-full.webp", alt: "Kay Solas Viper Outfit, black and red hair, miqo'te, red eyes, baseball jacket with no undershirt, torn jeans and ripped knees.", caption: "Kay hawking outside of the Bloomers Bar and Grill." },
  { thumb: "/images/characters/kay_solas/03-thumb.webp", full: "/images/characters/kay_solas/03-full.webp", alt: "Kay Solas Astrologian Outfit, black and red hair, miqo'te, red eyes, cosmic exploration tech gear.", caption: "Kay standing inside a high tech area (Spoiler Dungeon Post DT)." },
 ],
  noGos: ["Pulling Kay's tail, Calling Kay 'CRISS', Not letting Kay `Gibbs slap you`, Telling Kitch where Kay is, and what he's done."],           
  },
  {
  slug: "criss_solas",
  name: "Criss",
  title: "Criss Solas",
  blurb: "Leader, Healer, Country Bumpkin and Charismatic Parent.",
  
  voicedBy:"ApolloTheGremlin",
  
  identity: {
  birthName: "He'll tell you it's Christopher Ryan David X'voor, but it's likely Christian Marin X'voor.",
  osenayanName: "SUPPOSEDLY it's Matoya'iivi Na'agora-- but he doesn't remember what Kay's is, their universes alone were muddy.",
  eorzeanName: "He goes by K'rhis but he met another one like him -- with the same name",
  race:"Miqo'te Sunseeker",
  gender: "Male",
  orientation: "Will tell you he's straight, but with a sly hilarious smirk he'll remind you he's taken AND his husband made him gay.",
  religion: "Whatever floats, wether it's in the toilet, the shower floor, or in the sky.",
  politics: "He's giving a large snarl, he can't stand politics and he'd rather not answer. Morally he's different than the body in that there's less rigidity in the world, and things are never black and white -- As much as his brain tells him otherwise, there's a rainbow over 'yonder' and he's going to find either a new found family if he can't find his -- and on his way he'll do his best to prop up those around him.",
  },
  currentSituation: {
  mainClass: "White Mage.",
  sideClass: "Samurai",
  job: "Host/Server at the Paissa 'Litterbox' Venue.",
  residence: "Since unable to 'LIVE' where he's going to tell you he's from -- (Which he'll joke that Felix would say is Felix's pants..) he's got a shared flat with friends he's made in Emperyum.",
  economicClass: "Well off enough to exist, poor enough to still pay taxes.",
  },
  
  appearance: {
  age: "30s",
  hair: "Blue with Pink, and depending on the version of the story arc he's either got the longer braided hair (Dawntreader mod that goes on the 157 Styled For Hire hair) or a standard just above shoulders under ear length",
  eyes: "Glassy Red",
  skin: "He's not standard caucasian, but he's an odd color that is hard to explain -- but in Eorzea he's got Mithra markings",
  height: "186 cm",
  build: "Lightweight and Squishy",
  face: "face 4",
  bodyMod: "TBSE Twunk",
  dominantHand: "*blinks* Right hand. *puts hand over felix's mouth*",
  outfit: " Uses the modded Light heavyweight jacket of scouting due to not owning the Dyeable, and some matching edgy aesthetic pieces. ",
	  
  },
  
  background: {   hometown: "Eorzea wise, he was found to have 'hailed' from somewhere out in the Twelveswood, but he's from Georgia, likely outside of Atlanta but he isn't sure anymore..",
  heritage: "Osenayan he'll tell you, but he's a Sunseeker Miqo'te -- tribeless because nobody remembers him",
  firstLanguage: "Swearing",
  lifeEvents: "My brother Lucien getting DECKED by our brother Michael once.. ",
  historicalevents:"Does 9/11 count, or are we in for another round of tears when I say Haurchefant?",
  regrets: "Pissing my sister off, both in Eorzea once and when Ah was younger..",
  
  },
  skills: {   qualifications: "AH shit... Ah know I went to college for a bit but shit went weird ..",
  talents: "Organizing stupid people, namely my family.",
  languages: "English, because his father never taught him Osenayan, and Miqo'te won't teach him their language -- if anything one of the K Tribe members just looked at him and said We whistle out our ass. (Which isn't true, but it was likely the guy that shares that name he uses lol)",
  
  },
  qualities: {   conditions: "Borderline Personality Disorder, CPTSD, and has Dissociative Identity Disorder, Undiagnosed AuDHD (According to him it's non existant, and according to Kitch it's diagnosed)",
  strengths: "Caretaking",
  weaknesses: "You ever see one of those Corkboards with the pins and the strings everywhere? -- That but it's all the universe information between Eorzea and what he 'KNOWS'", 
  },
  desires: {   yearning: "To figure out who he is, and find his family again.",
  goals: "Getting that new guy to put the cards down and pick a better class, because co-healing with a guy that sounds Cajun - is only as fun as actually keeping people alive.",
  wishes: "If he could not DIE in Eorzea and go home again, but if he dies in Eorzea, at least go out with a bang?",
  dreamJob: "None, he's got it sorted for what he feels is right - no more no less.", },
  other: {   fears: "Losing his mind", 
  secrets: "He has none, Kay tells everyone what's his 'SECRET' before he can hide it.", 
  habits: "Gum chewer, and since Eorzea isn't really huge on chewing gum for some weird reason (haven't seen anything close lol) -- he's taken up finding 'Chew toys' lol", 
  hobbies: "Writing down his memories when he remembers them, including the lyrics to country music (Because y'know the body isn't huge on it, and yet he loves to remind us this XD) -- but also he's an avid crafter/gatherer, and likes to make sure people are taken care of - so he'll cook a good meal and share it.", },
  family: {   parents: ["Marai'ii X'voor, Mahal'ya'iivi N'agoraa"],   
  siblings: ["Michael (Mica), Cameron (Cam), Timothy (Tim), Lucien (Gren), HIMSELF (Criss), Kitch (Christina), Aeron (Arrow), Adriana (Adri), Kris (Gibb Slap/Kay), Tobias (Tobi), Victoria (Tori) "], 
  children: "Tiergan Aisi Solas, Tayvin Rana Marie Solas, Luan Kieran Solas, Lorenzo Solas, Denzel Lorenz (but not lorenzo XD) Solas, Lucas Laurence Solas, Maycein Adelaide-Rose Solas, 'Sonny' Solas, Keegan Solas, Lilac Solas, ",  },
  relationships: {   friends: ["...PENDING LMAO (Criss: NOT FRIENDLESS ROI JUST DOESNT KNOW HOW TO PARSE OUR FRIENDS LIST LMAO)"],  
  enemies: ["Thancred."], 
  partner: "In another 'time'/universe it was Felix, but Criss hasn't found proof he's in Eorzea if at all.",      
  crush: "He blushed a few too many times at Y'shtola, but he's likely made passes at Koana a couple times.", 
  exes: "Theory has it he TRIED TO TAKE G'RAHA OUT TO DINNER ONCE -- but nah he's not got any exes in Eorzea, and he doenst' recall most of them from his other life.",  },
  tech: {   implants: "According to Criss he's got a few teeth crowns and had braces when he was younger? AND THAT MAY JUST BE WHY HE HEARS RADIO (he's kidding btw) from several hometown stations XD", 
  geneticMods: "None but Criss calls the Mithra patterns on a face one that was forced on him, because the fact that it's a thin layer of fur he can't shave off PISSES HIM THE EVER LOVING FUCK OFF.",  },             
  gallery: [
 { thumb: "/images/characters/criss_solas/01-thumb.webp", full: "/images/characters/criss_solas/01-full.webp", alt: "Criss Solas, blue and pink hair, braided messy long hair with fringe (bangs), teal and violet open jacket, black slacks, kneeling, purple floor.", caption: "Criss in an assumed end of the world scenario (Shadowbringers Dungeon)" },
  { thumb: "/images/characters/criss_solas/02-thumb.webp", full: "/images/characters/criss_solas/02-full.webp", alt: "Criss Solas and Angel Of'The'Night, Angel is a white/light blonde haired Elezen with assumed blue-violet eyes. Criss's appearance is, blue and pink hair, braided messy long hair with fringe (bangs), Criss is wearing the Story Teller's crop top dyed with black and teal, and Angel is wearing the Night of Devilry outfit in standard purple hues.", caption: "Angel flirting with Criss inside the Bloomers Bar and Grill." },
  { thumb: "/images/characters/criss_solas/03-thumb.webp", full: "/images/characters/criss_solas/03-full.webp", alt: "Criss Solas, blue and pink hair, braided messy long hair with fringe (bangs), miqo'te, red eyes, teal and violet open jacket.", caption: "Criss inside the Paissa Litterbox Venue, likely a staff portrait." },
  { thumb: "/images/characters/criss_solas/04-thumb.webp", full: "/images/characters/criss_solas/04-full.webp", alt: "Criss Solas, blue and pink hair, mid length hair, miqo'te, red eyes, teal and violet open jacket,", caption: "Criss spotted with shorter hair, most assume this is a form of 'turn' which in non-eorzean terms sort of just means form shift or switch." },
 ],
  noGos: ["Criss hates it when you play with his ears, not because 'HORNY' but because it does sort .. it's like TICKLING but not the horny kind XD Telling him that the snickers bar in the shower is from him, because honestly? He made a mistake once with his sister and said 'I'm gonna go take a shit, and shower' and our partner's system just.. .like never let us live it down lmao. So now Criss is  'SHITS IN THE SHOWER'"],           
  },
  {
  slug: "tori_solas",
  name: "T`rii",
  title: "Tori Solas",
  blurb: "Axe weilding mom-cat, First place in The Great Eorzean Bake Off.",
  
  voicedBy:"Clara/Irene",
  charNotes: "We have glam pics for T'rii, but forgot to crop them, give us time to do her justice!",
  
  identity: {
  birthName: "Victoria 'Tori' (She doesn't in this story entirely remember her surname).",
  osenayanName: "Doesn't remember.",
  eorzeanName: "T'Rii",
  race: "Miqo'te",
  gender: "Female",
  orientation: "Unsure",
  religion: "Religiously untied but respectfully goes along with teh stuff about the twelve, she doesn't remember much about before Eorzea for some reason - Morally she SEEMS quite 'normal' but just give her two minutes.",
  politics: "*insert warrior glowing eye horror story* ",
  },
  currentSituation: {
  mainClass: "Warrior",
  sideClass: "Mom-Cat",
  job: "Daycare inside Limsa Lominsa.",
  residence: "She doesn't really have an apartment, nor ``ROOM`` per se she sleeps wherever she can lay her head - and won't let anyone know otherwise - she has a few places she's stayed at that she calls her ``HOME`` but most of the time she's sleeping it rough as she travels a lot.",
  economicClass: "Blue collar in terms of previous life, and similarly in Eorzea - she was found on the shores when an Ocean Fishing voyage noticed someone laying mostly dead on the beach.",
  },
  
  appearance: {
  age: "Earlier 30s. maybe late 20s",
  hair: "A sleek purple with some pink/magenta highlights (She just said it's all dusky-pinky)",
  eyes: "Stark ocean blue",
  skin: "Sun avoidance here, she's a lot whiter than her brothers in Eorzea for some reason.",
  height: "5' something -- She doesn't really care about stature or height.",
  build: "You REALLY WANNA ASK A LADY ABOUT HER WAIST SIZE?",
  face: "TBA",
  bodyMod: "YAB/Rue",
  dominantHand: "Right.",
  outfit: " Lil' ol me? I just wear this all the time, it's comfy. ",
	  
  },
  
  background: {   hometown: "Eorzea wise, she was found on a random Ocean Voyage trip on the shore somewhere, but outside of that she's likely even though she isn't entirely remembering: From the same place as her brothers, and weirdly her accent is JUST AS THICK as Criss, if not more..",
  heritage: "Half Osenayan, but again her memories are scattered.",
  firstLanguage: "Eorzean according to her, but the twang in her words speak of another world.",
  lifeEvents: "Celebrating one of the kid's birthdays at the Adventurer's guild, she crafted lightweight fabric and card based axes and took them all out 'hunting' across Limsa and hid 'TREASURES' like 'PIRATES' for them",
  historicalevents:"that SPHENE bitch going down.",
  regrets: "Meeting my brothers but not remembering them.",
  
  },
  skills: {   qualifications: "I majored in something, but I Feel like I was a mother once..",
  talents: "Wrangling the tiny sabotenders! (The children)",
  languages: "I dunno.",
  
  },
  qualities: {   conditions: "AuDHD, CPTSD. She's got asthma, and she's managed to find a tea or two that solves SOME of the breathing issues -- how she got through being a WAR we have no clue",
  strengths: "Got kicked out of the Arcanist's guild  after they commented on her 'Form' -- which she took as 'Body Size' (They meant her posture wasn't suited towards casting lol) ",
  weaknesses: "Vylbrand Chocolate Cookies. ", 
  },
  desires: {   yearning: "To survive.",
  goals: "The few memories she's got of this 'OTHER LIFE' she wants to know if it's because 'AZEM' or because 'ASS-HEMS' as she calls her brothers.",
  wishes: "If the OTHER MEMORIES aren't really real, she just wants to continue protecting what makes her happy -and thats' the kids and the families around Limsa.",
  dreamJob: "She wanted actually to be a scholar, AND she even once tried to learn Thamaturgy -- but uh, WORDS ARE HARD was her first statement..", },
  other: {   fears: "Death.", 
  secrets: "Crossword puzzles are her secret.", 
  habits: "Not dressing formally when shes' going out to meet someone for a job, she forgets she's not just a high end WARRIOR but runs the childcare in Limsa.", 
  hobbies: " Baking, party planning.", },
  family: {   parents: ["Marai'ii X'voor, Rowan McNamara"],   
  siblings: ["Michael (Mica), Cameron (Cam), Timothy (Tim), Lucien (Gren), HIMSELF (Criss), Kitch (Christina), Aeron (Arrow), Adriana (Adri), Kris (Gibb Slap/Kay), Tobias (Tobi), Victoria (Tori), Matthew (Jun) "], 
  children: " Similar to Kay, she may have had children but she's unsure. ",
  other: "She has memories that don't stack up with all of the ones that Criss and Kay have - but she shakes it off because there's no way in He-Double-Biscuit Sticks that 'ODIN' is actualyl a sibling -- he's a PRIMAL FFS -- (Hint: O'daan is the guy's osenayan name and he's from a different universe, but we'renot sure who ALL is showing up as we only have so many glam plates made XD)"  },
  relationships: {   friends: ["None really, she hasn't felt comfortable enough to be true friends with anyone but she's friendly to everyone in Limsa."],  
  enemies: ["THAT BITCH THAT BROUGHT THAT DOME DOWN -- THAT FAKE BITCH SPEHNENENNENENENNENENE. I got my eye on her ass."], 
  partner: "IShe may or may not have been with Felix in another time, but she's single but not sure about mingling -- the Pirates will eat her axe if they get too close.",      
  crush: "Shale.", 
  exes: "She jokes about it being Y'shtola's sister when they met throug hthe Arcanists guild but since she's a WAR/MRD -- she uh can't really claim that anymore LOL. ",  },
  tech: {   implants: "None, though somehow the other Miqo'te are swearing she got a boob job", 
  geneticMods: " None, but whatever the gods gave Y'shtola she wants some of that.",  },             
  gallery: [
  { thumb: "/images/characters/tori_solas/01-thumb.webp", full: "/images/characters/tori_solas/01-full.webp", alt: "Tori Solas, pinkish lavendar hair, teal eyes, miqo'te female.", caption: "Tori in the Limsa Lominsa inn attempting to throw her axe in someone's general direction." },
  { thumb: "/images/characters/tori_solas/02-thumb.webp", full: "/images/characters/tori_solas/02-full.webp", alt: "Tori Solas, pinkish lavendar hair, teal eyes, miqo'te female.", caption: "Tori seemingly reading what seems to be the book that is causing chaos." },
  { thumb: "/images/characters/tori_solas/03-thumb.webp", full: "/images/characters/tori_solas/03-full.webp", alt: "Tori Solas, pinkish lavendar hair, teal eyes, miqo'te female.", caption: "Tori laying happily on the INN room bed." },
  { thumb: "/images/characters/tori_solas/04-thumb.webp", full: "/images/characters/tori_solas/04-full.webp", alt: "Tori Solas, pinkish lavendar hair, teal eyes, miqo'te female.", caption: "Tori Gleefully standing in the limsa inn room with her axe by her side." },
  { thumb: "/images/characters/tori_solas/05-thumb.webp", full: "/images/characters/tori_solas/05-full.webp", alt: "Tori Solas, pinkish lavendar hair, teal eyes, miqo'te female.", caption: "Tori happily smiling." },
  { thumb: "/images/characters/tori_solas/06-thumb.webp", full: "/images/characters/tori_solas/06-full.webp", alt: "Tori Solas, pinkish lavendar hair, teal eyes, miqo'te female.", caption: "Tori having a sip of a hot drink in the Starlight Mug from Limsa." },
 ], 
  noGos: ["Calling her Victoria. Calling her Kitch. *(Sometimes the pirates mix her up with Kitch even tho Kitch is a Viera-- it's... just drunk dumb boys according to Tori)  "],           
  },
   {
  slug: "felix_solas",
  name: "Felix",
  title: "Felix Solas",
  blurb: "Collecting Partners Like it's a Trading Card Game (TM).",
  
  voicedBy:"TBA",
  
  identity: {
  birthName: "Felicity Lorcan",
  osenayanName: "Married into Osea... got told it's 'Fe-lick' by his husband.",
  eorzeanName: "Felix",
  race: "Midlander Hyur",
  gender: "Transgender Male",
  orientation: "Right, Left, Center, Up, Down, Diagonal and sometimes with the Balance Bar? Y'know like Dance Dance Revolution?",
  religion: "Church of the she'll be right, mince n' cheese pie",
  politics: "Whatever floats Criss's boat",
  },
  currentSituation: {
  mainClass: "Blue Mage",
  sideClass: "Bleu Mage",
  job: "Solution nine - kitchen staff.",
  residence: "S9 Apartments.",
  economicClass: "I work in a kitchen, what do you think?",
  },
  
  appearance: {
  age: "30s",
  hair: "Black",
  eyes: "I gave up looking in a mirror years ago",
  skin: "Whiter than the shocked face my mother when I ran away from home.",
  height: "Got a measuring tape?",
  build: "Well I don't have tits anymore so that's a thing",
  face: "TBA",
  bodyMod: "TBSE",
  dominantHand: "*holds up Criss's right hand*",
  outfit: " anything that's not my work uniform",
	  
  },
  
  background: {   hometown: "They assumed he was inside the dome when it happened, but in reality he just lied to them ..",
  heritage: "Australian, but lived in the USA for a long time, he married into the Osenayan bloodline every single time across the universes..",
  firstLanguage: "...If you tell me ONE MORE G-D TIME GLEN MCGRATH IS A WANKER I AM GONNA LOSE MY SHIT ... wait lanugage? SWEARING. ENLGIHS WAHTEVER",
  lifeEvents: "Well, getting married to every version of my cat in other universes but yet I haven't found him here i'm gonna lose my shit.",
  historicalevents:"None really, I work in a freaking kitchen.",
  regrets: ".... If you see my kids around tell them that's what I meant.",
  
  },
  skills: {   qualifications: "I majored in being a problem.",
  talents: "Parents don't have talents.",
  languages: "Turali tinged eorzean, knows a few swear words in Gaelic, failed spanish",
  
  },
  qualities: {   conditions: "Despite having their insides changed and outside changed -- hormones still thwap him once a month. OH AND HIS KIDS ARE AN ILLNESS.. HE SAW MAYCEIN ONCE AND KNEW IT WAS HER because all she kept doing was asking for Turtle Treats.",
  strengths: "Criss's thighs.  ",
  weaknesses: "Criss. ", 
  },
  desires: {   yearning: "Finding Criss, Kay, Tori and the rest of the family.",
  goals: "...GETTING OUT OF THE DAMN KITCHEN.",
  wishes: "ust to get out of here and back home, but if i can't have that just-- knowing my family is safe..",
  dreamJob: "You don't understand, i'm a parent... we don't get dream jobs...", },
  other: {   fears: "Criss being with someone else. Criss actually existing somewhere else and NOT knowing anything.. Losing his family.", 
  secrets: "Realizing Criss is likely not going to remember him, so has given up partially on that fear..", 
  habits: "Microwaving pies, it's a sin but he ain't got time to find a pie warmer..", 
  hobbies: " Shhh crochet, it's a Lorcan tradition -- weirdly the males do this in the Lorcan family, not the females! Felix's brothers taught him when he was younger..", },
  family: {   parents: ["????, ????"],   
  siblings: ["Ryan Lorcan, Larkin Lorcan "], 
  children: " Ask me which universe, `ASPEN GET THE FUCK OUT OF THE WIND-- MACE STOP HITTING JUPITER`.. `BY GOD TIERGAN STOP FLIRTING IWTH YOUR HUSBAND IM BEING SERIOUS` ",
  other: "Technically the center in a polycule but he kinda gave up the idea of being able to wrangle them all because he can't find them all."  },
  relationships: {   friends: ["Co-workers."],  
  enemies: ["The Paissa Litter Box Owner.... (Not really an enemy, he just says this because when he finds Criss he's jealous of Angel-- but Angel isn't really his enemy lol)."], 
  partner: "Well technically it's Criss, but i was ... sort of... a bit slutty and dragged more in to a polycule once.",      
  crush: "Koana.", 
  exes: "grr... If you see Marlin tell him i said hello.. ",  },
  tech: {   implants: "None", 
  geneticMods: " None that he's aware of.",  },             
 gallery: [
 { thumb: "/images/characters/felix_solas/01-thumb.webp", full: "/images/characters/felix_solas/01-full.webp", alt: "Felix Solas, eastern techno jacket outfit, black hair, green-teal eyes, australian transmasc Midlander Hyur.", caption: "Felix in the Grand Cosmos seeking his family." },
 { thumb: "/images/characters/felix_solas/02-thumb.webp", full: "/images/characters/felix_solas/02-full.webp", alt: "Felix Solas, eastern techno jacket outfit, black hair, green-teal eyes, australian transmasc Midlander Hyur.", caption: "Felix feeling Flirty while inside the Tuliyollal inn." },
 { thumb: "/images/characters/felix_solas/03-thumb.webp", full: "/images/characters/felix_solas/03-full.webp", alt: "Felix Solas, eastern techno jacket outfit, black hair, green-teal eyes, australian transmasc Midlander Hyur.", caption: "Felix suddenly seeing himself in drag, at the request of his `arch enemy` Angel OfTheNight.." },
 // { thumb: "/images/characters/criss_solas/04-thumb.webp", full: "/images/characters/criss_solas/04-full.webp", alt: "Criss Solas, blue and pink hair, mid length hair, miqo'te, red eyes, teal and violet open jacket,", caption: "Criss spotted with shorter hair, most assume this is a form of 'turn' which in non-eorzean terms sort of just means form shift or switch." },
], 
  noGos: ["Start chanting AUSSIE AUSSIE AUSSIE OI OI OI. Telling him that Criss married someone else in this universe. Tell him that he's not a real man.  "],           
  } ,
    {
  slug: "roi_vanzey",
  name: "R'oidan",
  title: "R'oidan Tia",
  blurb: "Ever heard a song about a bard that was a chicken shit?",
  
  voicedBy:"TBA",
  
  identity: {
  birthName: "Rhiannon V'anzey",
  osenayanName: "Roi'adan Vanzey",
  eorzeanName: "R'oidan Tia",
  race: "Miqo'te Sunseeker",
  gender: "Transgender Male",
  orientation: "Like I have time for that.",
  religion: "The twelve are important to him.",
  politics: "It's important to have a voice.",
  },
  currentSituation: {
  mainClass: "Bard",
  sideClass: "Scared, Chicken Shit, Bard",
  job: "Carline Canopy Janitor",
  residence: "somewhere in the Lavendar beds.",
  economicClass: "Pfft, i'm poor what do you expect.",
  },
  
  appearance: {
  age: "20s",
  hair: "Orange/Ginger",
  eyes: "Green",
  skin: "Skin, that's what it is!",
  height: "*counts on one hand* POTATO!",
  build: "I'm a medium build, smaller than Tai tho.. he's beefy",
  face: "face 4",
  bodyMod: "TBSE/SBTL",
  dominantHand: "Why are you asking such a person--- OH YOU MEAN FOR WRITING? I'm a right handed pen wi...GET YOUR MIND OUT OF THE GUTTER.",
  outfit: "What i'm wearing, beacuse other than that I have night wear that's like ten years old",
	  
  },
  
  background: {   hometown: "He doesn't care to know, even though he has memories of the deck of a ship -- at the end of a universe. ",
  heritage: "He knows he's at least half osenayan, and knows he had a book of memories -- but those memories are fading fast.",
  firstLanguage: "Gridania Flavored Eorzean. ",
  lifeEvents: "Finding T'aine... Losing T'aine, Finding him again -- Y'know the brotherly rotation..",
  historicalevents: "The red moon falling, you could see it from the canopy.. I wasn't high enough ranked to be there to fight - but i lent my skills to guard New Gridania..",
  regrets: "Finding Antaine.",
  
  },
  skills: {   qualifications: "Mediocre Bard.",
  talents: "Carving, both food sculptures and wood.",
  languages: "Mostly Eorzean (aka English lol) -- but it's accented, plausibly celtic, plausibly some format of rhotic but not sure.",
  
  },
  qualities: {   conditions: "Likely Autistic & ADHD. Easily lost in thought.",
  strengths: "Storytelling.",
  weaknesses: "Pumpkin Cookies.", 
  },
  desires: {   yearning: "Getting strong enough to aid people in their plight..",
  goals: "As much has figuring out his former life would be a goal, he'd rather become stronger and use his bard abilities to save people..",
  wishes: "T'aine to stop asking what his bra size is, because getting his former gender doxxed iS NOT ON THE AGENDA right now.",
  dreamJob: "Chocolatier in Limsa.", },
  other: {   fears: "Finding out what his former life actually was.", 
  secrets: "None really.", 
  habits: "Showing off his bow, and when asked he's honest `I did buy it but i liked the glowy bits`.", 
  hobbies: "  Baking, Carving, Sculpting.", },
  family: {   parents: ["????, ????"],   
  siblings: ["Antaine V'anzy (T'aine Vanzey), there may be others but the two of them only remember each other."], 
  children: " NONE ",
  other: "Not really a secret but not common knowledge, he has a stuffed toy that made it through worlds with him that he's not sure where he got it. It's quite advanced in how it's built according to him, and it's been with him as long as he can remember. (We're not sure WHICH IRL stuffed toy this represents because he just made this up on the fly now.)"  },
  relationships: {   friends: ["Everyone he meets hopefully?"],  
  enemies: ["Antaine... but in reality nobody."], 
  partner: "None.",      
  crush: "I dont have time for that..", 
  exes: "Waaat? ",  },
  tech: {   implants: "None", 
  geneticMods: " None that he's aware of.",  },             
  gallery: [
  { thumb: "/images/characters/roiadan_vanzey/01-thumb.webp", full: "/images/characters/roiadan_vanzey/01-full.webp", alt: "R'oidan Tia,long sleek ginger colored hair with a couple braids, glowing green eyes. Male Miqo'te.", caption: "R'oidan visiting the Paissa Litterbox Venue." },
  { thumb: "/images/characters/roiadan_vanzey/02-thumb.webp", full: "/images/characters/roiadan_vanzey/02-full.webp", alt: "R'oidan Tia,long sleek ginger colored hair with a couple braids, glowing green eyes. Male Miqo'te.", caption: "R'oidan showing off his purchased Bard Bow.." },
  { thumb: "/images/characters/roiadan_vanzey/03-thumb.webp", full: "/images/characters/roiadan_vanzey/03-full.webp", alt: "R'oidan Tia,long sleek ginger colored hair with a couple braids, glowing green eyes. Male Miqo'te.", caption: "R'oi expressing regret at finding T'aine." },
  { thumb: "/images/characters/roiadan_vanzey/04-thumb.webp", full: "/images/characters/roiadan_vanzey/04-full.webp", alt: "R'oidan Tia,long sleek ginger colored hair with a couple braids, glowing green eyes. Male Miqo'te.", caption: "R'oi expressing even more threatening regret at finding his brother." },
  { thumb: "/images/characters/roiadan_vanzey/05-thumb.webp", full: "/images/characters/roiadan_vanzey/05-full.webp", alt: "R'oidan Tia,long sleek ginger colored hair with a couple braids, glowing green eyes. Male Miqo'te.", caption: "R'oidan exploring the aftermath of Pagl'than.." },
  ], 
  noGos: ["Call him Rhiannon.Ask him his makeup routine. Tell him that he's not a real man. Ask him dating tips. Ask him where his brother lives"],           
  } ,
  {
  slug: "antaine_vanzey",
  name: "Tai'ne",
  title: "T'aine Tia ",
  blurb: "I can jump roof to roof and give my friends free cable! It's BAD ASS!",
  
  voicedBy:"TBA",
  
  identity: {
  birthName: "Ant'aine V'anzey",
  osenayanName: "either spelling works.",
  eorzeanName: "T'aine Tia",
  race: "Miqo'te Sunseeker",
  gender: "Male",
  orientation: "Bitches.",
  religion: "The twelve are important to him, but let's be real he's lusted after the female deities more than once.",
  politics: "The sheer fact that Gridania keeps trying to shun my brother for who he is, means I have to go after a Padjal with my fists OR my shinobi knives..",
  },
  currentSituation: {
  mainClass: "Ninja.. of the Night ",
  sideClass: "Security Ninja",
  job: "Carline Canopy - All rounder (Cook, Ticket stall and sometimes Janitorial Duties with Roi)",
  residence: "somewhere in the Lavendar beds.",
  economicClass: "If Gridania was aware of it's overspent luxuries we'd all be better off..",
  },
  
  appearance: {
  age: "20s",
  hair: "Orange/Ginger",
  eyes: "Hazel",
  skin: "Skin, and i'm not sure what shade it is.",
  height: "Taller than Roi that's what",
  build: "Beefcake.",
  face: "face 4",
  bodyMod: "TBSE (HUNK I THINK)",
  dominantHand: "LEFT RIGHT LEFT THE MILI-- ok fine i write shit with my right hand shut up.",
  outfit: "I have to fit in, so whatever this is.",
	  
  },
  
  background: {   hometown:  "He doesn't know but he knows he has memories of the deck of a ship -- at the end of a universe just like Roi.  ",
  heritage: "He knows he's at least half osenayan, and knows Roi has his book of memories -- but those memories are fading fast. He also doesn't give two shits.",
  firstLanguage: "Silence, and my fists.",
  lifeEvents: "Roi tripping down the stairs because he forgot to put the sign up that said wet floor...",
  historicalevents: "Explaining to Miounne that Roi was indeed a male and not just some farce.. god these people are weird.",
  regrets: "Gridania..",
  
  },
  skills: {   qualifications: "None really. Feral Miqo that's what!",
  talents: "Acting all feral, but in reality he's just a dumbass..",
  languages: "Mostly Eorzean (aka English lol) -- but it's accented, plausibly celtic, plausibly some format of rhotic but not sure.",
  
  },
  qualities: {   conditions: " Claims to be `FERAL` but is just ... you get the math right? (ADHD/Autistic etc)",
  strengths: "playing fun games with the kids that visit the canopy.",
  weaknesses: "Roi's cookies.", 
  },
  desires: {   yearning: "Keeping Roi out of trouble..",
  goals: "Keeping Roi out of trouble... sometimes keeping him IN trouble.",
  wishes: "Keeping Roi out of trouble..",
  dreamJob: "Keeping Roi out of trouble.", },
  other: {   fears: "Losing Roi.", 
  secrets: "He knows where the muffin man is (That's not really a secret but ok.)", 
  habits: "Sitting on ledges like a feral cat..", 
  hobbies: "Taking time off to help with the kids around the Canopy.", },
  family: {   parents: ["????, ????"],   
  siblings: ["Roi'adan V'anzey (R'oidan Tia), there may be others but the two of them only remember each other."], 
  children: " NONE ",
  other: "Has a sketchbook in his room, whenever he somehow partially remembers something he sketches it down. Roi just thinks it's a general sketchbook."  },
  relationships: {   friends: ["Nobody but Roi."],  
  enemies: ["Most of Eorzea for being transphobic twats. (According to Taine that is.)"], 
  partner: "None.",      
  crush: "I will crush someone's head in for what opinions they provide of my brother", 
  exes: "I'm sure i had someone but now's not the time",  },
  tech: {   implants: "None", 
  geneticMods: " None that he's aware of.",  },             
  gallery: [
  { thumb: "/images/characters/antaine_vanzey/Taine01-thumb.webp", full: "/images/characters/antaine_vanzey/Taine01-full.webp", alt: "T'aine Tia,long messy tied ginger colored hair, fluffier feral-style cat ears, hazel eyes, Male Miqo'te.", caption: "T'aine with a menacing look, holding a shinobi knife just above his shoulder." },
  { thumb: "/images/characters/antaine_vanzey/Taine02-thumb.webp", full: "/images/characters/antaine_vanzey/Taine02-full.webp", alt: "T'aine Tia,long messy tied ginger colored hair, fluffier feral-style cat ears, hazel eyes, Male Miqo'te.", caption: "T'aine doing the pose of the unbound." },
  { thumb: "/images/characters/antaine_vanzey/Taine03-thumb.webp", full: "/images/characters/antaine_vanzey/Taine03-full.webp", alt: "T'aine Tia,long messy tied ginger colored hair, fluffier feral-style cat ears, hazel eyes, Male Miqo'te.", caption: "A side portrait of T'aine, side eyeing Roi." },
  { thumb: "/images/characters/antaine_vanzey/Taine04-thumb.webp", full: "/images/characters/antaine_vanzey/Taine04-full.webp", alt: "T'aine Tia,long messy tied ginger colored hair, fluffier feral-style cat ears, hazel eyes, Male Miqo'te", caption: "A fake hunt bill styled with T'aine's portrait" },
  { thumb: "/images/characters/antaine_vanzey/Taine05-thumb.webp", full: "/images/characters/antaine_vanzey/Taine05-full.webp", alt: "T'aine Tia,long messy tied ginger colored hair, fluffier feral-style cat ears, hazel eyes, Male Miqo'te", caption: "A chill portrait of T'aine probably plotting revenge on Carline Canopy." },
   { thumb: "/images/characters/antaine_vanzey/Taine06-thumb.webp", full: "/images/characters/antaine_vanzey/Taine06-full.webp", alt: "T'aine Tia,long messy tied ginger colored hair, fluffier feral-style cat ears, hazel eyes, Male Miqo'te", caption: "T'aine attempting stealth, very poorly." },
    { thumb: "/images/characters/antaine_vanzey/Taine07-thumb.webp", full: "/images/characters/antaine_vanzey/Taine07-full.webp", alt: "T'aine Tia,long messy tied ginger colored hair, fluffier feral-style cat ears, hazel eyes, Male Miqo'te.", caption: "T'aine proving his worth (really poorly) as a Ninja." },
	 { thumb: "/images/characters/antaine_vanzey/Taine08-thumb.webp", full: "/images/characters/antaine_vanzey/Taine08-full.webp", alt: "T'aine Tia,long messy tied ginger colored hair, fluffier feral-style cat ears, hazel eyes, Male Miqo'te.", caption: "The first triple triad card (fake) of T'aine falling asleep on duty." },
  ], 
  noGos: ["Let Roi AND THE kids around the canopy dress and put him in makeup. Bake him `cookies` (yea the sparkly kind that make him doozy lol). Tell him he's being over protective. Tell him he's the one accidentally getting transphobic, people are just asking questions."],           
  } ,
  {
  slug: "andrew_bryant",
  name: "Andrej",
  title: "Andrej Steelhelm",
  blurb: "The Pickled Nickelback Homewrecker!",
  
  voicedBy:"TBA",
  
  identity: {
  birthName: "Andrew Bryant",
  chosenName: "Andy",
  osenayanName: "He wasn't allowed to know",
  eorzeanName: "Andrej Steelhelm",
  race: "Highlander Male",
  gender: "Male",
  orientation: "Straight",
  religion: "I grew up in the church, but just like everything else in life - shit show let downs.",
  politics: "See my blade with the gun attached to it? Yea, that's my politics. ",
  },
  currentSituation: {
  mainClass: " Gunbreaker / Resistance ",
  sideClass: " See above" ,
  job: "Woodcutter",
  residence: "around the area of Rhalgr's Reach.",
  economicClass: "Technically `POOR` but that's mostly because he doesn't care about gil, or rather just enough to keep up with his blade.",
  },
  
  appearance: {
  age: "40s (Y'know more like Cid's 30s in the game but 40s outside of FFXIV)",
  hair: "grey/silver/white blonde/white mixed",
  eyes: "Light Grey Blue",
  skin: "Ruddy White Eurocentric Hyur.",
  height: "Likely over 6'",
  build: "Whatever's on these bones.",
  face: "TBA",
  bodyMod: "TBSE HUNK",
  dominantHand: " Right. ",
  outfit: " I don't go anywhere without this jacket i got on.",
	  
  },
  
  background: {   hometown:  "Eorzea he's from around Rhalgrs' Reach, but outside hes from Chicago. ",
  heritage: "While of partial Osenayan blood, he wasn't allowed to know about it and harbors resentment towards it -- so he only talks about his Germanic-Irish heritage.",
  firstLanguage: "Grunting.",
  lifeEvents:  "My kids, even if i can't see them anymore.",
  historicalevents: "History happens every day it's not up to me to classify what it is",
  regrets:  "The one mistake that seperated me from my kids." ,
  
  },
  skills: {   qualifications: "Used to take care of his sister, but has no real qualifications - other than HS diploma.",
  talents: "None that I know of.",
  languages: "English, even though he picked up a smidge of Osenayan from before being removed from learning anything about it.",
  
  },
  qualities: {   conditions: "None that he knows of - but he has an Anger streak.",
  strengths: "He says he's only got his `GUNS` (his arms) and nothin else - but that's just the dad jokes talking.",
  weaknesses: "Pictures of his kids.", 
  },
  desires: {   yearning: "As much as he'd love to see his kids again, his primary goal is the resistance..",
  goals: "Figuring out how Smithing works, so he can start saving gil on repairs.",
  wishes: "Seeing his kids again.",
  dreamJob: "He wanted to do a lot of shit when it was his other life, but it's not like you can be a video game developer in Eorzea.", },
  other: {   fears: "His mistakes", 
  secrets: " He swears his wife 'passed away' but in this universe version his wife divorced him.", 
  habits: "Punching Wooden Dummies.", 
  hobbies: "Poetry, aka `DIVORCED DAD ROCK LYRICS HE DIDNT WRITE BUT PEOPLE THINK ITS AMAZING IN EORZEA` (He once tried to explain Nickleback lyrics to Ul'dah adventurers)", },
  family: {   parents: ["His memories have faded so much his parents names are lost to him"],   
  siblings: ["His memories have faded that only parts of his family are remembered."], 
  children: "Adra (Adriana) Bryant , Maynard Bryant ",
  other: "Has attempted several times to parent Lyse while out and about during resistance duties, he's nearly gotten arrested for it."  },
  relationships: {   friends: ["None really."],  
  enemies: ["Lots."], 
  partner: "None. (His mistake, he'll keep lying she's dead)",      
  crush: "Toss up between Fordola and Y'shtola.", 
  exes: "His Wife lol.",  },
  tech: {   implants: "None", 
  geneticMods: " None that he's aware of.",  },             
  gallery: [
  { thumb: "/images/characters/andrew_bryant/Andy01-thumb.webp", full: "/images/characters/andrew_bryant/Andy01-full.webp", alt: "Andrej Steelhelm, white hair, blue eyes, stubble, beard, mustache, 40s, gunbreaker, bastion coat. ", caption: "Andrej's back is facing the viewer as he plots what insanity comes next.." },
  { thumb: "/images/characters/andrew_bryant/Andy02-thumb.webp", full: "/images/characters/andrew_bryant/Andy02-full.webp", alt: "Andrej Steelhelm, white hair, blue eyes, stubble, beard, mustache, 40s, gunbreaker, bastion coat.", caption: "Andrej showing off his DAD skills by pointing his gunblade at the air." },
  { thumb: "/images/characters/andrew_bryant/Andy03-thumb.webp", full: "/images/characters/andrew_bryant/Andy03-full.webp", alt: "Andrej Steelhelm, white hair, blue eyes, stubble, beard, mustache, 40s, gunbreaker, bastion coat.", caption: "Andrej doing sit ups, apparently we're becoming fitness influncers in Rhalgr's Reach now." },
  { thumb: "/images/characters/andrew_bryant/Andy04-thumb.webp", full: "/images/characters/andrew_bryant/Andy04-full.webp", alt: "Andrej Steelhelm, white hair, blue eyes, stubble, beard, mustache, 40s, gunbreaker, bastion coat.", caption: "Andrej expressing the lack of regret for his stupidity in past years, oh i'm sorry here is the homewrecker in full glory with his DadBlade!" },
  { thumb: "/images/characters/andrew_bryant/Andy05-thumb.webp", full: "/images/characters/andrew_bryant/Andy05-full.webp", alt: "Andrej Steelhelm, white hair, blue eyes, stubble, beard, mustache, 40s, gunbreaker, bastion coat.", caption: "Andrej exploring the limits of the locals." },
   { thumb: "/images/characters/andrew_bryant/Andy06-thumb.webp", full: "/images/characters/andrew_bryant/Andy06-full.webp", alt: "Andrej Steelhelm, white hair, blue eyes, stubble, beard, mustache, 40s, gunbreaker, bastion coat.", caption: "Andrej after Kitch finds he exists and destroys him." },
    { thumb: "/images/characters/andrew_bryant/Andy07-thumb.webp", full: "/images/characters/andrew_bryant/Andy07-full.webp", alt: "Andrej Steelhelm, white hair, blue eyes, stubble, beard, mustache, 40s, gunbreaker, bastion coat.", caption: "Andrej explaining to Lyse how not to become addicted to the devil's lettuce." },
	 { thumb: "/images/characters/andrew_bryant/Andy08-thumb.webp", full: "/images/characters/andrew_bryant/Andy08-full.webp", alt: "Andrej Steelhelm, white hair, blue eyes, stubble, beard, mustache, 40s, gunbreaker, bastion coat.", caption: "Andrej partaking in what seeems to be moldy bread.." },
  ], 
  noGos: ["Ask him about Mason. Ask him about his wife. Ask him about his kids in general. Ask him about his sister. Ask him why he's crying. Ask him what the meaning of his 'poetry' is."],           
  } ,
  
    {
  slug: "kitch_bunny",
  name: "Kitch",
  title: "Bad Bitch Bunny Kitch",
  blurb: "I will rip your fingers off and feed them back to you if you touch me again, bitch.",
  
  voicedBy:"Earthnicity",
  
  identity: {
  birthName: "Kristopher X'Voor",
  osenayanName: "K'chani X'Voor",
  chosenName: "Christina Vanderhoff",
  eorzeanName: "Kitch Bunny",
  race: "Viera",
  gender: "Female (Trans Femme)",
  orientation: "Not you, bitch.",
  religion: "Halone can suck it.",
  politics: "Fuck the Syndicate.",
  },
  currentSituation: {
  mainClass: " Paladin",
  sideClass: " Dark Knight" ,
  job: " Your mom's personal `assistant`",
  residence: "Off the coast of Ul'dah",
  economicClass: "Wouldn't you like to know?",
  },
  
  appearance: {
  age: "32",
  hair: "Black",
  eyes: "Gold",
  skin: "Chartreuse.",
  height:  "*Tall enough to climb like a tree." ,
  build: "Go ffffffffffffhuck yourself.",
  face: "TBA",
  bodyMod: "TBA",
  dominantHand:  "Why don't you take a look at my nails? Maybe that'll give you a good idea which.",
  outfit: "Your dad's jacket.",
	  
  },
  
  background: {   hometown:  "As far as you are concerned? Ul'dah.",
  heritage: "Osenayan",
  firstLanguage: "Common",
  lifeEvents:  "Not dying?",
  historicalevents: "Everything ever all of the time. I am the witnesser of eternity. BOW BEFORE ME." ,
  regrets:  "Not dying." ,
  
  },
  skills: {   qualifications: " Ask your dad.",
  talents: "Ask your mom .",
  languages: "Common, a bit of Garlean... Mostly the swears.",
  
  },
  qualities: {   conditions: "Don't know, don't care.",
  strengths: "Yes. my thighs.",
  weaknesses: "No.", 
  },
  desires: {   yearning: "Getting out of Ul'dah and seeing the world.",
  goals: "Peg at least 3 Garlean Legati.",
  wishes: "to Peg every Legatus (Except Valens. Fuck Valens). Just to say she has.",
  dreamJob: "Hasn't thought about it..", },
  other: {   fears: "Dying.", 
  secrets: "None really except that one cable show she was on about licking toes...", 
  habits: "Telling her brothers to stop licking her toes. They never have..", 
  hobbies: "Licking toes.", },
  family: {   parents: ["???,????"],   
  siblings: ["None."], 
  children: "None. ",
  other: "Continues to claim the rest of the X'voor siblings are not related to her."  },
  relationships: {   friends: ["No thanks"],  
  enemies: ["Everyone."], 
  partner: "Everyone.",      
  crush: "Everyone. Especially Garlean Legati, and then the Paissa Litterbox Owner.", 
  exes: "Everyone.",  },
  tech: {   implants: "Tits", 
  geneticMods: "Tits",  },             
  gallery: [
  { thumb: "/images/characters/kitch_bunny/Kitch01-thumb.webp", full: "/images/characters/kitch_bunny/Kitch01-full.webp", alt: "Kitch Bunny, black skinned, black hair, gold eyes, gold Galatea outfit with imp/bat wings.", caption: "Kitch visiting a poignant place, or just plotting her brother's downfall.." },
  { thumb: "/images/characters/kitch_bunny/Kitch02-thumb.webp", full: "/images/characters/kitch_bunny/Kitch02-full.webp", alt: "Kitch Bunny, black skinned, black hair, gold eyes, gold Galatea outfit with imp/bat wings.", caption: "Kitch asking somewhat politley where the next Garlean Legatus's home town is." },
  { thumb: "/images/characters/kitch_bunny/Kitch03-thumb.webp", full: "/images/characters/kitch_bunny/Kitch03-full.webp", alt: "Kitch Bunny, black skinned, black hair, gold eyes, gold Galatea outfit with imp/bat wings.", caption: "Kitch lamenting at how lame it is that no Garlean Legati are located here." },
  { thumb: "/images/characters/kitch_bunny/Kitch04-thumb.webp", full: "/images/characters/kitch_bunny/Kitch04-full.webp", alt: "Kitch Bunny, black skinned, black hair, gold eyes, gold Galatea outfit with imp/bat wings.", caption: "Kitch enraged that Kay decided to take the wrong turn and got them lost." },
  { thumb: "/images/characters/kitch_bunny/Kitch05-thumb.webp", full: "/images/characters/kitch_bunny/Kitch05-full.webp", alt: "Kitch Bunny, black skinned, black hair, gold eyes, gold Galatea outfit with imp/bat wings.", caption: "Kitch defending herself from the evils within (or just showing off what she's capable of)" },
   { thumb: "/images/characters/kitch_bunny/Kitch06-thumb.webp", full: "/images/characters/kitch_bunny/Kitch06-full.webp", alt: "Kitch Bunny, black skinned, black hair, gold eyes, gold Galatea outfit with imp/bat wings.", caption: "The face a mother did and does love, but a face you do not want to come across lest you become her chew toy." },
    { thumb: "/images/characters/kitch_bunny/Kitch07-thumb.webp", full: "/images/characters/kitch_bunny/Kitch07-full.webp", alt: "Kitch Bunny, black skinned, black hair, gold eyes, gold Galatea outfit with imp/bat wings.", caption: "Kitch showing off a pile of destruction." },
	 { thumb: "/images/characters/kitch_bunny/Kitch08-thumb.webp", full: "/images/characters/kitch_bunny/Kitch08-full.webp", alt: "Kitch Bunny, black skinned, black hair, gold eyes, gold Galatea outfit with imp/bat wings.", caption: "Kitch contemplating tying Angel to the bed." },
  ], 
  noGos: [" Nothing... I can read your minds."],           
  } ,
   {
  slug: "mace_turtle",
  name: "MayMay",
  title: "L i Z a R d w/ C o L o R s",
  blurb: "My pallette is your worst nightmare..",
  
  voicedBy:"TBA",
  
  identity: {
  birthName: "Maycein Adelaide Rose Solas",
  osenayanName: "None",
  chosenName: "Turtle / Mace / Maymay",
  eorzeanName: "Mimi Okeya",
  race: "Raen AuRa (aka LIZARD)",
  gender: "Female",
  orientation: "Left. maybe Right, MAYBE JUSTIFIED AND LEFT ALIGNED. (Autistically she's probably Aro-Ace looool).",
  religion: "Religion? -- Hmm, She tries to follow the Raen philosophy, but she got bored and tried to pick up the Eorzean way.. (ADHD style.)",
  politics: "Eat the rich, feed the poor, punch Godbert.",
  },
  currentSituation: {
  mainClass: "Pictomancer.",
  sideClass: "Picto" ,
  job: "`MALL RAT` / Freelance Adventurer",
  residence: "Shirogane apartment.",
  economicClass: "Uhhh i'm not penniless? ... oh wait no this week i am whoops!",
  },
  
  appearance: {
  age: "19-21ish",
  hair: "Green and Pink",
  eyes: "PINK with an UBER AMAZING LIMBAL RING",
  skin: "... If i was human i'd be white, but im' raen so i'm Lizard White.",
  height:  "150cm" ,
  build: "I refuse to stop eating pizza",
  face: "face 2",
  bodyMod: "YAB/RUE",
  dominantHand:  "POKER? ... THATS ... GAMBLING!.",
  outfit: "Looking like a styled young adult out of s9- because she spent all her gil (Somehow just like her Uncle Kay lolol) on ONE SINGULAR OUTFIT ONCE. (But most of the time it's whatever battle gear fits when she's out working)",
	  
  },
  
  background: {   hometown:  "Found near the Steppe, but got bored and hitched a ride to Kugane once as a kid and never left.",
  heritage: " Quarter osenayan... she'll tell you she's also super ghostly but that's just her being a nerd.",
  firstLanguage: "Turtle. (Aka english but Mace style lol)",
  lifeEvents:  "Somehow meeting Criss dad in the middle of Kugane, but not knowing it was him.",
  historicalevents: "Hien getting defeated at an arm wrestle with me one time in downtown Kugane."  ,
  regrets: "Regerts." ,
  
  },
  skills: {   qualifications: "Autism/ADHD + That long list of siblings.",
  talents: "Arm Wrestling, Storytelling..",
  languages: "Eorzean, a little bit of Raen tinged Eorzean.",
  
  },
  qualities: {   conditions: "Autism/ADHD + That long list of siblings.",
  strengths: "Thighs.",
  weaknesses: "Onigiri from the street vendor in Shirogane.", 
  },
  desires: {   yearning: " Figuring shit out? OH YEA -- TRACKING CRISS DAD DOWN BECAUSE neither of them realized who each other were!!",
  goals: " ...Eh i'll figure it out.",
  wishes: "ADHD LEVEL STARTS SINGING THE LITTLE MERMAID SONG ABOUT FORKS AND KNIVES AND THEN A BRUSH AND HTEN REALIZES ITS AN ACTUAL QUESTION.",
  dreamJob: " Wanted to actually be a warrior of light, but couldn't pay attention long enough to what that white haired weirdo meant when she said `HEAR FEEL THINK` because she just kept going `DEEZ NUTS` after it was done.", },
  other: {   fears: "Losing the key to her apartment, again.", 
  secrets: "Secretly a turtle in a Raen meatsuit. (It's her joke, because she has no secrets she'll tell you everything including what color underwear Hien wears)", 
  habits: "Licking the sauce off a piece of pizza.", 
  hobbies: "Painting, - Took up a little martial arts for fun because it helped with her ADHD for a bit.", },
  family: {   parents: ["Felix (Felicity) Lorcan, Criss Solas"],   
  siblings: ["Tiergan, Tayvin, Luan, Lorenzo, Lilac, Sonny, Kintsugi, Lucien, Luke, Keegan."], 
  children: "None, turtle needs to know how to get the tubes and the flaps sorted.. ",
  other: "Befriended Hien randomly -- not like besties but friend enough that when he's in town there's an arm wrestle, but that's cause Mace was young in Eorzea at the time unlike some others in the fam.."  },
  relationships: {   friends: ["Hien, The Onigiri Street Vendor, the Apartment manager"],  
  enemies: ["The Apartment Manager."], 
  partner: " None.",      
  crush: " None..", 
  exes: " None.",  },
  tech: {   implants: " None.", 
  geneticMods: "She'll tell you it's her brains. but otherwise None.",  },             
  gallery: [
  { thumb: "/images/characters/mace_turtle/Mace01-thumb.webp", full: "/images/characters/mace_turtle/Mace01-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon. ", caption: "Mace making every attempt to prove her psychotic worth to her Aunt Kitch by grinning like a lizard-dumbass." },
  { thumb: "/images/characters/mace_turtle/Mace02-thumb.webp", full: "/images/characters/mace_turtle/Mace02-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace going 'COME HITHER AND AND HEAR FEEL THINK DEEZ NUTS I PAINT'" },
  { thumb: "/images/characters/mace_turtle/Mace03-thumb.webp", full: "/images/characters/mace_turtle/Mace03-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace once again trying to lick everything off the pizza like a mad lizard." },
  { thumb: "/images/characters/mace_turtle/Mace04-thumb.webp", full: "/images/characters/mace_turtle/Mace04-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace standing in a dungeon going 'ENJOY THE CUTSCENES' and then promptly cackling and running off ." },
  { thumb: "/images/characters/mace_turtle/Mace05-thumb.webp", full: "/images/characters/mace_turtle/Mace05-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace using her pictomancer abiltiies on the fly, without warning, probably against absolutley nothing.." },
   { thumb: "/images/characters/mace_turtle/Mace06-thumb.webp", full: "/images/characters/mace_turtle/Mace06-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace screeching and we quote 'FULL MOOG AHEAD ZYOOM!'" },
    { thumb: "/images/characters/mace_turtle/Mace07-thumb.webp", full: "/images/characters/mace_turtle/Mace07-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace sharing the butterflies." },
	 { thumb: "/images/characters/mace_turtle/Mace08-thumb.webp", full: "/images/characters/mace_turtle/Mace08-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace attempting to paint a celebration note for completing a task in a dungeon, right before the mobs come running." },
   { thumb: "/images/characters/mace_turtle/Mace09-thumb.webp", full: "/images/characters/mace_turtle/Mace09-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace's semi professional portrait taken by Lilac one day.." },
  ], 
  noGos: [" Nothing, she's pretty much a doormat when it comes to this stuff.."],           
  } ,
   {
  slug: "denzel_solas",
  name: "D'eni Tia",
  title: "A warrior that is the embodiment of Denny's Bathroom at 3 AM",
  blurb: "Would you like fries with your inner release?",
  
  voicedBy:"TBA",
  
  identity: {
  birthName: "Denzel Lorenz Solas",
  osenayanName: "Unknown",
  chosenName: "Denny's Bathroom at 3 am.",
  eorzeanName: "D'eni Tia",
  race: "Miqo'te",
  gender: "male",
  orientation: "I'm gay, and I dont know where my boyfriend went.",
  religion: ".... Church of the whatever he's on. *points to Tayvin*",
  politics: "*snorts pizza grease*",
  },
  currentSituation: {
  mainClass: "Warrior",
  sideClass: "Gunbreaker" ,
  job: "Criminally Unemployed.",
  residence: "Mist apartments, about five doors down from Sonny",
  economicClass: "*laughs in owes the Vylbrand economy his DNA for not paying his rent*",
  },
  
  appearance: {
  age: "20s",
  hair: "Greens",
  eyes: "*pulls eyelid down* I forgot.",
  skin: "I look like a very weak coffee.",
  height:  "God even male VIERA ARE TALLER THAN ME AND IM TEH SAME HEIGHT AS DAD WTF (including height mods LOL)" ,
  build: "BeefCat",
  face: "face 4",
  bodyMod: "TBSE",
  dominantHand:  "BOTH but i only write with one finger..",
  outfit: "The one that shows people i'm gayer than they realize LOL",
	  
  },
  
  background: {   hometown: "What does it matter?" ,
  heritage: " Quarter Osenayan.",
  firstLanguage: "Eyebrow Wiggling.",
  lifeEvents:  "That one time at bandcamp...",
  historicalevents: "That one time at bandcamp...",
  regrets: "Repeat the Important Life Events."  ,
  
  },
  skills: {   qualifications: "Axe for Hire.",
  talents: "Not many.",
  languages: "English, swearing, Eyebrow Wiggling.",
  
  },
  qualities: {   conditions: "Allergic to Lallafells (not really)",
  strengths: "Allergic to Lallafells (not really)",
  weaknesses: "*points to the other siblings*", 
  },
  desires: {   yearning: " Punch Tiergan in the face for starting one more fight.",
  goals: "To get up in the morning on time to actually get paid.",
  wishes: "To finally get out of his lazy mode and get a job ..... he tried to pick up culinary arts in limsa but he burnt toast.",
  dreamJob: " Whatever the WoL actually does.", },
  other: {   fears: "Losing Criss dad,  Losing THE REST of the mirrors of his dad as well - cause he's seen through the flips and flows..", 
  secrets: "Secretly a turtle in a Raen meatsuit. (It's her joke, because she has no secrets she'll tell you everything including what color underwear Hien wears)", 
  habits: "Sleeping in.", 
  hobbies: "Reading cookbooks, and failing at replicating recipies.", },
  family: {   parents: ["Felix (Felicity) Lorcan, Criss Solas"],   
  siblings: ["`DO I HAVE TO LIST THEM SERIOUSLY?`(This is in tandem with Tayvin and Luan, Sonny and Kintsu)"], 
  children: "*CACKLING LIKE A DUMBASS* *points to his brother SOnny* That's a child. XD  ",
  other: "Is the living embodiment of your typical Denny's Restrauant at 3 AM."  },
  relationships: {   friends: ["The fishes in the sea, because i'm never up before noon." ],  
  enemies: ["Himself."], 
  partner: "Derek. He's not here but i wish he was",      
  crush: "Shhh... I saw Erenville and almost wanted to cheat on Derek with him.", 
  exes: "IF I DONT KEEP MYSELF IN CHECK DEREK GONNA BE MY EX XD",  },
  tech: {   implants: " None.", 
  geneticMods: "None but he's gonna tell you it's the way he cooks.",  },             
  // gallery: [
  //{ thumb: "/images/characters/mace_turtle/Mace01-thumb.webp", full: "/images/characters/mace_turtle/Mace01-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon. ", caption: "Mace making every attempt to prove her psychotic worth to her Aunt Kitch by grinning like a lizard-dumbass." },
 // { thumb: "/images/characters/mace_turtle/Mace02-thumb.webp", full: "/images/characters/mace_turtle/Mace02-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace going 'COME HITHER AND AND HEAR FEEL THINK DEEZ NUTS I PAINT'" },
//  { thumb: "/images/characters/mace_turtle/Mace03-thumb.webp", full: "/images/characters/mace_turtle/Mace03-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace once again trying to lick everything off the pizza like a mad lizard." },
 // { thumb: "/images/characters/mace_turtle/Mace04-thumb.webp", full: "/images/characters/mace_turtle/Mace04-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace standing in a dungeon going 'ENJOY THE CUTSCENES' and then promptly cackling and running off ." },
  //{ thumb: "/images/characters/mace_turtle/Mace05-thumb.webp", full: "/images/characters/mace_turtle/Mace05-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace using her pictomancer abiltiies on the fly, without warning, probably against absolutley nothing.." },
  // { thumb: "/images/characters/mace_turtle/Mace06-thumb.webp", full: "/images/characters/mace_turtle/Mace06-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace screeching and we quote 'FULL MOOG AHEAD ZYOOM!'" },
    //{ thumb: "/images/characters/mace_turtle/Mace07-thumb.webp", full: "/images/characters/mace_turtle/Mace07-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace sharing the butterflies." },
	// { thumb: "/images/characters/mace_turtle/Mace08-thumb.webp", full: "/images/characters/mace_turtle/Mace08-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace attempting to paint a celebration note for completing a task in a dungeon, right before the mobs come running." },
   // { thumb: "/images/characters/mace_turtle/Mace09-thumb.webp", full: "/images/characters/mace_turtle/Mace09-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace's semi professional portrait taken by Lilac one day.." },
  //], 
  noGos: [" Call him denny, but not `DENNYS BATHROOM AT 3 AM`, Ask him if he supports Applebee's Rights, Ask him if he knows who MayMay is and if you 've seen her paintings (He has, and he's jealous but also that's Mace... most of her paintings are of turtles lol), Let him cook you anything, because you'll suffer more than he will "],           
  } ,
   {
  slug: "tayvin_solas",
  name: "T'avin Tia",
  title: "The Sleeping Bag Monster that parades around as a Red Mage.",
  blurb: "Chaos, Panic and What's My Age Again?",
  
  voicedBy:"TBA",
  
  identity: {
  birthName: "Tayvin Rana Marie Solas",
  osenayanName: "DAD WHATS MY NAME AGAIN",
  chosenName: "Tayvin",
  eorzeanName: "T'avin Tia",
  race: "Miqo'te",
  gender: "Intersex/Trans Male",
  orientation: "I go both ways, but my wife isn't here yet.",
  religion: "Emet Selch Was Right",
  politics: "Emet Selch Was Right",
  },
  currentSituation: {
  mainClass: "Red Mage",
  sideClass: "NONE" ,
  job: "Cook and Tech support at the Paissa Litter Box.",
  residence: "WHEREVER MY SLEEPING BAG ROAMS",
  economicClass: "MONEY MONEY MONEY .... I GOT NONE!",
  },
  
  appearance: {
  age: "20s",
  hair: "Blonde/Green",
  eyes:  "Would'nt you like to know" ,
  skin: "Mmmm Melanoma",
  height:  "I'm about THIS TALL and CANNOT RIDE Ancient Artifacts.",
  build: "Consume.",
  face: "face 4",
  bodyMod: "TBSE (SBTL)",
  dominantHand:  "I assume you mean the written word, so right handed.",
  outfit: "I really should dress more masc but fuck it, I like crop tops.",
	  
  },
  
  background: {   hometown: "IM JUST A SMALLTOWN BOI -- LIVIN IN A LONLEY WOOORLD *proceeds to get smacked by MayMay*"  ,
  heritage: " Quarter Osenayan.",
  firstLanguage: "Video Games and Pop Culture References. ",
  lifeEvents:  "Picking up a stray turtle and teaching it to paint (According to Tayvin)",
  historicalevents: "The shortest Viera this side of the sundering..",
  regrets: "Trying to hug the Angry One, because he doesn't know he's our brother"  ,
  
  },
  skills: {   qualifications: "None really..",
  talents: "Beer Pong.... (According to Tayvin) (But in reality he's quite a fast runner, and he's very family oriented)",
  languages: " Video Game Quotes and Pop Culture Refs.",
  
  },
  qualities: {   conditions: "I AM CRACKED AS FUCK WANNA MEET MY SUBSYSTEM? (Aka he's like his daddy lol)",
  strengths: "According to Lilac I have none! - but in reality? He's really friendly and good with people.",
  weaknesses: "Trying not to laugh at Luan.", 
  },
  desires: {   yearning: " Finding the rest of the family..",
  goals: "Keeping Tag out of trouble when he fronts",
  wishes: "SAMMIE WOULD STOP THREATENING TO SUNDER CUSTOMERS.",
  dreamJob: " going home, wherever home actually should be.. because that's a job and a half.", },
  other: {   fears: " Finding T'vara in Eorzea.. she can get evil. ", 
  secrets: "(He really does want to find his wife, he's just being stupid)", 
  habits: " Drawing on the Litter Box napkins.", 
  hobbies: "Playing video games on the litter box devices.", },
  family: {   parents: ["Felix (Felicity) Lorcan, Criss Solas (Tho Criss doesn't really remember his kids easily, he has clarity sometimes XD especially when he catches Tayvin sleeping behind the bar in a sleeping bag)"],   
  siblings: ["`DO I HAVE TO LIST THEM SERIOUSLY?`"], 
  children: "I have four idiot spawns. three from my ass and one from T'va. it's complicated... OH YOU WANT NAMES? Ender, Rhodes, Dean and Cyan." ,
  other: "Is the living embodiment of your typical Denny's Restrauant at 3 AM."  },
  relationships: {   friends: [ "What's a friend? :D"  ],  
  enemies: [" Lorenzo, because he beat him at that one game that's on the computer at the venue.."], 
  partner: "T'vara Lowell-Ellis",      
  crush: "MMMM HILDA OR HIEN PICK YOUR POISON.", 
  exes: "I left my last sleeping bag in solution nine, and it's texting me every day in regret ",  },
  tech: {   implants: " None.", 
  geneticMods: "None ",  },             
  // gallery: [
  //{ thumb: "/images/characters/mace_turtle/Mace01-thumb.webp", full: "/images/characters/mace_turtle/Mace01-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon. ", caption: "Mace making every attempt to prove her psychotic worth to her Aunt Kitch by grinning like a lizard-dumbass." },
 // { thumb: "/images/characters/mace_turtle/Mace02-thumb.webp", full: "/images/characters/mace_turtle/Mace02-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace going 'COME HITHER AND AND HEAR FEEL THINK DEEZ NUTS I PAINT'" },
//  { thumb: "/images/characters/mace_turtle/Mace03-thumb.webp", full: "/images/characters/mace_turtle/Mace03-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace once again trying to lick everything off the pizza like a mad lizard." },
 // { thumb: "/images/characters/mace_turtle/Mace04-thumb.webp", full: "/images/characters/mace_turtle/Mace04-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace standing in a dungeon going 'ENJOY THE CUTSCENES' and then promptly cackling and running off ." },
  //{ thumb: "/images/characters/mace_turtle/Mace05-thumb.webp", full: "/images/characters/mace_turtle/Mace05-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace using her pictomancer abiltiies on the fly, without warning, probably against absolutley nothing.." },
  // { thumb: "/images/characters/mace_turtle/Mace06-thumb.webp", full: "/images/characters/mace_turtle/Mace06-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace screeching and we quote 'FULL MOOG AHEAD ZYOOM!'" },
    //{ thumb: "/images/characters/mace_turtle/Mace07-thumb.webp", full: "/images/characters/mace_turtle/Mace07-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace sharing the butterflies." },
	// { thumb: "/images/characters/mace_turtle/Mace08-thumb.webp", full: "/images/characters/mace_turtle/Mace08-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace attempting to paint a celebration note for completing a task in a dungeon, right before the mobs come running." },
   // { thumb: "/images/characters/mace_turtle/Mace09-thumb.webp", full: "/images/characters/mace_turtle/Mace09-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace's semi professional portrait taken by Lilac one day.." },
  //], 
  noGos: [" Call him a pretty princess, Let Sammie Front, Let Sammie Sunder the Customers, Tell Tag that T'vara's wearing a Sexy Bikini"],           
  } ,
  {
  slug: "jupiter_lorcan",
  name: "J'upye Tia",
  title: "Slicer and Dicer",
  blurb: "The only osenayan to learn who and what he was and still forget everything.",
  
  voicedBy:"TBA",
  
  identity: {
  birthName: "Thomas Jupiter (Felix sometimes says it's Juniper XD) Lorcan-Johnson",
  osenayanName: "Fucked if he knows",
  chosenName: "Jupiter Lorcan",
  eorzeanName: "J'upye Tia",
  race: "Miqo'te",
  gender: "Male",
  orientation: "I can bend a few different ways.",
  religion: "One time in high school i drank two big bottles of mountain dew for five bucks... I claimed I was a god.",
  politics: "Politics are a load of horse shit, just take care of your people and stop arguing.",
  },
  currentSituation: {
  mainClass: "Viper",
  sideClass: "Viper but more Viper." ,
  job: "Security at Paissa Litter Box.",
  residence: "in the litter box outside on the lawn at the venue, because he's lazy and wont' go back to his Apt in Emperyum.",
  economicClass:  "I got dolla bills... yea they're dollars ... not more than like ten... cause I can't really buy a beer in this place.",
  },
  
  appearance: {
  age: "20s",
  hair: "Purple",
  eyes:  "Purple?" ,
  skin: " I look like a bad cinnamon donut.",
  height:  " Fsk, I stopped growing after that double hit of dew.",
  build: "Oh I had to lose a bunch in college because I was at risk for more than Type 2... you might as well call me DIABEETUS CAT by now 8D",
  face: "Face 4 (Asym + Teefs)",
  bodyMod: "TBSE TWUNK LIKELY",
  dominantHand:  "None, he's really bad at punching bad customers -- because he'd rather slap them with his twinfangs. ",
  outfit: "I really want that leather jacket i see some of the top Viper dudes wearing but y'know i awsn't smart enough to beat Sphene up.",
	  
  },
  
  background: {   hometown: "Doesn't even remember where he ACTUALLY grew up as a child - but ended up in fucking Eau Claire Wisconsin as a teenager, and then just booked it out of there. Eorzean hometown? Spent quite a bit of time in Tural, but doesn't have a clue - its too foggy."  ,
  heritage: " (Likely at least half Osenayan) Doesn't know squat about osea, just likes to proclaim loudly that's his heritage... ",
  firstLanguage: "Brand names of snacks and drinks.",
  lifeEvents:   "Meeting Criss, and then realizing he's a partial mirror of my dad and then me panicking when i accidentally called him dad... AND THEN REALIZING MOM HAS TO BE HERE",
  historicalevents: "Mountain Dew Donuts, I saw them on Carter Anderson Once." ,
  regrets: "Teaching the solas siblings that Felix is to be called MaleMomWife, and then realizing fast that was a really bad idea and it was NOT NICE."  ,
  
  },
  skills: {   qualifications: "Off Key Karaoke.",
  talents:  "Beating Criss at Cat Sits." ,
  languages: " WYHARRGAARRRBL (aka English - which is marred by an accent that changes with the damn wind for some reason).",
  
  },
  qualities: {   conditions: "Likely Autistic & ADHD -- medicates with energy drinks... Kinda like his half-sister MayMay.",
  strengths: "Being alive still after so many dumb mistakes.",
  weaknesses: "Hot cat ladies that come to the venue (HE MEANS HOT LADIES IN GENERAL because it dont matter if they're FemRoe or just FemMiqo.. they're all the ladies)", 
  },
  desires: {   yearning: " Figuring out where his brothers are hiding (Though he has a feeling Frank ain't there and he'll argue that he's wrong and that Frank SHOULD be there)",
  goals: " Learning to be a bartender",
  wishes: "To import a bag of Taki's and a bottle of Dew and get s9 to replicate it.",
  dreamJob: " Bartender in S9 -- but will settle for the LITTERBOX!", },
  other: {   fears: " Death, destruction and the loss of any life.", 
  secrets: " Can recite the whole of `Henry the 8th` and `I'm a lumberjack` .. wait that's not really a secret.", 
  habits: "  Calling Criss `DAD`.", 
  hobbies: "Off Key Karaoke, dancing like an unhinged uncoorindated miqo'te.", },
  family: {   parents: ["Felix (Felicity) Lorcan, Christopher Marlin Johnson"],   
  siblings: ["Francis Ryan Lorcan, Aspen Quinn Johnson"], 
  children: "I dropped them off at the pool this morning (He's talking about taking a shit, in the toilet.. he's childless.)" ,
  other: "Unhinged Elder Millenial Eldritch Cat Monster with no relationships because he's insane."  },
  relationships: {   friends: [ "He likes to THINK he's friends with the owner of the venue, but sadly the guy doesn't really know him."  ],  
  enemies: [" Aspen. (WHAT HES MY BABY BROTHER)"], 
  partner: "my left hand.",      
  crush: " Everyone that's got a good body, and has a wonderful face... (He'll even tell you that he's crushed on dudes before but that's probably him trying to hide that he's likely more straight than gay XD)", 
  exes: "My right hand.",  },
  tech: {   implants: " None.", 
  geneticMods: "None ",  },             
  // gallery: [
  //{ thumb: "/images/characters/mace_turtle/Mace01-thumb.webp", full: "/images/characters/mace_turtle/Mace01-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon. ", caption: "Mace making every attempt to prove her psychotic worth to her Aunt Kitch by grinning like a lizard-dumbass." },
 // { thumb: "/images/characters/mace_turtle/Mace02-thumb.webp", full: "/images/characters/mace_turtle/Mace02-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace going 'COME HITHER AND AND HEAR FEEL THINK DEEZ NUTS I PAINT'" },
//  { thumb: "/images/characters/mace_turtle/Mace03-thumb.webp", full: "/images/characters/mace_turtle/Mace03-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace once again trying to lick everything off the pizza like a mad lizard." },
 // { thumb: "/images/characters/mace_turtle/Mace04-thumb.webp", full: "/images/characters/mace_turtle/Mace04-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace standing in a dungeon going 'ENJOY THE CUTSCENES' and then promptly cackling and running off ." },
  //{ thumb: "/images/characters/mace_turtle/Mace05-thumb.webp", full: "/images/characters/mace_turtle/Mace05-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace using her pictomancer abiltiies on the fly, without warning, probably against absolutley nothing.." },
  // { thumb: "/images/characters/mace_turtle/Mace06-thumb.webp", full: "/images/characters/mace_turtle/Mace06-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace screeching and we quote 'FULL MOOG AHEAD ZYOOM!'" },
    //{ thumb: "/images/characters/mace_turtle/Mace07-thumb.webp", full: "/images/characters/mace_turtle/Mace07-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace sharing the butterflies." },
	// { thumb: "/images/characters/mace_turtle/Mace08-thumb.webp", full: "/images/characters/mace_turtle/Mace08-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace attempting to paint a celebration note for completing a task in a dungeon, right before the mobs come running." },
   // { thumb: "/images/characters/mace_turtle/Mace09-thumb.webp", full: "/images/characters/mace_turtle/Mace09-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace's semi professional portrait taken by Lilac one day.." },
  //], 
  noGos: [" Call him Tommy, Call him Tommy Juniper, Ask him where his Mommy is, Call him flower boy"],           
  } ,
  {
  slug: "lilac_solas",
  name: "Ophelle Lailonaux",
  title: "Thunderous Flower",
  blurb: "The 'other most' powerful blackmage (apart from Disney's Donald Duck).",
  
  voicedBy:"TBA",
  
  identity: {
  birthName: "`Why would you ask me that, I told you it's Lilac!!!`",
  osenayanName: "Unsure.",
  chosenName: "Lilac Solas",
  eorzeanName: "Ophelle Lailonaux",
  race: "Elezen",
  gender: "Female. (Anything else would be a crime against humanity she said)",
  orientation: "Chasing pirates... that are female. (Lesbian) ",
  religion: "A smidge on the dark side, but y'know ladies never tell. ",
  politics: "...... As long as there's a good side of whiskey and rye and a few more pirates -- and there's less politics she's good.",
  },
  currentSituation: {
  mainClass: "Black Mage. Someone's gotta suffer.",
  sideClass: "None." ,
  job: "Nobody realises this ... because she looks like a pretty mage princess -- but she's a pirate wench-mage according to her.",
  residence: "Wherever the ships take her, because being on dry land is boring. (Which is funny because in truth, she actually has an apartment in Solution nine)",
  economicClass:   "I don't do economics -- I mean how much DOES that studio apartment in S9 cost?",
  },
  
  appearance: {
  age: "20s",
  hair: "Purples and Pinks fused together in a wild combination at the crack of dusk.",
  eyes:  "Lilac purple." ,
  skin: " Smooth, glorious, now bow to me. NO NOT MY AUNT ME. BOW TO ME.",
  height:  " ...... LADIES NEVER TELL (This is where Lilac is giving you a confused face only because it's just after maint, and we forgot to check glamourer before the servers went down XD)",
  build: "I still fit in this dress",
  face: "Face 1 or two Highlander Hyur but she's actually got the Punk Elf ears on -- (Aka: Disturbingly Princess Wench Punk)",
  bodyMod: " YAB. ",
  dominantHand:   "Bet you can't guess." ,
  outfit: "She's glammed with the Neo Queen (Spheeeeeene) outfit on, but she's happy in a neotunic and twill pants. ",
	  
  },
  
  background: {   hometown: " First found just outside of Shaaloani, assumed to have skipped the dome by an inch... somehow.."  ,
  heritage: " Quarter osenayan, but acts like she's a full blood.",
  firstLanguage: "Tries to talk like she's from Limsa, but in reality still sounds vaguely -- `Non Rhotic`",
  lifeEvents:  "Being thrown out of Limsa for flirting with Merlwyb",
  historicalevents: "Merlwyb." ,
  regrets: "Not clicking with the situation sooner, not realizing this wasn't the true reality of sorts -- not noticing Felix and Criss and my siblings sooner.",
  
  },
  skills: {   qualifications: "Black mage, and Drinking Merlwyb under the table twice..",
  talents:  "Fire, Ice and Thunder" ,
  languages: " If I can understand Wuk's native lingo, you can be sure i could probably understand most of Eorzea",
  
  },
  qualities: {   conditions: "..Do siblings from the native universe count? DOES BEING ASSIGNED MALE AT BIRTH COUNT? ",
  strengths: "Charisma.  ",
  weaknesses: "Pirate Women.", 
  },
  desires: {   yearning: " To be with her family, since she realizes that the pirates aren't really much of one - and her birth family is waiting.",
  goals: "To see if they'll let her travel to the first, so she can flirt with hot Pirate bunnies.",
  wishes: "To bitch slap D'enzel T'ayvin, Kinstugi and May-May for being obtuse... because seemingly just because they're there DOESNT MEAN THEY DONT GIVE HER A HEADACHE .",
  dreamJob: " To settle down, maybe learn crafting - be of some actual g-d use for once. ", },
  other: {   fears: " Death, destruction.  Not just losing her family, but everyone dying from something that could be her fault.", 
  secrets: "Assigned male at birth. At one stage was fused to D'enzel..", 
  habits: "  Getting kicked out of bars..", 
  hobbies: "Sewing, but nothing high bar like weavers sadly.", },
  family: {   parents: ["Felix (Felicity) Lorcan, Criss Solas"],   
  siblings: ["`I refuse to list them, they don't exist, *smacks MayMay with her black mage staff*`"], 
  children:  "...i would hope not." ,
  other: "Despite not liking `CHILDREN` she picked up a bastard teen half elezen/half miqo named Seth and is trying to be some format of a `MENTOR`but he calls her Momma XD"  },
  relationships: {   friends: [ "Not a lot, when she's at home she's trying to help mentor/take care of Seth."  ],  
  enemies: [" Everyone in Limsa."], 
  partner: "If she was here i'd tell you..",      
  crush: "  Merlwyb.", 
  exes: "None.. (In theory because Sonny, Kintsugi and Lilac and Den were all fused once it's Kintsugi's girlfriend that's her ex lol)",  },
  tech: {   implants: " None.", 
  geneticMods: "None ",  },             
  // gallery: [
  //{ thumb: "/images/characters/mace_turtle/Mace01-thumb.webp", full: "/images/characters/mace_turtle/Mace01-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon. ", caption: "Mace making every attempt to prove her psychotic worth to her Aunt Kitch by grinning like a lizard-dumbass." },
 // { thumb: "/images/characters/mace_turtle/Mace02-thumb.webp", full: "/images/characters/mace_turtle/Mace02-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace going 'COME HITHER AND AND HEAR FEEL THINK DEEZ NUTS I PAINT'" },
//  { thumb: "/images/characters/mace_turtle/Mace03-thumb.webp", full: "/images/characters/mace_turtle/Mace03-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace once again trying to lick everything off the pizza like a mad lizard." },
 // { thumb: "/images/characters/mace_turtle/Mace04-thumb.webp", full: "/images/characters/mace_turtle/Mace04-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace standing in a dungeon going 'ENJOY THE CUTSCENES' and then promptly cackling and running off ." },
  //{ thumb: "/images/characters/mace_turtle/Mace05-thumb.webp", full: "/images/characters/mace_turtle/Mace05-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace using her pictomancer abiltiies on the fly, without warning, probably against absolutley nothing.." },
  // { thumb: "/images/characters/mace_turtle/Mace06-thumb.webp", full: "/images/characters/mace_turtle/Mace06-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace screeching and we quote 'FULL MOOG AHEAD ZYOOM!'" },
    //{ thumb: "/images/characters/mace_turtle/Mace07-thumb.webp", full: "/images/characters/mace_turtle/Mace07-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace sharing the butterflies." },
	// { thumb: "/images/characters/mace_turtle/Mace08-thumb.webp", full: "/images/characters/mace_turtle/Mace08-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace attempting to paint a celebration note for completing a task in a dungeon, right before the mobs come running." },
   // { thumb: "/images/characters/mace_turtle/Mace09-thumb.webp", full: "/images/characters/mace_turtle/Mace09-full.webp", alt: "Mimi Okeya (Mace/Turtle) - Raen Aura - bright skin, pink limbal ring eyes, bright lips, green and pink hair, belted purple dress with a neon green jacket. Figmental Pictomancer weapon.", caption: "Mace's semi professional portrait taken by Lilac one day.." },
  //], 
  noGos: ["Calling her by saying `I went to a Denny's restaurant at 3am and i needed the bathroom`, Assuming she likes ONLY dresses.., Calling her Denzel, Asking her if she's Sonny, Asking her if she's Kinstugi. "],           
  } ,
];