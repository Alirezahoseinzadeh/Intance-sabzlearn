import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addToShop: (state, action) => {
      const { id } = action.payload;
      const Result = state.every((pro) => {
        return pro.id !== id;
      });
      if (Result) {
        state.splice(0, 1, action.payload);
      }
    },
    addToBagShop: (state, action) => {
      const { id } = action.payload;
      const Result = state.every((pro) => {
        return pro.id !== id;
      });
      if (Result) {
        state.push(action.payload);
      }
    },
  },
});

export const { addToShop, addToBagShop } = slice.actions;
export default slice.reducer;
