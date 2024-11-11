import React, { useState } from 'react';
import '../App.css';

const Search = ({ setQuery }) => {
    const [input, setInput] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
      setQuery(input);
      setInput('');
    };
  
    return (
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
    );
  };

export default Search;