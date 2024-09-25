import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.splice(state.items.indexOf(action.payload, 1));
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
