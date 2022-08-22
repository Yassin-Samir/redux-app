// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state = { count: 0 }) => {
      state.count++;
    },
    decrement: (state = { count: 0 }) => {
      state.count--;
    },
  },
});
export { slice };
export const { increment, decrement } = slice.actions;
export default slice.reducer;
