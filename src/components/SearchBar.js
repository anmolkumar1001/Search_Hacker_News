import React, { useState } from "react";
import axios from "axios";
import "../styles/SearchBar.css";

const SearchBar = ({ onPostClick }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (query) {
      const result = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setSearchResults(result.data.hits);
    }
  };

  return (
    <div className="search-container">
      <h2>Search for Hacker News</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a search term..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul className="search-results">
        {searchResults.map((item) => (
          <li key={item.objectID}>
            <a href={item.url} onClick={() => onPostClick(item.objectID)}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
