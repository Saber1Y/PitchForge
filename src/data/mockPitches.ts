export interface PitchData {
  id: string;
  _id?: string;
  companyName: string;
  description: string;
  industry: string;
  stage: string;
  fundingGoal: number;
  fundingRaised: number;
  teamSize: number;
  votes: number;
  location: string;
  founded: string;
  logo: string;
  images: string[];
  founders: {
    name: string;
    role: string;
    avatar: string;
  }[];
  isBookmarked: boolean;
  createdAt: string;
}

export const mockPitches: PitchData[] = [
  {
    id: "1",
    companyName: "EcoFlow",
    description:
      "Revolutionary solar panel technology that increases efficiency by 40% while reducing costs. Our AI-powered energy management system optimizes power consumption and storage.",
    industry: "CleanTech",
    stage: "Seed",
    fundingGoal: 2000000,
    fundingRaised: 500000,
    teamSize: 8,
    votes: 342,
    location: "San Francisco, CA",
    founded: "2023",
    logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
    ],
    founders: [
      {
        name: "Sarah Chen",
        role: "CEO & Co-founder",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=40&h=40&fit=crop&crop=face",
      },
      {
        name: "Mike Rodriguez",
        role: "CTO & Co-founder",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      },
    ],
    isBookmarked: false,
    createdAt: "2024-10-01T10:00:00Z",
  },
  {
    id: "2",
    companyName: "MedAI",
    description:
      "Advanced machine learning algorithms that can detect diseases from medical imaging with 99% accuracy. Reducing diagnosis time from hours to minutes.",
    industry: "HealthTech",
    stage: "Series A",
    fundingGoal: 5000000,
    fundingRaised: 1200000,
    teamSize: 15,
    votes: 567,
    location: "Boston, MA",
    founded: "2022",
    logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    ],
    founders: [
      {
        name: "Dr. Emily Watson",
        role: "CEO & Co-founder",
        avatar:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
      },
    ],
    isBookmarked: true,
    createdAt: "2024-09-28T14:30:00Z",
  },
  {
    id: "3",
    companyName: "FinFlow",
    description:
      "Comprehensive financial platform with smart budgeting, automated investing, and cryptocurrency integration. Built for millennials and Gen Z.",
    industry: "FinTech",
    stage: "Pre-seed",
    fundingGoal: 1000000,
    fundingRaised: 150000,
    teamSize: 5,
    votes: 234,
    location: "New York, NY",
    founded: "2024",
    logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    ],
    founders: [
      {
        name: "Alex Thompson",
        role: "CEO & Founder",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      {
        name: "Jessica Kim",
        role: "Head of Product",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
    ],
    isBookmarked: false,
    createdAt: "2024-10-02T09:15:00Z",
  },
  {
    id: "4",
    companyName: "FoodieBot",
    description:
      "Complete restaurant automation platform with AI-driven inventory management, customer service chatbots, and predictive analytics for demand forecasting.",
    industry: "FoodTech",
    stage: "Seed",
    fundingGoal: 1500000,
    fundingRaised: 300000,
    teamSize: 12,
    votes: 189,
    location: "Austin, TX",
    founded: "2023",
    logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    ],
    founders: [
      {
        name: "Carlos Mendez",
        role: "CEO & Co-founder",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      },
    ],
    isBookmarked: true,
    createdAt: "2024-09-25T16:45:00Z",
  },
  {
    id: "5",
    companyName: "EduVerse",
    description:
      "Immersive VR educational platform that makes learning engaging and interactive. Covering subjects from history to quantum physics with 3D simulations.",
    industry: "EdTech",
    stage: "Series A",
    fundingGoal: 8000000,
    fundingRaised: 2500000,
    teamSize: 25,
    votes: 445,
    location: "Seattle, WA",
    founded: "2021",
    logo: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=100&h=100&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1588702547923-7093a5c47145?w=400&h=300&fit=crop",
    ],
    founders: [
      {
        name: "David Park",
        role: "CEO & Co-founder",
        avatar:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face",
      },
      {
        name: "Lisa Chang",
        role: "Head of Content",
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face",
      },
    ],
    isBookmarked: false,
    createdAt: "2024-09-30T11:20:00Z",
  },
  {
    id: "6",
    companyName: "GreenLogistics",
    description:
      "Revolutionary logistics platform using electric vehicles and AI-optimized routes to provide 100% carbon-neutral delivery services for e-commerce.",
    industry: "Logistics",
    stage: "Growth",
    fundingGoal: 15000000,
    fundingRaised: 8000000,
    teamSize: 45,
    votes: 678,
    location: "Los Angeles, CA",
    founded: "2020",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    ],
    founders: [
      {
        name: "Maria Santos",
        role: "CEO & Founder",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      },
    ],
    isBookmarked: true,
    createdAt: "2024-09-22T13:10:00Z",
  },
];
