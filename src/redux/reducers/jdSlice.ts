import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface JobDetailsState {
  loading: boolean;
  jdList: any[] | null;
  nextUrl: string;
}

const initialState: JobDetailsState = {
  loading: true,
  jdList: null,
  nextUrl: "",
};

export const fetchData = createAsyncThunk(
  "sampleJd/fetchData",
  async (nextUrl: string, thunkAPI: { rejectWithValue: Function }) => {
    try {
      const response = await fetch(
        nextUrl
          ? nextUrl
          : "https://asia-south1-bh-dev-apps.cloudfunctions.net/wa-automation/json?page=1&limit=9"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const jobDetails = createSlice({
  name: "jobDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<{ result: any[]; next: string }>) => {
          state.loading = false;

          state.jdList = [...(state.jdList ?? []), ...action.payload.result];
          state.nextUrl = action.payload.next;
        }
      );
  },
});

export default jobDetails.reducer;
