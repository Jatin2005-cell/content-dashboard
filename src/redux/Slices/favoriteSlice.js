import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    addFavorite: (state, action) => {
      const exists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);

        localStorage.setItem(
          "favorites",
          JSON.stringify(state.items)
        );
      }
    },
    clearFavorites: (state) => {
  state.items = [];
  localStorage.setItem(
    "favorites",
    JSON.stringify([])
  );
},

    removeFavorite: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(state.items)
      );
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  clearFavorites,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;