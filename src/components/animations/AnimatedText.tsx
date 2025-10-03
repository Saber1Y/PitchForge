"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

interface AnimatedTextProps {
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ className = "" }) => {
  return (
    <TypeAnimation
      sequence={["Entrepreneurs", 2000, "Founders", 2000, "Investors", 2000]}
      wrapper="span"
      speed={50}
      className={`text-pitchforge-mint ${className}`}
      repeat={Infinity}
      cursor={false}
    />
  );
};

export default AnimatedText;
