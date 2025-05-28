import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../redux/Slice/productSlice'
// import wishListSlice from '../redux/Slice/wishListSlice'
import cartSlice from '../redux/Slice/cartSlice'
import wishListSlice from './Slice/wishListSlice'
const cartStore= configureStore({
reducer:{
    productReducer : productSlice,
    wishListReducer:wishListSlice,
    cartReducer:cartSlice
}
})

export default cartStore