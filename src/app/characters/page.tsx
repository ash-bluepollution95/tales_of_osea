import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { characters } from "@/lib/characters";

export default function CharactersPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>Characters</h1>
        <p className="text-foreground/80 mx-auto mt-3 max-w-2xl">
          The cast of Tales of Osea. Click a card to peek, then open
          the full sheet.
        </p>
      </header>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {characters.map((c) => (
          <li key={c.slug}>
            <details className="group bg-background/70 bg-gradient-to-b from-white/[0.06] to-transparent text-card-foreground rounded-2xl border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <summary className="flex cursor-pointer list-none flex-col gap-2 p-6 [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-semibold">{c.name}</span>
                <span className="text-muted-foreground text-sm">{c.title}</span>
                <span className="text-muted-foreground text-sm">{c.blurb}</span>
              </summary>
              <div className="px-6 pb-6">
                <Link
                  href={`/characters/${c.slug}`}
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  View full profile
                </Link>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </main>
  );
}
