// IMPORT CREATESLICE
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

// BUAT SLICE: UNTUK GENERATE ACTION DAN REDUCER
// MENERIMA PARAMETER OBJECT: NAME, INITIALSTATE, REDUCERS
const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      // ADD MOVIE TO MOVIES
      state.movies.push(action.payload);
    },
    deleteMovie() {},
    // MEMBUAT REDUCED UPDATEMOVIES: UNTUK UPDATE MOVIES
    updateMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

// GENERATE ACTION DAN REDUCER
const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovie, updateMovies } = moviesSlice.actions;

// EXPORT ACTION DAN REDUCER
export default moviesReducer;
export { addMovie, deleteMovie, updateMovies };
