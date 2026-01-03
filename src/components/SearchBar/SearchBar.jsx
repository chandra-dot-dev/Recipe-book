import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search delicious recipes..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
