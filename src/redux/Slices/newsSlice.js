import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",

  initialState: {
    articles: [],
    loading: false,
    error: null,
  },

  reducers: {
    setNews: (state, action) => {
      state.articles = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setNews,
  setLoading,
  setError,
} = newsSlice.actions;

export default newsSlice.reducer;