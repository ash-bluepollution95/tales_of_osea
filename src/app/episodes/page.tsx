import Link from "next/link";
import { episodes } from "@/lib/episodes";
import { buttonVariants } from "@/components/ui/button";


export default function EpisodesPage() {
  return (
    <main>
      <h1>Episodes</h1>
	  <p> Be aware this section is under heavy construction </p>
      <ul>
        {episodes.map((ep) => (
          <li key={ep.slug}>
            <Link
  href={`/episodes/${ep.slug}`}
  className={buttonVariants({ variant: "outline", size: "lg" })}
>
  {ep.title}
</Link>
            <p>{ep.kind}</p>
            <p>{ep.blurb}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
