import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cacheSlice from "./cacheSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    cache: cacheSlice,
  },
});

export default store;
