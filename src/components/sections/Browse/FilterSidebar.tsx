import React from "react";
import type { FilterState } from "@/types/FilterState";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onClearFilters: () => void;
  isVisible: boolean;
  className?: string;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  isVisible,
  className = "",
}) => {
  const industries = [
    "AI/ML",
    "FinTech",
    "HealthTech",
    "EdTech",
    "CleanTech",
    "FoodTech",
    "E-commerce",
    "SaaS",
    "Logistics",
    "Mobility",
  ];

  const stages = ["Pre-seed", "Seed", "Series A", "Series B", "Growth"];

  const locations = [
    "San Francisco, CA",
    "New York, NY",
    "Boston, MA",
    "Austin, TX",
    "Seattle, WA",
    "Los Angeles, CA",
    "Chicago, IL",
    "Miami, FL",
  ];

  const handleIndustryChange = (industry: string) => {
    const newIndustries: string[] = filters.industries.includes(industry)
      ? filters.industries.filter((i: string) => i !== industry)
      : [...filters.industries, industry];
    onFilterChange({ industries: newIndustries });
  };

  const handleStageChange = (stage: string) => {
    const newStages: string[] = filters.stages.includes(stage)
      ? filters.stages.filter((s: string) => s !== stage)
      : [...filters.stages, stage];
    onFilterChange({ stages: newStages });
  };

  const handleLocationChange = (location: string) => {
    const newLocations: string[] = filters.locations.includes(location)
      ? filters.locations.filter((l: string) => l !== location)
      : [...filters.locations, location];
    onFilterChange({ locations: newLocations });
  };

  if (!isVisible) return null;

  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 h-fit sticky top-8 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-pitchforge-text">Filters</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-pitchforge-gold hover:text-pitchforge-gold/80 transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        {/* Industries */}
        <div>
          <h4 className="text-sm font-semibold text-pitchforge-text mb-3 uppercase tracking-wider">
            Industry
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {industries.map((industry) => (
              <label
                key={industry}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.industries.includes(industry)}
                  onChange={() => handleIndustryChange(industry)}
                  className="w-4 h-4 text-pitchforge-gold border-pitchforge-gold/30 rounded focus:ring-pitchforge-gold/20"
                />
                <span className="text-sm text-pitchforge-text/70">
                  {industry}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Stages */}
        <div>
          <h4 className="text-sm font-semibold text-pitchforge-text mb-3 uppercase tracking-wider">
            Stage
          </h4>
          <div className="space-y-2">
            {stages.map((stage) => (
              <label
                key={stage}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.stages.includes(stage)}
                  onChange={() => handleStageChange(stage)}
                  className="w-4 h-4 text-pitchforge-gold border-pitchforge-gold/30 rounded focus:ring-pitchforge-gold/20"
                />
                <span className="text-sm text-pitchforge-text/70">{stage}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Funding Range */}
        <div>
          <h4 className="text-sm font-semibold text-pitchforge-text mb-3 uppercase tracking-wider">
            Funding Goal
          </h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="20000000"
                step="100000"
                value={filters.fundingRange[1]}
                onChange={(e) =>
                  onFilterChange({
                    fundingRange: [
                      filters.fundingRange[0],
                      parseInt(e.target.value),
                    ],
                  })
                }
                className="flex-1 h-2 bg-pitchforge-gold/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-xs text-pitchforge-text/60">
              <span>$0</span>
              <span>${(filters.fundingRange[1] / 1000000).toFixed(1)}M</span>
            </div>
          </div>
        </div>

        {/* Team Size */}
        <div>
          <h4 className="text-sm font-semibold text-pitchforge-text mb-3 uppercase tracking-wider">
            Team Size
          </h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="1"
                max="100"
                value={filters.teamSizeRange[1]}
                onChange={(e) =>
                  onFilterChange({
                    teamSizeRange: [
                      filters.teamSizeRange[0],
                      parseInt(e.target.value),
                    ],
                  })
                }
                className="flex-1 h-2 bg-pitchforge-gold/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-xs text-pitchforge-text/60">
              <span>1</span>
              <span>{filters.teamSizeRange[1]}+ people</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div>
          <h4 className="text-sm font-semibold text-pitchforge-text mb-3 uppercase tracking-wider">
            Minimum Rating
          </h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={filters.ratingRange[0]}
                onChange={(e) =>
                  onFilterChange({
                    ratingRange: [
                      parseFloat(e.target.value),
                      filters.ratingRange[1],
                    ],
                  })
                }
                className="flex-1 h-2 bg-pitchforge-gold/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-xs text-pitchforge-text/60">
              <span>0⭐</span>
              <span>{filters.ratingRange[0].toFixed(1)}⭐+</span>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h4 className="text-sm font-semibold text-pitchforge-text mb-3 uppercase tracking-wider">
            Location
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {locations.map((location) => (
              <label
                key={location}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.locations.includes(location)}
                  onChange={() => handleLocationChange(location)}
                  className="w-4 h-4 text-pitchforge-gold border-pitchforge-gold/30 rounded focus:ring-pitchforge-gold/20"
                />
                <span className="text-sm text-pitchforge-text/70">
                  {location}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
