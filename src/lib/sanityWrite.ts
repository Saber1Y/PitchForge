import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yourProjectId",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
});

export type StartupInput = Record<string, unknown>;

export async function createStartup(data: StartupInput) {
  return sanityClient.create({
    _type: "startup",
    ...data,
  });
}
