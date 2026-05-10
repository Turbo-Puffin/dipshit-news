import rss from "@astrojs/rss";
import { getCollection, getEntry } from "astro:content";

export async function GET(context) {
  const articles = (await getCollection("articles", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const items = await Promise.all(
    articles.map(async (article) => {
      const persona = await getEntry("personas", article.data.author);
      return {
        title: article.data.headline,
        description: article.data.deck,
        pubDate: article.data.date,
        link: `/articles/${article.slug}/`,
        author: persona ? persona.data.name : article.data.author,
      };
    })
  );
  return rss({
    title: "Dipshit",
    description: "A daily satirical record of presidential dipshittery.",
    site: context.site,
    items,
  });
}
