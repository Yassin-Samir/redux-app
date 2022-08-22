// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "counter",
  initialState: {
    name: "",
  },
  reducers: {
    add: (state = { name: "" }, action) => {
      state.name = action.payload.name;
    },
  },
});
export { slice };
export const { add } = slice.actions;
export default slice.reducer;
