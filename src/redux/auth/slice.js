import { createSlice } from "@reduxjs/toolkit";
import { logIn, register, logOut } from "./operations";
import { handlePeding } from "../contacts/slice";

const handleRejected = (state) => {
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggenIn: true,
    isLoading: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, handlePeding)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggenIn = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePeding)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggenIn = true;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePeding)
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggenIn = false;
      })
      .addCase(logOut.rejected, handleRejected),
});

export default authSlice.reducer;
