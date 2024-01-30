import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  controller: [
    {
      darkMode: false,
      lawyerName: "Vijeet Shah",
      jobTitle: "Software Engineer",
      imageUrl:
        "https://images.unsplash.com/photo-1706402500309-597ba87c8f3a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      messages: [""],
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
      const { lawyerName, jobTitle, imageUrl } = action.payload;
      state.controller[0].lawyerName = lawyerName;
      state.controller[0].jobTitle = jobTitle;
      state.controller[0].imageUrl = imageUrl;
    },
    setMessage: (state, action) => {
      const { message } = action.payload;
      state.controller[0].messages.push(message);
    },
    removeMessage: (state) => {
      state.controller[0].messages = [];
    },
  },
});

export const { turnDarkMode, setLawyerDetails, setMessage, removeMessage } =
  controllerSlice.actions;

export default controllerSlice.reducer;
