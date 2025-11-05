import { client } from "./client.js";

export default async function getCategories() {
  return await client.fetch(`
    *[_type == "category"]{
    _id,
    name,
    slug,
    icon,
    description
   } 
    `);
}
