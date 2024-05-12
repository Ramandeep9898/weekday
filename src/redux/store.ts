import { configureStore } from "@reduxjs/toolkit";
import jobDetailsSlice from "./reducers/jdSlice";
import { JobDetailsState } from "./reducers/jdSlice";

export interface RootState {
  jobDetails: JobDetailsState;
}

export const store = configureStore({
  reducer: {
    jobDetails: jobDetailsSlice,
  },
});
