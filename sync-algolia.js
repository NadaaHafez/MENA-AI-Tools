import { algoliasearch } from "algoliasearch";
import dotenv from "dotenv";
dotenv.config();

import getTools from "./src/_data/tools.js";
import getCategories from "./src/_data/categories.js";
import getPosts from "./src/_data/posts.js";

// Connect and authenticate with  Algolia app
const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APP_ID, //Application ID
  process.env.ALGOLIA_ADMIN_KEY //Admin API Key
);

//(fetch, format, push)
async function syncToAlgolia() {
  try {
    console.log("🔄 Fetching data...");

    //Fetch Data
    const tools = await getTools();
    const categories = await getCategories();
    const blogs = await getPosts();

    console.log(
      `📦 Found: ${tools.length} tools, ${categories.length} categories, ${blogs.length} posts`
    );

    //Format Data
    const allRecords = [
      ...tools.map((tool) => ({
        objectID: tool._id,
        type: "tools",
        title: tool.name,
        description: tool.description,
        slug: tool.slug?.current,
        category: tool.category?.name,
      })),
      ...categories.map((category) => ({
        objectID: category._id,
        type: "category",
        title: category.name,
        description: category.description,
        slug: category.slug?.current,
      })),

      ...blogs.map((blog) => ({
        objectID: blog._id,
        type: "blog",
        title: blog.title,
        description: blog.excerpt,
        slug: blog.slug?.current,
      })),
    ];

    // Push Data to single index
    await algoliaClient.saveObjects({
      indexName: "ai_search",
      objects: allRecords,
    });
    console.log(`✅ Done! Synced ${allRecords.length} items to Algolia`);
  } catch (err) {
    console.error();
  }
}

syncToAlgolia();
