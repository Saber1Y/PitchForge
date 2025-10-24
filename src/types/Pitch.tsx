export interface Founder {
  name: string;
  role: string;
  avatar: string;
}

export interface PitchData {
  id: string;
  companyName: string;
  description: string;
  industry: string;
  stage: string;
  location: string;
  teamSize: number;
  founded: string;
  logo: string;
  images: string[];
  fundingGoal: number;
  fundingRaised: number;
  votes: number;
  isBookmarked: boolean;
  founders: Founder[];
  slug?: string | { current: string };
}

export type ViewMode = "list" | "grid";

export type SortOption = "trending" | "recent" | "votes" | "funding";
