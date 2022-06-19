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
  },
});

// GENERATE ACTION DAN REDUCER
const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovie } = moviesSlice.actions;

// EXPORT ACTION DAN REDUCER
export default moviesReducer;
export { addMovie, deleteMovie };
