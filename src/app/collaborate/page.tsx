import { RainbowButton } from "@/components/ui/rainbow-button";

export default function CollaboratePage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1> Collaboration Details</h1>
      </header>

      <div className="rounded-3xl border border-border/60 bg-background/70 bg-gradient-to-b from-white/[0.06] to-transparent p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12">
        <div className="text-muted-foreground space-y-6">
<h2>  How to Get Involved    </h2>         

		 <p>
          Calling all aspiring community voice actors! We are doing this big huge project, and have barely any decent connections to anyone LOL.  If you love dorking around, have either a phone, or a microphone handy and just love trying to become someone else on a friday night like its a very weird LARP, then this project is for you.
				       </p>
		  <p>
		   We have on each character page given you a button in which to use our Google form to audition with. The files stay in Duskfallcrew's personal private google drive, and are covered by the privacy and terms that are written on this site as well as some basic ones on the form.  We have added the button below in case you have been distracted and just wanna click the darn thing already! If you are NOT sold on signing into google to authorize file uploads for your audition, feel free to use discord or other means of handing your audition over. We have a discord you can join, which is in the site footer. Otherwise watch out for posts in the Just Azem Server, Sakura Tree, or on Bsky and Tiktok as well as YT shorts. 
        </p>
		<RainbowButton
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
        🎙️ Audition Any Roles!
      </RainbowButton>
			<h2>  Connect to Volunteer   </h2>
          <p>
           How can one volunteer otherwise?  Well, if you want to join up to help volunteer to edit, help film or generally help in any way that you can otherwise - you're welcome to!  </p> 

			  <p>
		   A small list of things you could help with is as follows:
          </p> 
		  
		 <ul className="list-disc pl-5 space-y-1">
  <li>Script Editing</li>
  <li>Lore Review/Editing</li>
    <li>Advanced Filming</li>
	  <li>Audio processing/mastering</li>
	    <li>Keeping dusk out of trouble (AKA Project Manager lol)</li>
</ul>
	  	  <p>
		   SADLY none of these are paid as this is a community project, but because of it being a community project, the idea is to share and promote each other and help each other out where possible. Any of these volunteer things that strike your fancy? Let me know (we dont have a form for this section yet) via discord or otherwise and how I can help you in return!  Sometimes I am able to gift small FFXIV related goods, such as emotes or otherwise - I am also an omnicrafter in the game so I am happy to actually do CRAFTING for you or help you level a crafter etc in the game in return for any of this as well. Nothing is meant to replace employment, this is just adhoc when you can it's just that it has grown into a lot more work than I have seemingly been able to chew.  More information on these roles will come after I am able to at least get a couple more videos finished soon.
          </p> 
        </div>
      </div>
    </main>
  );
}
