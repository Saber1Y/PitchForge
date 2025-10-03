import React from "react";

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className = "" }) => {
  return <div className={`loader ${className}`}></div>;
};

export default Loader;
