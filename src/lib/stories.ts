import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

export type Story = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  characters: string[];
  content: string;
};

const storiesDirectory = join(process.cwd(), "content", "stories");

export function getStoryBySlug(slug: string): Story {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(storiesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Story;
}

export function getAllStories(): Story[] {
  return fs
    .readdirSync(storiesDirectory)
    .map((file) => getStoryBySlug(file))
    .sort((story1, story2) => (story1.date > story2.date ? -1 : 1));
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function formatStoryDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));
}