import BrowsePitchesClient from "@/components/BrowsePitchesClient";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/lib/queries";

export default async function BrowsePage() {
  // Fetch data on the server
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY });

  return (
    <>
      <BrowsePitchesClient posts={posts} />
      <SanityLive />
    </>
  );
}
