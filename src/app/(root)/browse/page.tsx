import BrowsePitchesClient from "@/components/BrowsePitchesClient";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/lib/queries";



// @ts-expect-error Next.js inferred wrong type for searchParams
export default async function BrowsePage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const query = resolvedSearchParams?.query || "";
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
      <BrowsePitchesClient posts={posts} />
      <SanityLive />
    </>
  );
}
