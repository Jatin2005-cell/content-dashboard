import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "technology",
  darkMode:
    JSON.parse(
      localStorage.getItem("darkMode")
    ) || false,
};

const settingsSlice = createSlice({
  name: "settings",

  initialState,

  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },

    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;

      localStorage.setItem(
        "darkMode",
        JSON.stringify(state.darkMode)
      );
    },
  },
});

export const {
  setCategory,
  toggleDarkMode,
} = settingsSlice.actions;

export default settingsSlice.reducer;