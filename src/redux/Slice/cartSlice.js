import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addTocartList: (state, argFromComp) => {
      console.log("addtocartList");
      const existingproduct = state.cartItems.find(
        (eachItem) => eachItem.id == argFromComp.payload.id
      );
      if (existingproduct) {
        //   existing product updation
        existingproduct.quantity++;
        existingproduct.totalPrice =
          existingproduct.quantity * existingproduct.price;
        //finding the remaing product excluding the existing product
        const remainigProduct = state.cartItems.filter(
          (eachitem) => eachitem.id != existingproduct.id
        );
        state.cartItems = [...remainigProduct, existingproduct];
      } else {
        // we should spread the array to  all the collective items in the cart
        state.cartItems.push({
          ...argFromComp.payload,
          quantity: 1,
          totalPrice: argFromComp.payload.price,
        });
      }
    },
 decrementCartItem:(state, idFromComp)=>{
  const existingproduct = state.cartItems.find(
        (eachItem) => eachItem.id == idFromComp.payload
      );
      
       if (existingproduct) {
       existingproduct.quantity--;
       if(existingproduct.quantity<=1){
        const remainigProduct = state.cartItems.filter(
          (eachitem) => eachitem.id != existingproduct.id
        );
         state.cartItems = [...remainigProduct];
       }else{
 existingproduct.totalPrice =
          existingproduct.quantity * existingproduct.price;
       const remainigProduct = state.cartItems.filter(
          (eachitem) => eachitem.id != existingproduct.id
        );
        state.cartItems = [...remainigProduct, existingproduct];
      }
      }
 },
 removeCartItem:(state,idFromComp)=>{
  state.cartItems=state.cartItems.filter((eachItem)=>eachItem.id!=idFromComp.payload)
 }, 
 emptyCart:(state)=>{
  state.cartItems= []
 }

  },
});
export const {addTocartList,decrementCartItem,removeCartItem,emptyCart} =cartSlice.actions
export default cartSlice.reducer;
