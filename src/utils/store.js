import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    cache: cacheSlice,
    chat: chatSlice,
  },
});

export default store;
