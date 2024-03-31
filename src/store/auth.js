import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  isAutnenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAutnenticated = true;
    },
    logout(state) {
      state.isAutnenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
