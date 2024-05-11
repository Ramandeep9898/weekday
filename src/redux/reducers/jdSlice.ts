import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  jdList: null,
  nextUrl: "",
};

export const fetchData = createAsyncThunk(
  "sampleJd/fetchData",
  async (nextUrl, thunkAPI) => {
    console.log("HERE", nextUrl);

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
      .addCase(fetchData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;

        state.jdList = action.payload.result;
        console.log("kk", state.jdList);
        state.nextUrl = action.payload.next;
      });
  },
});

export default jobDetails.reducer;
