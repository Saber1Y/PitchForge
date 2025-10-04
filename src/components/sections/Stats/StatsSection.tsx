"use client";

import React from "react";
import { BiRocket } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { FiTrendingUp } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useSpring, animated } from "@react-spring/web";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  bgColor: string;
  iconColor: string;
}

interface StatsSectionProps {
  className?: string;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  {
    icon: BiRocket,
    value: "500+",
    label: "Active Pitches",
    bgColor: "bg-pitchforge-mint/20",
    iconColor: "text-pitchforge-mint",
  },
  {
    icon: HiUsers,
    value: "1.2K+",
    label: "Entrepreneurs",
    bgColor: "bg-pitchforge-gold/20",
    iconColor: "text-pitchforge-gold",
  },
  {
    icon: FiTrendingUp,
    value: "$3.5M+",
    label: "Funding Raised",
    bgColor: "bg-pitchforge-mint/20",
    iconColor: "text-pitchforge-mint",
  },
  {
    icon: AiFillStar,
    value: "85+",
    label: "Success Stories",
    bgColor: "bg-pitchforge-gold/20",
    iconColor: "text-pitchforge-gold",
  },
];

// Helper to extract number and suffix
function parseStatValue(value: string) {
  const match = value.match(/([\d,.]+)([\w+%]*)/);
  if (!match) return { number: 0, suffix: "" };
  return { number: parseFloat(match[1].replace(/,/g, "")), suffix: match[2] };
}

const AnimatedStatValue: React.FC<{ value: string }> = ({ value }) => {
  const { number, suffix } = parseStatValue(value);
  const spring = useSpring({
    from: { val: 0 },
    to: { val: number },
    config: { tension: 120, friction: 14 },
  });
  return (
    <animated.span>
      {spring.val.to((v: number) => `${Math.floor(v)}${suffix}`)}
    </animated.span>
  );
};

const StatsSection: React.FC<StatsSectionProps> = ({
  className = "mt-20",
  stats = defaultStats,
}) => {
  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ${className}`}
    >
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div key={index} className="text-center space-y-2">
            <div
              className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-xl`}
            >
              <IconComponent className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-pitchforge-text">
              <AnimatedStatValue value={stat.value} />
            </div>
            <div className="text-sm text-pitchforge-text/70">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsSection;
