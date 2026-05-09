import rss from "@astrojs/rss";
import { getCollection, getEntry } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("posts", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const items = await Promise.all(
    posts.map(async (post) => {
      const persona = await getEntry("personas", post.data.author);
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/posts/${post.slug}/`,
        author: persona ? persona.data.name : post.data.author,
      };
    })
  );
  return rss({
    title: "Dipshit News",
    description: "Daily satirical record of presidential dipshittery.",
    site: context.site,
    items,
  });
}
