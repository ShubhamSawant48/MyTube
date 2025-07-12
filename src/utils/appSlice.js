import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showMenu: true,
  },
  reducers: {
    toggleShowMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { toggleShowMenu } = appSlice.actions;
export default appSlice.reducer;
