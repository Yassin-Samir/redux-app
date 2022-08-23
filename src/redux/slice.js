// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "user",
  initialState: {
    userData: { name: "" },
    loading: null,
    error: false,
  },
  reducers: {
    start(state) {
      state.loading = true;
    },
    success(state, action) {
      state.userData = action.payload;
      console.log(action);
      state.loading = false;
    },
    error(state) {
      state.loading = false;
      state.error = true;
    },
  },
});
export { slice };
export const { add, start, success, error } = slice.actions;
export default slice.reducer;
