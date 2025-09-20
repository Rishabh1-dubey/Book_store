import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) existingItem.quantity++;
      else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    clearCart: (state) => {
      state.items = [];
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    IncrementItem: (state, action) => {
      const IncrementItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (IncrementItem) {
        IncrementItem.quantity++;
      }
    },
    DecrementItem: (state, action) => {
      const DecrementItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (DecrementItem && DecrementItem.quantity > 1) {
        DecrementItem.quantity--;
      }
    },
  },
});

export const { addItem, clearCart, removeItem, IncrementItem, DecrementItem } =
  cartSlice.actions;
export default cartSlice.reducer;
