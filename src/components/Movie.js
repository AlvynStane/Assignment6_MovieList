import React from 'react';
import '../App.css';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.Poster} alt={movie.Title} />
      <h4>{movie.Title}</h4>
    </div>
  );
};

export default Movie;