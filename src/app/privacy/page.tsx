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
            We do our best to pick the most user friendly way of doing things. This means that any data as a collaborator is handled with utmost care, and that section is covered under Terms rather than Privacy. If you are a visitor the data retention policy is important. Because as it stands, we don't actually have the analytics plugin, nor speed plugin enabled for Vercel. We DO however note that just like every other basic website, even if you had an HTML website you could still ascertain this data via a webhost or otherwise - that we can see basic data like regions and rough device information.  None of this directly AT all identifies anyone, this is literally what would happen if you had a person writing down assumed information in the middle of a street watching people walking into a mall.  This information is handled by our WEB HOST, which is VERCEL.  You can find their privacy policy here: https://vercel.com/legal/privacy-notice . 
          </p>
			 <h3> Cookies & Tracking </h3> 
          <p>
           We don't currently as far as I am aware track with cookies, but basic browser information and rough geographic location are stored for basic traffic. None of this information is tied back to you. It also services a way to track AI bots and scrapers. We use Vercel for security and integrity, so we also check things like speed insights to make sure we are servicing as many devices as we can. Speed insights only check if you are being served via mobile or desktop. Speed insights DO NOT take information like your cellphone, mobile browser or even geographic location.  Even better still: If you use an ad blocker and plausibly a VPN you will likely confuse both the speed insights AND the traffic insights.  We also do NOT sell any of the data that is shown on the private dashboard for site owners.  Any data that is passed back and forth for roles, or communication is done privatley via discord or social media. No personal information is collected.  For concerns on privacy please use the contact page listed in the navigation.  </p>
			<h3> AI Agentic Assistance </h3> 
		   <p>
             NO, and I mean NO data is passed back and forth except for basic names and character information inside the actual code of the website. No voice files, no videos (apart from youtube URLs), are passed to the LLM in any way that would bring your data back to the corporations for training. Youtube itself is not something we can control, and nor is anything on the public internet.  Voice files are only shared with HUMANS within the context of the project management or other people involved. No bones files, no character data from lodestone or otherwise are shared with the agentic tool.
          </p>
			  </div>
		 
		  
		  </div>

			
    </main>
  );
}
