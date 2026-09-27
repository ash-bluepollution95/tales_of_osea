import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { worldSections } from "@/lib/world";

export default function WorldPage() {
  return (
    <main
      id="top"
      className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 sm:py-16"
    >
      <header className="mb-10 text-center">
        <h1>World &amp; Lore</h1>
        <p className="text-foreground/80 mx-auto mt-3 max-w-2xl">
          The World of Osea, and the people within.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
        {/* In-page nav */}
        <nav className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-muted-foreground mb-3 text-sm font-medium uppercase tracking-wide">
            Jump to
          </p>
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
            {worldSections.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                  })}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="space-y-10">
          {worldSections.map((s) => (
            <section key={s.slug} id={s.slug} className="scroll-mt-20">
              <Card>
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                  <CardDescription>{s.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {s.content.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
              <a
                href="#top"
                className="text-muted-foreground hover:text-foreground mt-3 inline-block text-sm transition-colors"
              >
                Back to top
              </a>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
