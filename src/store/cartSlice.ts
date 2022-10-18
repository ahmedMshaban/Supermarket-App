import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../Product.module";

interface cartState {
  cartItems: Product[];
}

const initialState = {
  cartItems: [],
} as cartState;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.cartItems.find(
        (product: Product) => product.id === action.payload.id
      );
      if (existingProduct) {
        // immer makes this immutable
        (existingProduct.quantity as number)++;
      } else {
        // immer makes this immutable
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const index = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );
      // immer makes this immutable
      state.cartItems.splice(index, 1);
    },
  },
});

const { addProduct, removeProduct } = cartSlice.actions;

const cartCountSelector = (state: cartState) => {
  return state.cartItems.reduce(
    (total, product) => total + (product.quantity as number),
    0
  );
};

const cartValueSelector = (state: cartState) => {
  return state.cartItems.reduce(
    (total, product) =>
      total + (product.price as number) * (product.quantity as number),
    0
  );
};

const getProductSelector = (state: cartState, id: number) => {
  return state.cartItems.find((product) => product.id === id);
};

export {
  addProduct,
  removeProduct,
  cartCountSelector,
  cartValueSelector,
  getProductSelector,
};

export default cartSlice.reducer;
