import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../store/slices/cartSlice"

export default configureStore({
  reducer: {
    cart:cartReducer
  },
})