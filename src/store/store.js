import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "../features/image/imageSlice";

export const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});
