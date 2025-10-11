import { z } from "zod";

export const StartupSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  tagline: z.string().min(3, "Tagline is required"),
  description: z.string().min(10, "Description is required"),
  stage: z.string().min(1, "Stage is required"),
  teamSize: z.coerce.number().min(1, "Team size is required"),
  location: z.string().min(1, "Location is required"),
  founded: z.string().min(4, "Founded is required"),
  founders: z.string().min(1, "At least one founder is required"),
  fundingGoal: z.coerce.number().min(0, "Funding goal is required"),
  fundingRaised: z.coerce.number().min(0, "Funding raised is required"),
  logo: z.url("Logo must be a valid URL"),
  images: z.string().min(1, "At least one image URL is required"),
  tags: z.string().min(1, "At least one tag is required"),
  pitch: z.string().min(10, "Pitch must be at least 10 characters long"),
});
