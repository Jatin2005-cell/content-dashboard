import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",

  initialState: {
    movies: [],
    loading: false,
    error: null,
  },

  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },

    setMovieLoading: (state, action) => {
      state.loading = action.payload;
    },

    setMovieError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setMovies,
  setMovieLoading,
  setMovieError,
} = movieSlice.actions;

export default movieSlice.reducer;