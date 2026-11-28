export default function AuditionPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>Audition & Volunteering</h1>
      </header>
			  <h2> Voice Acting </h2>
      <div className="rounded-3xl border border-border/60 bg-background/70 bg-gradient-to-b from-white/[0.06] to-transparent p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12">
        <div className="text-muted-foreground space-y-6">
		<h3> Lend your Voice! </h3> 
          <p>
           Welcome in nerds!  This is the easiest way for you to send in a basic audition, and this is NOT where you send in your final lines.  You've got a character from the pages in mind, and you're here to poise your voice as the sound behind a face!
          </p>
			 <h3> Some basic rules: </h3> 
          <p>
            1. NO AI VOICE CHANGERS - I validate you nerds who like tech, but GENERATIVE AI in terms of audio/video/image etc are not allowed in this project.  
			
          </p>
		  <p> 2. You do NOT HAVE TO BE A PROFESSIONAL VOICE ACTOR - this is a Volunteer project! </p>
		  <p> 3. Your VOICE WILL NOT BE THROWN INTO ANY TRAINING -- If anyone is caught stealing voice files for training, legal process is likely going to happen.  </p>
		  <p> 4. If your voice doesn't MATCH the gender this is VALID and we will take your audition into consideration regardless.  Aka "MALE PRESENTING" counts for even the hetero-assigned male at birth characters.  </p>
		  
		  <p> 5. M4A files are totally fine, but if you have a way of converting to Mp3 that's cool too.  Audacity is the best way to use for PC based editing, we reccomend the PORTABLE edition here: https://portableapps.com/apps/music_video/audacity_portable </p>
		  
		  <p>6. YOU DO NOT HAVE TO HAVE A PC for this, plenty of people use their phones </p>
		  
		  <p>7. Audio editing in terms of compression, or equalizing is fine, but please let me know ahead of time if you've pre-edited your stuff. This is NOT REQUIRED by the way and if you have no access to this, we have access and usually do the editing for the final episode. Audio editing is NOT The same as AI generative media - we will consider editing files for pitch reasons with permission of each voice actor if the need presents. Beyond that, basic vocal clarity and mastering happens regularly anyways. </p>
			<h3>Audition Form (Plain Text)</h3> 
		   <p>
           1. What is your name that you go by?
          </p>
			  <p>
            2. What Character are you auditioning for?
          </p>
		  	  <p>
            3. Are you on Discord or Social media to be able to contact you in event that you are chosen?
          </p>
		  <p> 4. What part of FFXIV are you through  (This matters a little in case of spoilers, but we'll work around it) </p>
		    <p> 5. What is your character name in game, and what server are you on? (If you'd like to be credited as your character or just want to connect with us in game, this is not required) </p>
			   <p> 6. Are you aware we will not use your voice in a project without permission, and will not use it for AI training in any way shape or form? </p>
			    <p> 7. Are you aware we will not use your voice in a project without permission, and will not use it for AI training in any way shape or form? </p>
				
				<p> 8. Do you have any preferences of style of voices? </p>
					<p> 9. Are you aware that this is not a paid venture, but we over time will try and gift things when finances allow (but sadly cannot make promises up front)? </p>
						<p> 10. Do you have any voice portfolios for other community projects? (If they are in the Azem discord, just point us to the forum post and we can listen there!) </p>
		  	<h3>Other Volunteer Positions</h3> 
			<p> There is no formal application for other things you can help with but feel free to discuss with us based on the following ways we REALLY need help:</p>
			<p> Story editing - We will be writing a lot of different stories that help the lore outside of the videos. We just need someone that can nitpick enough to make notes..  Someone that doesn't have to do the editing FOR us just roughly let us know where things should get fixed. We are not doing a full concept of "professional novel editing" just fic-editing.</p>
			<p> Soundtrack builders. Get us out a rut, lol. Help us build some different music choices. We are bodily an Elder Millenial, and are too square to be hip. </p>
			<p> World Builders: we'd love to see over time more people wanting to write stories themselves that have either your own Original content or characters in the land - or picking up your own version of something existing! </p>
			
			 
          <p>
           Design trackers: While we do use modifications (and we note that Square Enix terms of services is AGAINST the use of modifications so the use of our modified items is only for educational use, the same as the reason why Yoshi P uses them... for educational use... yes!) - it'd be amazing if anyone can track certain things. Sadly we are not nearly as smart as Keira Sakura, who has content labelled down to the wire from each of her epsidoes. IF we were that smart, we would not be panicking at the amount of hard drive space we have left. This is a good way to say "if you know something about a thing - that might fit this character". </p>
			<h3> How to Apply </h3>
				<p> We have a google form here:  	<RainbowButton
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
      </RainbowButton></p>
	  
	  <p> If you're not wanting to use the google form, please use ANY form of social media you are willing to direct message us on (preferably discord). We are trying to find secure ways of doing forms in future, and may end up crafting one to work with cloudflare in the end. This would bypass the fact that Google is now full into AI, and while yes in theory Vercel is an AI platform, the security risks on a cloudflare bucket with a form on this site vs Google taking everything we do and training on it...  Would be a lot better.  Considering the fact that even Discord is not 100% safe these days, and you would be posting semi personal audio files. Discord is usually fine, but for those that do not use Discord we will need to find a better option than google.  Email KIND of works, but if yo uare on yahoo, google or microsoft - same concept applies. If you are just doing some volunteer work just Discord or Social Media or even email works! </p> 
        </div>
      </div>
			
    </main>
  );
}
