import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  jdList: null,
  totalCount: null,
  filterData: null,
};

export const fetchData = createAsyncThunk(
  "sampleJd/fetchData",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://asia-south1-bh-dev-apps.cloudfunctions.net/wa-automation/json?page=1&limit=9"
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
      .addCase(fetchData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;

        state.jdList = action.payload.jdList;
        state.filterData = action.payload.jdList;
        state.totalCount = action.payload.totalCount;
      });
  },
});

export default jobDetails.reducer;
