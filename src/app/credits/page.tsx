export default function CreditsPage() {
  const credits = [
    "Disclaimer/Opening (Trailer/Teaser) - Us/duskfallcrew",
    "Kay Solas (Trailer) - Us (duskfallcrew)",
    "Kay Solas (Episode 001) - Cheese",
    "Criss Solas (Trailer/Episode 001) - ApollotheGremlin",
  ];

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>Voice Acting Credits</h1>
      </header>

      <div className="rounded-3xl border border-border/60 bg-background/70 bg-gradient-to-b from-white/[0.06] to-transparent p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12">
        <ul className="space-y-3 text-center">
          {credits.map((credit) => (
            <li key={credit} className="text-muted-foreground">
              {credit}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
