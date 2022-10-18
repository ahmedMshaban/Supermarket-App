import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkTheme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      if (state.isDarkTheme) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
  },
});

const { switchTheme } = themeSlice.actions;

export { switchTheme };

export default themeSlice.reducer;
