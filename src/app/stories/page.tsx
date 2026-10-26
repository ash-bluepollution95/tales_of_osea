import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getAllStories, formatStoryDate } from "@/lib/stories";

export default function StoriesPage() {
  const stories = getAllStories();
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 text-center">
        <h1>Stories</h1>
        <p className="text-foreground/80 mx-auto mt-3 max-w-2xl">
          Side-stories from Osea — the bits that happen between the episodes.
        </p>
      </header>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((s) => (
          <li key={s.slug}>
            <div className="group bg-background/70 bg-gradient-to-b from-white/[0.06] to-transparent text-card-foreground rounded-2xl border p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/15">
              <h2 className="text-lg">{s.title}</h2>
              <p className="text-muted-foreground text-sm">{formatStoryDate(s.date)}</p>
              <p className="text-muted-foreground text-sm">{s.excerpt}</p>
              <Link
                href={`/stories/${s.slug}`}
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Read story
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
