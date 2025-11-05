import { client } from "./client.js";

export default async function getTools() {
  return await client.fetch(`
    *[_type == "tool"]{
      _id,
      name,
      slug,
      description,
      category -> {
      name,
      _id
      },
      pricing,
      website,
      features,
      icon
  }
    `);
}
