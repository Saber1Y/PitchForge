import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yourProjectId",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2021-10-21",
  useCdn: false, 
  token: process.env.SANITY_WRITE_TOKEN,
});

export type StartupInput = Record<string, unknown>;

export async function createStartup(data: StartupInput) {
  return sanityClient.create({
    _type: "startup",
    ...data,
  });
}
