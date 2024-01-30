import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  controller: [
    {
      darkMode: false,
      lawerName: "Vijeet Shah",
      jobTitle: "Software Engineer",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=880&h=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    turnDarkMode: (state, action) => {
      const { index, darkMode } = action.payload;
      state.controller[0].darkMode = darkMode;
    },
    setLawyerDetails: (state, action) => {
      const { lawerName, jobTitle, imageUrl } = action.payload;
      state.controller[0].lawerName = lawerName;
      state.controller[0].jobTitle = jobTitle;
      state.controller[0].imageUrl = imageUrl;
    },
  },
});

export const { turnDarkMode, setLawyerDetails } = controllerSlice.actions;

export default controllerSlice.reducer;
