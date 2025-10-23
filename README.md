# 🚀 PitchForge

A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience.

![PitchForge Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=PitchForge+-+Where+Ideas+Become+Startups)

## 🤖 Introduction

PitchForge is the modern platform for entrepreneurs to showcase their startup ideas, connect with like-minded founders, and gain valuable exposure in the startup ecosystem. Built with the latest technologies and designed with simplicity in mind.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 34k+ members. It's a place where people help each other out.

## ⚙️ Tech Stack

- **React 19** - Latest React features and performance improvements
- **Next.js 15** - Full-stack React framework with App Router
- **Sanity** - Headless CMS for content management
- **TailwindCSS** - Utility-first CSS framework
- **ShadCN** - Beautiful and accessible UI components
- **TypeScript** - Type-safe development
- **Auth.js** - Authentication solution

## 🔋 Features

### Core Functionality

👉 **Live Content API**: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API

👉 **GitHub Authentication**: Allows users to log in easily using their GitHub account

👉 **Pitch Submission**: Users can submit startup ideas, including title, description, category, and multimedia links (image or video)

👉 **View Pitches**: Browse through submitted ideas with filtering options by category

👉 **Pitch Details Page**: Click on any pitch to view its details, with multimedia and description displayed

👉 **Profile Page**: Users can view the list of pitches they've submitted

### Advanced Features

👉 **Editor Picks**: Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio

👉 **Views Counter**: Tracks the number of views for each pitch instead of an upvote system

👉 **Search**: Search functionality to load and view pitches efficiently

👉 **Minimalistic Design**: Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic

And many more, including the latest React 19, Next.js 15 and Sanity features alongside code architecture and reusability.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm/bun
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/pitchforge.git
   cd pitchforge/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   # Auth.js
   AUTH_SECRET="your-auth-secret"
   AUTH_GITHUB_ID="your-github-client-id"
   AUTH_GITHUB_SECRET="your-github-client-secret"

   # Sanity
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-sanity-project-id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   SANITY_API_TOKEN="your-sanity-api-token"
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (root)/         # Main application pages
│   │   ├── api/            # API routes
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   ├── ui/             # Reusable UI components
│   │   ├── pitch/          # Pitch-related components
│   │   └── auth/           # Authentication components
│   ├── lib/                # Utility functions and configurations
│   ├── constants/          # Global constants
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
├── Auth.ts                 # Auth.js configuration
└── sanity/                 # Sanity CMS configuration
```

## 🔧 Configuration

### Authentication Setup

1. **GitHub OAuth**
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Create a new OAuth App
   - Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
   - Copy Client ID and Client Secret to your `.env.local`

### Sanity CMS Setup

1. **Create Sanity Project**

   ```bash
   npm create sanity@latest
   ```

2. **Configure Schemas**
   - Set up schemas for pitches, users, categories
   - Configure CORS settings for your domain

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

- **Netlify**: Configure build settings and environment variables
- **Railway**: Use the provided railway.json configuration
- **DigitalOcean**: Deploy using App Platform

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write TypeScript for type safety
- Use the established component structure
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Sanity** for the flexible CMS
- **Vercel** for the deployment platform
- **ShadCN** for the beautiful UI components
- **Community** for continuous feedback and support

## 📞 Support

- **Discord**: [Join our community](https://discord.gg/your-discord)
- **Email**: support@pitchforge.com
- **Twitter**: [@pitchforge](https://twitter.com/pitchforge)

## 🗺️ Roadmap

- [ ] Advanced analytics dashboard
- [ ] Integration with popular dev tools
- [ ] AI-powered pitch analysis
- [ ] Web3/Blockchain integration
- [ ] Multi-language support
- [ ] Advanced filtering and search
- [ ] Real-time collaboration features

---

Made with ❤️ by the PitchForge team
