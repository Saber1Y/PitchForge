import { z } from "zod";

export const StartupSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  description: z.string().min(10, "Description is required"),
  stage: z.string().min(1, "Stage is required"),
  teamSize: z.coerce.number().min(1, "Team size is required"),
  location: z.string().min(1, "Location is required"),
  founded: z.string().min(4, "Founded is required"),
  founders: z
    .array(
      z.object({
        name: z.string().min(2, "Name is required").max(50, "Name is too long"),
        role: z.string().min(2, "Role is required").max(50, "Role is too long"),
        avatar: z.url().refine(async (url) => {
          try {
            const response = await fetch(url, { method: "HEAD" });
            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.startsWith("image/")) {
              return true;
            }
          } catch (error) {
            throw new Error("Invalid URL");
            console.error("Error validating avatar URL:", error);
          }
        }),
      })
    )
    .min(1, "At least one founder is required"),
  fundingGoal: z.coerce.number().min(0, "Funding goal is required"),
  fundingRaised: z.coerce.number().min(0, "Funding raised is required"),
  logo: z.url().refine(
    async (url) => {
      try {
        const response = await fetch(url, { method: "HEAD" });
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.startsWith("image/")) {
          return true;
        }
      } catch (error) {
        console.error("Error validating logo URL:", error);
        return false;
      }
    },
    { message: "Logo must be a reachable image URL" }
  ),
  images: z.array(z.string()).min(1, "At least one image URL is required"),
  // .refine(
  //   async (urls) => {
  //     for (const url of urls) {
  //       try {
  //         const response = await fetch(url, { method: "HEAD" });
  //         const contentType = response.headers.get("Content-Type");
  //         if (!(contentType && contentType.startsWith("image/"))) {
  //           return false;
  //         }
  //       } catch (error) {
  //         console.error("Error validating image URL:", error);
  //         return false;
  //       }
  //     }
  //     return true;
  //   },
  //   { message: "All images must be reachable image URLs" }
  // ),
  pitch: z.string().min(10, "Pitch must be at least 10 characters long"),
});
