import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { characters } from "@/lib/characters";

export default function CharactersPage() {
  return (
    <main>
      <h1>Characters</h1>
      <ul>
        {characters.map((c) => (
          <li key={c.slug}>
            <Link href={`/characters/${c.slug}`} className={buttonVariants({ variant: "outline", size: "sm" })}>

            {c.title}
            </Link>
            <p>{c.blurb}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}