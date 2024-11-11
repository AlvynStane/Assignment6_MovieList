import React from 'react';
import Search from './Search';
import '../App.css';

const Header = ({ title, setQuery }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Search setQuery={setQuery} />
    </header>
  );
};

export default Header;