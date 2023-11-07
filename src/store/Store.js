import { configureStore } from "@reduxjs/toolkit";
import slice from "./CreateSlice";
const store = configureStore({
  reducer: {
    products: slice,
  },
});

export default store;
