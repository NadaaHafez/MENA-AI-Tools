import { client } from "./client.js";

export default async function getPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(date desc) {
      _id, 
      title,
      slug,
      date,
      author,
      excerpt,
      content,
      category->{
        name,
      },
      icon
    }
  `);
}
