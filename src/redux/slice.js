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
    success(state) {
      state.loading = false;
    },
    error(state) {
      state.loading = false;
      state.error = true;
    },
    sendData(state, action) {
      state.loading = false;
      state.userData = action.payload;
    },
  },
});
export { slice };
export const { start, success, error, sendData } = slice.actions;
export default slice.reducer;
