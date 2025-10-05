import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/lib/queries";

export const post = await client.fetch(STARTUPS_QUERY);
