import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "./Slices/newsSlice";
import movieReducer from "./Slices/movieSlice";
import favoriteReducer from "./Slices/favoriteSlice";
import settingsReducer from "./Slices/settingsSlice";
import searchReducer from "./slices/searchSlice";


export const store = configureStore({
  reducer: {
    news: newsReducer,
    movies: movieReducer,
    favorites: favoriteReducer,
    settings: settingsReducer,
     search: searchReducer,
    
  },
});