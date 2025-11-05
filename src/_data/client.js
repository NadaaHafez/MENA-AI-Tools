import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "2d4t0ipa",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});
