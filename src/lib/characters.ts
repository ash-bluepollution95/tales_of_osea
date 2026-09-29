export type Character = {
  // --- shared by BOTH pages (list + detail) ---
  slug: string;      // URL id, e.g. "gibb-slap"
  name: string;      // display name
  title: string;     // epithet you invent
  blurb: string;     // one-line hook for the list

  // --- detail-page only ---
  voicedBy?: string;   // "?" = optional, so uncast characters don't break anything
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
  osenayanName: string;
  eorzeanName: string;
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
  build: "Uses TBSE Twunk",
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
  
  identity: {
  birthName: "Victoria 'Tori' (She doesn't in this story entirely remember her surname).",
  osenayanName: "Doesn't remember.",
  eorzeanName: "T'Rii",
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
  //gallery: [
 //{ thumb: "/images/characters/criss_solas/01-thumb.webp", full: "/images/characters/criss_solas/01-full.webp", alt: "Criss Solas, blue and pink hair, braided messy long hair with fringe (bangs), teal and violet open jacket, black slacks, kneeling, purple floor.", caption: "Criss in an assumed end of the world scenario (Shadowbringers Dungeon)" },
 // { thumb: "/images/characters/criss_solas/02-thumb.webp", full: "/images/characters/criss_solas/02-full.webp", alt: "Criss Solas and Angel Of'The'Night, Angel is a white/light blonde haired Elezen with assumed blue-violet eyes. Criss's appearance is, blue and pink hair, braided messy long hair with fringe (bangs), Criss is wearing the Story Teller's crop top dyed with black and teal, and Angel is wearing the Night of Devilry outfit in standard purple hues.", caption: "Angel flirting with Criss inside the Bloomers Bar and Grill." },
 // { thumb: "/images/characters/criss_solas/03-thumb.webp", full: "/images/characters/criss_solas/03-full.webp", alt: "Criss Solas, blue and pink hair, braided messy long hair with fringe (bangs), miqo'te, red eyes, teal and violet open jacket.", caption: "Criss inside the Paissa Litterbox Venue, likely a staff portrait." },
 // { thumb: "/images/characters/criss_solas/04-thumb.webp", full: "/images/characters/criss_solas/04-full.webp", alt: "Criss Solas, blue and pink hair, mid length hair, miqo'te, red eyes, teal and violet open jacket,", caption: "Criss spotted with shorter hair, most assume this is a form of 'turn' which in non-eorzean terms sort of just means form shift or switch." },
 //], 
  noGos: ["Calling her Victoria. Calling her Kitch. *(Sometimes the pirates mix her up with Kitch even tho Kitch is a Viera-- it's... just drunk dumb boys according to Tori)  "],           
  }
  
];