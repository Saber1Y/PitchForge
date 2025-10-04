import React from "react";
import Form from "next/form";
import { BiSearch } from "react-icons/bi";
import { BiX } from "react-icons/bi";

const SearchForm = () => {
  // const [searchName, setSearchName] = useState<string>("");

  const query = "EduVerse";
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <div className="max-w-3xl mx-auto">
      <Form action={"/"} scroll={false} classID="search-form">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <BiSearch className="h-5 w-5 text-pitchforge-text/50" />
          </div>
          <input
            // type="text"
            name="query"
            // value={searchName}
            defaultValue={query}
            //   onChange={(e) => onSearchChange(e.target.value)}
            // onChange={(e) => setSearchName(e.target.value)}
            placeholder="Search startups by name, industry, or tags..."
            className="w-full pl-12 pr-16 py-4 bg-white/90 backdrop-blur-sm border-2 border-pitchforge-gold/20 rounded-2xl text-pitchforge-text placeholder-pitchforge-text/50 focus:outline-none focus:border-pitchforge-gold focus:ring-2 focus:ring-pitchforge-gold/20 transition-all"
          />
          {query && (
            <button
              type="reset"
              className="absolute inset-y-0 right-12 flex items-center px-2"
              onClick={reset}
              aria-label="Clear search"
            >
              <BiX className="h-5 w-5 text-pitchforge-text/50 hover:text-pitchforge-text" />
            </button>
          )}
          <button className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-auto">
            <div className="bg-pitchforge-gold hover:bg-pitchforge-gold/80 text-pitchforge-bg p-3 rounded-xl transition-colors transform hover:scale-105">
              <BiSearch className="h-5 w-5" />
            </div>
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
