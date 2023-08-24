import { CartSlice } from "./slice/CartSlice";
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
  reducer:{
    cart: CartSlice.reducer
  }
})