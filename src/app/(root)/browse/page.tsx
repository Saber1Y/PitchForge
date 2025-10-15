import BrowsePitchesClient from "@/components/BrowsePitchesClient";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/lib/queries";
// import { getSearchParams } from "next/navigation";

export default async function BrowsePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const query = searchParams?.query || "";
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
      <BrowsePitchesClient posts={posts} />
      <SanityLive />
    </>
  );
}
