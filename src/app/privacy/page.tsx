export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>Privacy & Responsibility Policies</h1>
      </header>
			  <h2> Privacy within this Site and Project </h2>
      <div className="rounded-3xl border border-border/60 bg-background/70 bg-gradient-to-b from-white/[0.06] to-transparent p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12">
        <div className="text-muted-foreground space-y-6">
		<h3> Data Retention </h3> 
          <p>
            We do our best to pick the most user friendly way of doing things. This means that any data as a collaborator is handled with utmost care, and that section is covered under Terms rather than Privacy. If you are a visitor the data retention policy is important. Because as it stands, we don't actually have the analytics plugin, nor speed plugin enabled for Vercel. We DO however note that just like every other basic website, even if you had an HTML website you could still ascertain this data via a webhost or otherwise - that we can see basic data like regions and rough device information.  None of this directly AT all identifies anyone, this is literally what would happen if you had a person writing down assumed information in the middle of a street watching people walking into a mall.  This information is handled by our WEB HOST, which is VERCEL. 
          </p>
			 <h3> Cookies & Tracking </h3> 
          <p>
           They may or may not because I am unaware at this stage - have cookies with any information that tracks back. As far as we're aware this sort of data would only come back to us if and when or ever we decided to use the Anayltics package installable via the NPM package manager. Some apps, and some websites have this stuff on by default, but since we did not opt to use full AI assistance to roll this out, we had more control over the privacy in the starting of this project.  </p>
			<h3> AI Agentic Assistance </h3> 
		   <p>
             NO, and I mean NO data is passed back and forth except for basic names and character information inside the actual code of the website. No voice files, no videos (apart from youtube URLs), are passed to the LLM in any way that would bring your data back to the corporations for training. Youtube itself is not something we can control, and nor is anything on the public internet.  Voice files are only shared with HUMANS within the context of the project management or other people involved. No bones files, no character data from lodestone or otherwise are shared with the agentic tool.  As stated in the disclaimer section, our intention with this project is to re-learn web design and learn advanced design and development.  As we used to be involved with open source AI, we are incredibly aware of grabby hands in certain circles, and want to protect as much as we can from prying eyes and otherwise.  The caveat is that this is a project on the public, open facing internet. Nothing is ever safe from anyone wanting to steal, yank and train on it. What we are able to prevent is our responsibility.  
          </p>
			  </div>
		 
		  
		  </div>

			
    </main>
  );
}
