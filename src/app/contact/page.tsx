import { Bluesky } from "@/components/ui/svgs/bluesky";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>Contact Us</h1>
      </header>
			
	  <div className="rounded-3xl border border-border/60 bg-background/70 bg-gradient-to-b from-white/[0.06] to-transparent p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12">
        <div className="text-muted-foreground space-y-6">
		  <h2> Social Media </h2>
		 	 
			 <p> <a
                href="https://bsky.app/profile/duskfallcrew.bsky.social"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Follow us on Bluesky"
              >
                <Bluesky className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/gxD8XcNzAg"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Join us on Discord"
              >
                <img src="/Discord-Symbol-Blurple.svg" alt="Discord" className="h-5 w-5" />
              </a>
              <a
                href="https://www.threads.com/@duskfallcrew"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Connect with us on Threads"
              >
                <img src="/threads-logo-white.svg" alt="Threads" className="h-5 w-5" />
              </a>    </p> 
			 
			 <h2> E-mail or Other </h2> 

			  <p>
  For anything official — questions, concerns, takedown or counter-notice
  requests — email us at{" "}
  <a
    className="text-primary underline underline-offset-4"
    href="mailto:info@duskfallcrew.anonaddy.com"
  >
    info@duskfallcrew.anonaddy.com
  </a>
  . This email is also for questions, concerns and otherwise in case you don't use discord or social media. It is also for DMCA takedowns. Which we take extremely seriously.
</p>
			    </div>
      </div>
    </main>
  );
}
