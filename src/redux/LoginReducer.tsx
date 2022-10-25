import { configureStore, createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: (state, action) => {
      return null;
    },
  },
});
export const { logout, login } = slice.actions;
export default slice.reducer;
