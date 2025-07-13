import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    addCacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addCacheResults } = cacheSlice.actions;
export default cacheSlice.reducer;
