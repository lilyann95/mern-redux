import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loginFn from "./Login.js";
import registerFn from "./Register.js";

export const loginUser = createAsyncThunk("/login", loginFn);

export const registerUser = createAsyncThunk("/register", registerFn);

const saveAuthData = (state, action) => {
  state.loading = false;
  state.user = action.payload.user;
  state.token = action.payload.accessToken;
  localStorage.setItem("token", action.payload.accessToken);
  localStorage.setItem("user", JSON.stringify(action.payload.user));
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    error: null,
    loading: false,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, saveAuthData)
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(registerUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, saveAuthData)
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload || "Register failed";
        state.loading = false;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
