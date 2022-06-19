// IMPORT CONFIGURESTORE
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

// BUAT STORE: STATE GLOBAL
// MENYIMPAN BERBAGAI SLICE REDUCER

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

// EXPORT DEFAULT STORE
export default store;
