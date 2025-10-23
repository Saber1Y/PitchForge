import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_BY_SLUG_QUERY } from "@/lib/queries";
import {
  BiMapPin,
  BiGroup,
  BiCalendar,
  BiTrendingUp,
  BiBookmark,
  BiDollarCircle,
  BiBarChart,
} from "react-icons/bi";

interface Founder {
  name: string;
  role: string;
  avatar: string;
}

interface StartupPageProps {
  params: { slug: string };
}

export default async function StartupPage({ params }: StartupPageProps) {
  const { slug } = await params;
  const { data: startup } = await sanityFetch({
    query: STARTUP_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!startup) {
    notFound();
  }

  const formatFunding = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    return `$${(amount / 1000).toFixed(0)}K`;
  };

  const fundingProgress = (startup.fundingRaised / startup.fundingGoal) * 100;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pitchforge-bg via-pitchforge-bg to-pitchforge-mint/5">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-pitchforge-gold/10">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src={startup.logo}
                  alt={`${startup.companyName} logo`}
                  width={120}
                  height={120}
                  className="w-24 h-24 lg:w-30 lg:h-30 rounded-2xl object-cover"
                />
              </div>

              {/* Company Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-pitchforge-text mb-2">
                      {startup.companyName}
                    </h1>
                    <p className="text-xl text-pitchforge-text/80 font-medium mb-4">
                      {startup.tagline}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-pitchforge-mint/20 text-pitchforge-text text-sm rounded-full">
                        {startup.category}
                      </span>
                      <span className="px-3 py-1 bg-pitchforge-gold/20 text-pitchforge-text text-sm rounded-full">
                        {startup.stage}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-6 text-sm text-pitchforge-text/60">
                      <div className="flex items-center gap-1">
                        <BiMapPin className="w-4 h-4" />
                        {startup.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <BiGroup className="w-4 h-4" />
                        {startup.teamSize} team members
                      </div>
                      <div className="flex items-center gap-1">
                        <BiCalendar className="w-4 h-4" />
                        Founded {startup.founded}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-pitchforge-mint/20 text-pitchforge-text rounded-lg hover:bg-pitchforge-mint/30 transition-all">
                      <BiTrendingUp className="w-4 h-4" />
                      {startup.votes} votes
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-pitchforge-gold/20 text-pitchforge-text rounded-lg hover:bg-pitchforge-gold/30 transition-all">
                      <BiBookmark className="w-4 h-4" />
                      Bookmark
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              {startup.images && startup.images.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-pitchforge-gold/10">
                  <Image
                    src={startup.images[0]}
                    alt={startup.companyName}
                    width={800}
                    height={400}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
              )}

              {/* Description */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-pitchforge-gold/10">
                <h2 className="text-2xl font-semibold text-pitchforge-text mb-4">
                  About {startup.companyName}
                </h2>
                <p className="text-pitchforge-text/80 leading-relaxed">
                  {startup.description}
                </p>
              </div>

              {/* Pitch Content */}
              {startup.pitch && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-pitchforge-gold/10">
                  <h2 className="text-2xl font-semibold text-pitchforge-text mb-4">
                    The Pitch
                  </h2>
                  <div className="prose prose-lg max-w-none text-pitchforge-text/80">
                    {startup.pitch}
                  </div>
                </div>
              )}

              {/* Team */}
              {startup.founders && startup.founders.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-pitchforge-gold/10">
                  <h2 className="text-2xl font-semibold text-pitchforge-text mb-6">
                    Meet the Team
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {startup.founders.map((founder: Founder, index: number) => (
                      <div key={index} className="text-center">
                        <Image
                          src={founder.avatar}
                          alt={founder.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                        />
                        <h3 className="font-semibold text-pitchforge-text">
                          {founder.name}
                        </h3>
                        <p className="text-pitchforge-text/60 text-sm">
                          {founder.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Funding Stats */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pitchforge-gold/10">
                <h3 className="text-xl font-semibold text-pitchforge-text mb-4 flex items-center gap-2">
                  <BiDollarCircle className="w-5 h-5" />
                  Funding Overview
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-pitchforge-text/60 text-sm">
                        Goal
                      </span>
                      <span className="font-semibold text-pitchforge-text">
                        {formatFunding(startup.fundingGoal)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-pitchforge-text/60 text-sm">
                        Raised
                      </span>
                      <span className="font-semibold text-pitchforge-text">
                        {formatFunding(startup.fundingRaised)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className="bg-pitchforge-gold h-3 rounded-full transition-all"
                        style={{ width: `${Math.min(fundingProgress, 100)}%` }}
                      ></div>
                    </div>
                    <div className="text-center text-sm text-pitchforge-text/60">
                      {fundingProgress.toFixed(1)}% funded
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pitchforge-gold/10">
                <h3 className="text-xl font-semibold text-pitchforge-text mb-4 flex items-center gap-2">
                  <BiBarChart className="w-5 h-5" />
                  Quick Stats
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-pitchforge-text/60">Views</span>
                    <span className="font-semibold text-pitchforge-text">
                      {startup.views || 0}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-pitchforge-text/60">Votes</span>
                    <span className="font-semibold text-pitchforge-text">
                      {startup.votes}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-pitchforge-text/60">Stage</span>
                    <span className="font-semibold text-pitchforge-text">
                      {startup.stage}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {startup.tags && startup.tags.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pitchforge-gold/10">
                  <h3 className="text-xl font-semibold text-pitchforge-text mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {startup.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-pitchforge-mint/20 text-pitchforge-text text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <SanityLive />
    </>
  );
}
