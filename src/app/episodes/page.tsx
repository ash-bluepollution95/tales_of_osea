import Link from "next/link";
import { episodes } from "@/lib/episodes";

export default function EpisodesPage() {
  return (
    <main>
      <h1>Episodes</h1>
      <ul>
        {episodes.map((ep) => (
          <li key={ep.slug}>
            <Link href={`/episodes/${ep.slug}`}>{ep.title}</Link>
            <p>{ep.kind}</p>
            <p>{ep.blurb}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
