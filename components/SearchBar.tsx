"use client";
import { useState } from "react";
import { SearchManufacturer } from "./";
// import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
