import controllerSlice from "@/slices/controllerSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: controllerSlice,
});

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
