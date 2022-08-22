// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";
const inhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
/* const store = createStore(reducers, inhance(applyMiddleware(redux)));
 */
const store = configureStore({
  reducer: {
    counter: slice,
  },
});
export default store;
