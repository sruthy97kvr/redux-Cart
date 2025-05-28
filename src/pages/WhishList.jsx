import React from 'react'
import Header from '../components/Header'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromWishList } from '../redux/Slice/wishListSlice'
import {addTocartList} from "../redux/Slice/cartSlice"

const WhishList = () => {

 const { wishListItems } = useSelector((state) => state.wishListReducer);
 console.log(wishListItems, 'wishlistItems from wishlistpage');
const dispatch=useDispatch();
  const addItemToCArt=(product)=>{
dispatch(addTocartList(product))
dispatch(removeFromWishList(product.id))
  }
  return (
   <>
   <Header></Header>
   {wishListItems?.length>0?(
   <div>
    <div className="mt-4 mx-5" >
    <h1 className='font-bold text-red-700 text-4xl'>My WishList</h1>
    <div className="grid grid-cols-4 gap-3">
      {wishListItems?.map((eachItem)=>(
      <div className="border rounded p-2 shadow text-center">
          <img
            width={"100%"}
            height={"200px"}
            src={eachItem.thumbnail}
            alt=""
          />
          <h3 className="font-bold text-xl mb-3">{eachItem.title}</h3>
          <div className="flex justify-around">
            <button onClick={()=>dispatch(removeFromWishList(eachItem.id))} className='btn'>
              {" "}
              <i class="fa-solid fa-heart-circle-plus text-red-600 text-xl"></i>
              </button>
              <button onClick={()=>addItemToCArt(eachItem)} className='btn'>
              {" "}
<i class="fa-solid fa-cart-plus text-green-500 text-xl"></i> 
            </button>
              </div>
        </div>
        ))}
    </div>
   </div>
   </div>
   ):<div className='d-flex justify-between text-center'>
    <h4>No item found in wishList</h4>
    <img src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="" />
    </div>}
   </>
  )
}

export default WhishList