"use client";

import React, { useState, useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import FilterSidebar from "@/components/sections/Browse/FilterSidebar";
import PitchCard from "@/components/sections/Browse/PitchCard";
import SearchHeader from "@/components/sections/Browse/SearchHeader";
import Loader from "@/components/ui/Loader";
import { mockPitches } from "@/data/mockPitches";
// import { client } from "@/sanity/lib/client";
// import { STARTUPS_QUERY } from "@/lib/queries";
import { post } from "@/data/QueriedData";

export type ViewMode = "grid" | "list";
export type SortOption = "trending" | "recent" | "votes" | "funding";

export interface PitchData {
  id: string;
  _id?: string;
  companyName: string;
  tagline: string;
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
  tags: string[];
  isBookmarked: boolean;
  createdAt: string;
}

export interface FilterState {
  search: string;
  industries: string[];
  stages: string[];
  fundingRange: [number, number];
  locations: string[];
  teamSizeRange: [number, number];
  ratingRange: [number, number];
}

const BrowsePitchesPage = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("trending");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const pitchesPerPage = 4;

  const [filters, setFilters] = useState<FilterState>({
    search: "",
    industries: [],
    stages: [],
    fundingRange: [0, 10000000],
    locations: [],
    teamSizeRange: [1, 100],
    ratingRange: [0, 5],
  });

  //fetch query from sanity

  // const post = await client.fetch(STARTUPS_QUERY);
  // console.log(post);

  {
    console.log(post);
  }

  // Filter and sort all pitches
  const allFilteredPitches = useMemo(() => {
    const filtered = post.filter((pitch: PitchData) => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch =
          pitch.companyName.toLowerCase().includes(searchTerm) ||
          pitch.tagline.toLowerCase().includes(searchTerm) ||
          pitch.description.toLowerCase().includes(searchTerm) ||
          pitch.tags.some((tag: string) =>
            tag.toLowerCase().includes(searchTerm)
          );
        if (!matchesSearch) return false;
      }

      // Industry filter
      if (
        filters.industries.length > 0 &&
        !filters.industries.includes(pitch.industry)
      ) {
        return false;
      }

      // Stage filter
      if (filters.stages.length > 0 && !filters.stages.includes(pitch.stage)) {
        return false;
      }

      // Funding range filter
      if (
        pitch.fundingGoal < filters.fundingRange[0] ||
        pitch.fundingGoal > filters.fundingRange[1]
      ) {
        return false;
      }

      // Location filter
      if (
        filters.locations.length > 0 &&
        !filters.locations.includes(pitch.location)
      ) {
        return false;
      }

      // Team size filter
      if (
        pitch.teamSize < filters.teamSizeRange[0] ||
        pitch.teamSize > filters.teamSizeRange[1]
      ) {
        return false;
      }

      return true;
    });

    // Apply sorting
    switch (sortBy) {
      case "trending":
        filtered.sort((a: PitchData, b: PitchData) => b.votes - a.votes);
        break;
      case "recent":
        filtered.sort(
          (a: PitchData, b: PitchData) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "votes":
        filtered.sort((a: PitchData, b: PitchData) => b.votes - a.votes);
        break;
      case "funding":
        filtered.sort(
          (a: PitchData, b: PitchData) => b.fundingGoal - a.fundingGoal
        );
        break;
      default:
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  // Get pitches to display (paginated)
  const displayedPitches = useMemo(() => {
    return allFilteredPitches.slice(0, currentPage * pitchesPerPage);
  }, [allFilteredPitches, currentPage, pitchesPerPage]);

  // Check if there are more pitches to load
  const hasMorePitches = displayedPitches.length < allFilteredPitches.length;

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      industries: [],
      stages: [],
      fundingRange: [0, 10000000],
      locations: [],
      teamSizeRange: [1, 100],
      ratingRange: [0, 5],
    });
    setCurrentPage(1); // Reset to first page when filters are cleared
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    // Simulate loading delay (optional)
    await new Promise((resolve) => setTimeout(resolve, 500));
    setCurrentPage((prev) => prev + 1);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pitchforge-bg via-pitchforge-bg to-pitchforge-gold/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <SearchHeader
          searchValue={filters.search}
          onSearchChange={(search: string) => handleFilterChange({ search })}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          showFilters={showFilters}
          onToggleFilters={() => setShowFilters(!showFilters)}
          resultsCount={allFilteredPitches.length}
        />

        <div className="flex gap-8 mt-8">
          {/* Sidebar Filters */}
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
            isVisible={showFilters}
            className="hidden lg:block lg:w-80"
          />

          {/* Mobile Filter Overlay */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black/50">
              <div className="bg-white h-full w-80 p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-pitchforge-text">
                    Filters
                  </h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    ✕
                  </button>
                </div>
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={clearFilters}
                  isVisible={true}
                  className="w-full"
                />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 space-y-4">
            {displayedPitches.length === 0 ? (
              // Empty State
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-pitchforge-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BiSearch className="w-12 h-12 text-pitchforge-gold/50" />
                </div>
                <h3 className="text-xl font-semibold text-pitchforge-text mb-2">
                  No pitches found
                </h3>
                <p className="text-pitchforge-text/60 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-pitchforge-gold hover:bg-pitchforge-gold/80 text-pitchforge-bg font-semibold rounded-xl transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              // Pitch Grid/List
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4 flex flex-col"
                }
              >
                {displayedPitches.map((pitch: PitchData) => (
                  <PitchCard
                    key={pitch.id || pitch._id}
                    pitch={pitch}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}

            {/* Load More Button */}
            {hasMorePitches && (
              <div className="flex justify-center mt-12">
                <button
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-pitchforge-mint hover:bg-pitchforge-mint/80 text-pitchforge-text font-semibold rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  onClick={handleLoadMore}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Loader className="scale-[0.35]" />
                      </div>
                      <span>Loading...</span>
                    </>
                  ) : (
                    "Load More Pitches"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePitchesPage;
