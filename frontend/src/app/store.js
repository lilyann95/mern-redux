import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
