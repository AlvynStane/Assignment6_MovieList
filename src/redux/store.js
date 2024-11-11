import { createStore } from 'redux';

const initialState = {
  movies: [],
  query: '',
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

const store = createStore(movieReducer);

export default store;