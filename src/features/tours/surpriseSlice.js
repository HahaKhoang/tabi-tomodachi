import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  duration: 1,
  price: 500,
  quantity: 1,
};

const surpriseSlice = createSlice({
  name: "surprise",
  initialState,
  reducers: {
    updateDuration(state, action) {
      state.duration = action.payload;
    },
    updatePrice(state, action) {
      state.price = action.payload;
    },
    updateQuantity(state, action) {
      state.quantity = action.payload;
    },
  },
});

export const { updateDuration, updatePrice, updateQuantity } =
  surpriseSlice.actions;

export default surpriseSlice.reducer;
