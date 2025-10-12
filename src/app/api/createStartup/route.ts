import { createStartup } from "@/lib/sanityWrite";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await createStartup(body);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    console.log("Error in createStartup API:", err);
    return new Response(JSON.stringify({ error: errorMsg }), { status: 500 });
  }
}
