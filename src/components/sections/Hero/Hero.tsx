import React from "react";
import Link from "next/link";
import { BiRocket } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import AnimatedText from "@/components/animations/AnimatedText";
import StatsSection from "@/components/sections/Stats/StatsSection";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Hero = () => {
  return (
    <section className="relative">
      <BackgroundBeamsWithCollision>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 z-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-pitchforge-mint/20 border border-pitchforge-mint/30 rounded-full">
              <AiFillStar className="w-4 h-4 text-pitchforge-gold mr-2" />
              <span className="text-sm font-medium text-pitchforge-text">
                Where Ideas Become Startups
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-pitchforge-text leading-tight">
                Pitch Your{" "}
                <span className="relative">
                  <span className="text-pitchforge-gold">Startup</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-pitchforge-mint/30 -rotate-1"></div>
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-pitchforge-text">
                Connect with{" "}
                <AnimatedText className="text-2xl sm:text-3xl lg:text-5xl font-bold" />
              </h2>
            </div>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-pitchforge-text/80 leading-relaxed">
              Submit your ideas, vote on pitches, and get noticed in virtual
              competitions. Join a thriving community of founders, investors,
              and innovators.
            </p>

            {/* Search Section */}
            {/* <div className="max-w-2xl mx-auto pt-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <BiSearch className="h-5 w-5 text-pitchforge-text/50" />
                </div>
                <input
                  type="text"
                  placeholder="Search startups by category, stage, or founder..."
                  className="w-full pl-12 pr-16 py-4 bg-white/90 backdrop-blur-sm border-2 border-pitchforge-gold/20 rounded-2xl text-pitchforge-text placeholder-pitchforge-text/50 focus:outline-none focus:border-pitchforge-gold focus:ring-2 focus:ring-pitchforge-gold/20 transition-all"
                />
                <button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <div className="bg-pitchforge-gold hover:bg-pitchforge-gold/80 text-pitchforge-bg p-3 rounded-xl transition-colors">
                    <BiSearch className="h-5 w-5" />
                  </div>
                </button>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/create"
                className="group inline-flex items-center px-8 py-4 bg-pitchforge-mint hover:bg-pitchforge-mint/80 text-pitchforge-text font-semibold rounded-2xl transition-all transform hover:scale-105 hover:shadow-lg"
              >
                <BiRocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Submit Your Pitch
              </Link>

              <Link
                href="/browse"
                className="inline-flex items-center px-8 py-4 border-2 border-pitchforge-gold text-pitchforge-gold hover:bg-pitchforge-gold hover:text-pitchforge-bg font-semibold rounded-2xl transition-all"
              >
                <HiUsers className="w-5 h-5 mr-2" />
                Browse Pitches
              </Link>
            </div>
          </div>

          <StatsSection />

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-pitchforge-gold/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-pitchforge-gold rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
