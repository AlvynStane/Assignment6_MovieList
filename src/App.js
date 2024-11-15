import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Header from './components/Header';
import Movie from './components/Movie';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const query = useSelector((state) => state.query);

  const fetchMovies = async (searchQuery) => {
    if (!searchQuery) return;
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
      dispatch({ type: 'SET_MOVIES', payload: response.data.Search || [] });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    } else {
      fetchMovies('Avengers');
    }
  }, [query, dispatch]);

  return (
    <div>
      <Header title="Movies List App" setQuery={(query) => dispatch({ type: 'SET_QUERY', payload: query })} />
      <h2 className="h2-title">Show Your Favorite Movies</h2>
      <div className="movie-list">
      {movies.length > 0 ? (
          movies.map(movie => (
            <Movie key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <div className="no-results">No movies found.</div>
        )}
      </div>
    </div>
  );
};

export default App;