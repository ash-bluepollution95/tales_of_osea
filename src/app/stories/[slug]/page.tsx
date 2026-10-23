import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { stories } from "@/lib/stories";
import { characters } from "@/lib/characters";
import type { StoryBlock } from "@/lib/stories";

function CreditLink({ name, url }: { name: string; url?: string }) {
  if (!url) return <>{name}</>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-2 hover:text-foreground"
    >
      {name}
    </a>
  );
}

function Block({ block }: { block: StoryBlock }) {
  switch (block.type) {
    case "heading":
      return <h2>{block.text}</h2>;
    case "paragraph":
      return <p className="text-muted-foreground">{block.text}</p>;
    case "quote":
      return (
        <blockquote className="border-l-2 pl-4 italic text-foreground/80">
          {block.text}
        </blockquote>
      );
    case "image":
      return (
        <figure>
          <Image
            src={block.src}
            alt={block.alt}
            width={1920}
            height={1080}
            className="rounded-xl border"
          />
          {block.caption || block.credit ? (
            <figcaption className="text-muted-foreground text-sm">
              {block.caption ? (
                <span className="block">{block.caption}</span>
              ) : null}
              {block.credit ? (
                <span className="text-muted-foreground/70 mt-1 block text-xs">
                  Photo by{" "}
                  <CreditLink name={block.credit.author} url={block.credit.authorUrl} />{" "}
                  on{" "}
                  <CreditLink name={block.credit.source} url={block.credit.sourceUrl} />
                </span>
              ) : null}
            </figcaption>
          ) : null}
        </figure>
      );
    default:
      return null;
  }
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10">
        <h1>{story.title}</h1>
        <p className="text-muted-foreground text-sm">{story.date}</p>
        <p className="text-muted-foreground mt-2">{story.blurb}</p>
      </header>

      {/* who appears — slug → name + link */}
      {story.characters.length > 0 ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {story.characters.map((slug) => {
            const c = characters.find((x) => x.slug === slug);
            return c ? (
              <Link key={slug} href={`/characters/${slug}`}>
                {c.name}
              </Link>
            ) : null;
          })}
        </div>
      ) : null}
	       
      {/* the story body */}
      <div className="space-y-6">
        {story.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
	  {/*Music Inspo*/}
	  
	   <div className="space-y-6">
	   {story.music && (
  <p className="text-xs text-muted-foreground/60 mt-2 italic">
    Musical Inspiration: {story.music}
  </p>
)}
	   </div>
    </main>
  );
}