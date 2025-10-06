import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

// export const post = await client.fetch(STARTUPS_QUERY);
export const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY });
