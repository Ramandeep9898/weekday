import { configureStore } from "@reduxjs/toolkit";
import jobDetailsSlice from "./reducers/jdSlice";

export const store = configureStore({
  reducer: {
    jobDetails: jobDetailsSlice,
  },
});
