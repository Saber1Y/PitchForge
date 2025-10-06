import React from "react";
import Form from "next/form";
import { BiSearch } from "react-icons/bi";
import SearchReset from "../SearchReset/SearchReset";

const SearchForm = ({ query }: { query: string }) => {
  // const [searchName, setSearchName] = useState<string>("");

  return (
    <div className="max-w-3xl mx-auto">
      <Form
        action={"/browse"}
        scroll={false}
        className="search-form"
        formMethod="get"
      >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <BiSearch className="h-5 w-5 text-pitchforge-text/50" />
          </div>
          <input
            // type="text"
            name="query"
            // value={query}
            defaultValue={query}
            //   onChange={(e) => onSearchChange(e.target.value)}
            // onChange={(e) => setSearchName(e.target.value)}
            placeholder="Search startups by name, industry, or tags..."
            className="w-full pl-12 pr-16 py-4 bg-white/90 backdrop-blur-sm border-2 border-pitchforge-gold/20 rounded-2xl text-pitchforge-text placeholder-pitchforge-text/50 focus:outline-none focus:border-pitchforge-gold focus:ring-2 focus:ring-pitchforge-gold/20 transition-all"
          />
          {query && <SearchReset />}
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-auto"
          >
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
