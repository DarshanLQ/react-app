import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";

export const store = configureStore({
  reducer: combineReducers({
    auth: authSlice,
  }),

  devTools: true,
});
