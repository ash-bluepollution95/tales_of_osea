import { notFound } from "next/navigation";
import Link from "next/link";
import { getStoryBySlug, getAllStories, markdownToHtml, formatStoryDate, type Story } from "@/lib/stories";
import { characters } from "@/lib/characters";

export function generateStaticParams() {
  return getAllStories().map((story) => ({ slug: story.slug }));
}



export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let story: Story | undefined;                    // SWAP 1
  try {
    story = getStoryBySlug(slug);
  } catch {
    notFound();
  }

  const html = await markdownToHtml(story.content);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10">
        <h1>{story.title}</h1>
        <p className="text-muted-foreground text-sm">{formatStoryDate(story.date)}</p>
        <p className="text-muted-foreground mt-2">{story.excerpt}</p>   {/* SWAP 2: blurb → excerpt */}
      </header>

      {/* who appears — slug → name + link */}
      {story.characters.length > 0 ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {story.characters.map((s) => {
            const c = characters.find((x) => x.slug === s);
            return c ? (
              <Link key={s} href={`/characters/${s}`}>
                {c.name}
              </Link>
            ) : null;
          })}
        </div>
      ) : null}

      {/* the story body */}                        {/* SWAP 3 */}
      <div
        className="prose dark:prose-invert prose-headings:font-heading prose-a:text-primary prose-blockquote:border-primary/50 max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

   
   
   
   
    </main>
  );
}