// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./slice";
const store = configureStore(slice);
export default store;
