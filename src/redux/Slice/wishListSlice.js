import { createSlice } from "@reduxjs/toolkit";

const wishListSlice=createSlice({
    name:'wishList',
    initialState:{
wishListItems:[]
    },
    reducers:{
        addToWishList:(state,argFromComp)=>{
            state.wishListItems.push(argFromComp.payload)
            console.log(state.wishListItems,"addtowishList");
        },
        removeFromWishList:(state,idfromComp)=>{
            state.wishListItems=state.wishListItems.filter((eachItem)=>eachItem.id!=idfromComp.payload)
        }
    }
})
export const {addToWishList,removeFromWishList}=wishListSlice.actions
export default  wishListSlice.reducer