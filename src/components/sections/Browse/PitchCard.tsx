import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BiBookmark,
  BiTrendingUp,
  BiMapPin,
  BiGroup,
  BiCalendar,
} from "react-icons/bi";
import { PitchData, ViewMode } from "@/app/browse/page";

interface PitchCardProps {
  pitch: PitchData;
  viewMode: ViewMode;
}

const PitchCard: React.FC<PitchCardProps> = ({ pitch, viewMode }) => {
  const [isBookmarked, setIsBookmarked] = useState(pitch.isBookmarked);
  const [votes, setVotes] = useState(pitch.votes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
    }
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const formatFunding = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    return `$${(amount / 1000).toFixed(0)}K`;
  };

  const fundingProgress = (pitch.fundingRaised / pitch.fundingGoal) * 100;

  if (viewMode === "list") {
    return (
      <Link href={`/pitch/${pitch.id}`}>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-pitchforge-gold/10">
          <div className="flex items-start gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={pitch.logo}
                alt={`${pitch.companyName} logo`}
                width={64}
                height={64}
                className="w-16 h-16 rounded-xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-pitchforge-text truncate">
                      {pitch.companyName}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-pitchforge-mint/20 text-pitchforge-text text-xs rounded-full">
                        {pitch.industry}
                      </span>
                      <span className="px-2 py-1 bg-pitchforge-gold/20 text-pitchforge-text text-xs rounded-full">
                        {pitch.stage}
                      </span>
                    </div>
                  </div>

                  <p className="text-pitchforge-text/80 font-medium mb-2">
                    {pitch.tagline}
                  </p>
                  <p className="text-pitchforge-text/60 text-sm line-clamp-2 mb-4">
                    {pitch.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-pitchforge-text/60">
                    <div className="flex items-center gap-1">
                      <BiMapPin className="w-4 h-4" />
                      {pitch.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <BiGroup className="w-4 h-4" />
                      {pitch.teamSize} team
                    </div>
                    <div className="flex items-center gap-1">
                      <BiCalendar className="w-4 h-4" />
                      Founded {pitch.founded}
                    </div>
                  </div>
                </div>

                {/* Right side stats */}
                <div className="flex flex-col items-end text-right ml-6">
                  <div className="text-lg font-semibold text-pitchforge-text mb-1">
                    {formatFunding(pitch.fundingGoal)}
                  </div>
                  <div className="text-sm text-pitchforge-text/60 mb-2">
                    {formatFunding(pitch.fundingRaised)} raised
                  </div>

                  <div className="w-24 bg-gray-200 rounded-full h-2 mb-3">
                    <div
                      className="bg-pitchforge-gold h-2 rounded-full transition-all"
                      style={{ width: `${Math.min(fundingProgress, 100)}%` }}
                    ></div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleVote}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs transition-all ${
                        hasVoted
                          ? "bg-pitchforge-mint text-pitchforge-text"
                          : "bg-pitchforge-mint/20 text-pitchforge-text hover:bg-pitchforge-mint/30"
                      }`}
                    >
                      <BiTrendingUp className="w-3 h-3" />
                      {votes}
                    </button>

                    {/* <button
                      onClick={handleBookmark}
                      className={`p-2 rounded-lg transition-all ${
                        isBookmarked
                          ? "bg-pitchforge-gold text-pitchforge-bg"
                          : "bg-pitchforge-gold/20 text-pitchforge-gold hover:bg-pitchforge-gold/30"
                      }`}
                    >
                      <BiBookmark className="w-3 h-3" />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid view
  return (
    <Link href={`/pitch/${pitch.id}`}>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-pitchforge-gold/10 group">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-pitchforge-gold/20 to-pitchforge-mint/20">
          {pitch.images.length > 0 ? (
            <Image
              src={pitch.images[0]}
              alt={pitch.companyName}
              className="w-full h-full object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <Image
                src={pitch.logo}
                alt={`${pitch.companyName} logo`}
                width={80}
                height={80}
                className="w-20 h-20 rounded-xl"
              />
            </div>
          )}

          {/* Bookmark button */}
          <button
            onClick={handleBookmark}
            className={`absolute top-3 right-3 p-2 rounded-lg backdrop-blur-sm transition-all ${
              isBookmarked
                ? "bg-pitchforge-gold text-pitchforge-bg"
                : "bg-white/80 text-pitchforge-text hover:bg-pitchforge-gold hover:text-pitchforge-bg"
            }`}
          >
            <BiBookmark className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-pitchforge-text truncate mb-1">
                {pitch.companyName}
              </h3>
              <p className="text-pitchforge-text/80 text-sm font-medium line-clamp-1">
                {pitch.tagline}
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-pitchforge-mint/20 text-pitchforge-text text-xs rounded-full">
              {pitch.industry}
            </span>
            <span className="px-2 py-1 bg-pitchforge-gold/20 text-pitchforge-text text-xs rounded-full">
              {pitch.stage}
            </span>
          </div>

          {/* Description */}
          <p className="text-pitchforge-text/60 text-sm line-clamp-3 mb-4">
            {pitch.description}
          </p>

          {/* Stats */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-pitchforge-text/60">Funding Goal</span>
              <span className="font-semibold text-pitchforge-text">
                {formatFunding(pitch.fundingGoal)}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-pitchforge-text/60">Raised</span>
              <span className="font-semibold text-pitchforge-text">
                {formatFunding(pitch.fundingRaised)}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-pitchforge-gold h-2 rounded-full transition-all"
                style={{ width: `${Math.min(fundingProgress, 100)}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-pitchforge-text/60">
                <BiGroup className="w-4 h-4" />
                {pitch.teamSize} team
              </div>
            </div>
          </div>

          {/* Founders */}
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {pitch.founders.slice(0, 3).map((founder, index) => (
                <Image
                  key={index}
                  src={founder.avatar}
                  alt={founder.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  title={`${founder.name} - ${founder.role}`}
                />
              ))}
              {pitch.founders.length > 3 && (
                <div className="w-8 h-8 rounded-full bg-pitchforge-gold/20 border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-medium text-pitchforge-text">
                    +{pitch.founders.length - 3}
                  </span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleVote}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs transition-all ${
                  hasVoted
                    ? "bg-pitchforge-mint text-pitchforge-text"
                    : "bg-pitchforge-mint/20 text-pitchforge-text hover:bg-pitchforge-mint/30"
                }`}
              >
                <BiTrendingUp className="w-3 h-3" />
                {votes}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PitchCard;
