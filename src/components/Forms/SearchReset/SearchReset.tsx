"use client";
import React from "react";
import { BiX } from "react-icons/bi";

const SearchReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <div>
      <button
        type="reset"
        className="absolute inset-y-0 right-12 flex items-center px-2"
        aria-label="Clear search"
        onClick={reset}
      >
        <BiX className="h-5 w-5 text-pitchforge-text/50 hover:text-pitchforge-text" />
      </button>
    </div>
  );
};

export default SearchReset;
