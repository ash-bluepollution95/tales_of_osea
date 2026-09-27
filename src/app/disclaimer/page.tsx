export default function DisclaimerPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>Disclaimer</h1>
      </header>

      <div className="rounded-3xl border border-border/60 bg-background/70 bg-gradient-to-b from-white/[0.06] to-transparent p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12">
        <div className="text-muted-foreground space-y-6">
          <p>
            This is NOT to cause system discourse, nor cause harm within the
            system community as a whole - NOR with Final Fantasy XIV. This is an
            entertainment series we are planning, and it&apos;s a ROUGH
            fictionalized version of what some of our system feels..
          </p>

          <p>
            What one system feels doesn&apos;t mean it&apos;s everyone&apos;s
            choice nor every experience. We&apos;re not here to diagnose, nor
            lead anyone astray.
          </p>
        </div>
      </div>
    </main>
  );
}
