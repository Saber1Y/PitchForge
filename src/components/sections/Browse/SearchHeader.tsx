import React from "react";
import { BiGrid, BiListUl } from "react-icons/bi";
import { HiAdjustments } from "react-icons/hi";
import { ViewMode, SortOption } from "@/app/(root)/browse/page";
import SearchForm from "@/components/Forms/SearchForm/SearchForm";

interface SearchHeaderProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
  resultsCount: number;
  searchParams: { [key: string]: string | string[] | undefined };
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  searchParams,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  showFilters,
  onToggleFilters,
  resultsCount,
}) => {
  const sortOptions = [
    { value: "trending" as SortOption, label: "Trending" },
    { value: "recent" as SortOption, label: "Most Recent" },
    { value: "votes" as SortOption, label: "Most Voted" },
    { value: "funding" as SortOption, label: "Highest Funding" },
  ];

  const queryValue = searchParams?.query;
  const query =
    typeof queryValue === "string"
      ? queryValue
      : Array.isArray(queryValue)
      ? queryValue.join(" ")
      : "";

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-pitchforge-text mb-4">
          Discover Amazing{" "}
          <span className="text-pitchforge-gold">Startups</span>
        </h1>
        <p className="text-lg text-pitchforge-text/70 max-w-2xl mx-auto">
          Explore innovative companies, vote on your favorites, and connect with
          the next generation of entrepreneurs.
        </p>
      </div>

      <SearchForm query={query} />

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/50 backdrop-blur-sm rounded-2xl p-4">
        {/* Results Count */}
        <div className="text-pitchforge-text/70">
          <span className="font-semibold text-pitchforge-text">
            {resultsCount}
          </span>{" "}
          startups found
        </div>

        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-pitchforge-text/70">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="bg-white border border-pitchforge-gold/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-pitchforge-gold"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-pitchforge-gold/10 rounded-lg p-1">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-2 rounded transition-all ${
                viewMode === "grid"
                  ? "bg-pitchforge-gold text-pitchforge-bg"
                  : "text-pitchforge-text/60 hover:text-pitchforge-text"
              }`}
            >
              <BiGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-2 rounded transition-all ${
                viewMode === "list"
                  ? "bg-pitchforge-gold text-pitchforge-bg"
                  : "text-pitchforge-text/60 hover:text-pitchforge-text"
              }`}
            >
              <BiListUl className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={onToggleFilters}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              showFilters
                ? "bg-pitchforge-gold text-pitchforge-bg"
                : "bg-pitchforge-gold/10 text-pitchforge-text hover:bg-pitchforge-gold/20"
            }`}
          >
            <HiAdjustments className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
