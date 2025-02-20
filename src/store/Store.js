import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './Slice'
export const store = configureStore(
  {
    reducer: {
      cart: cartSliceReducer
    }
  }
)