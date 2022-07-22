import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    isLoading: false
  },
  reducers: {
    getCatFetch: (state) => {
      state.isLoading = true;
    },
    getCatSuccess: (state, action) => {
      state.isLoading = false;
      state.cats = action.payload;
    },
    getCatFailure: (state) => {
      state.isLoading = false;
    }
  }
});

export const { getCatFailure, getCatSuccess, getCatFetch } = catSlice.actions;
export default catSlice.reducer;
