import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {addTocartList,decrementCartItem,removeCartItem,emptyCart} from '../redux/Slice/cartSlice';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
 


const cart = () => {

  const [totalAmount, setTotalAmount]= useState(0);
const {cartItems}=useSelector((state)=>state.cartReducer)
console.log(cartItems,"cartItems")
const dispatch=useDispatch();
const navigate=useNavigate();

useEffect(() => {
  if(cartItems?.length>0){
    setTotalAmount(cartItems.map((eachItem)=>(eachItem.totalPrice))?.reduce((a,b)=>a+b))
  }
}, [cartItems])

const Checkout=()=>{
  alert("Thanks For Shopping with us");
  dispatch(emptyCart())
  navigate('/')
}
  return (
    <>
      <Header />
      <div className="m-4">
        <h1 className="text-blue-700 text-4xl font-bold">Cart Summary</h1>
       {cartItems?.length>0?(
        <div className="grid grd-cols-3 gap-3 mt-3">
          <div className="col-span-2 border rounded shadow p-3">
          
            <table className="table w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                  {cartItems?.map((eachcartItem,index)=>(
                <tr>
                  <td>{index+1}</td>
                  <td>{eachcartItem.title}</td>
                  <td>
                    <img style={{height:'70px'}}
                    src={eachcartItem.thumbnail} alt="" />
                  </td>
                  <td>{" "}
                    <div className="flex">
                      <button onClick={()=>dispatch(decrementCartItem(eachcartItem.id))} className="font-bold m-2" >{" "}-{" "}</button>
                      <input type="text" className="border text-center" style={{width:'30px'}} value={eachcartItem.quantity} />
                      <button onClick={()=>dispatch(addTocartList(eachcartItem))} className="font-bold m-2">{" "}+{" "}</button>
                    </div>{" "}
                  </td>
                  <td>{eachcartItem.totalPrice}</td>
                  <td>
                    <button  onClick={()=>dispatch(removeCartItem(eachcartItem.id))}>
<i className="fa-solid fa-trash text-red-500"></i>
                    </button>
                  </td>
                </tr>
                  ))}
              </tbody>
            </table>
            <div className="float-right">
              <button onClick={()=>dispatch(emptyCart())} className="bg-red-600 me-3 border rounded text-white p-1 font-bold">Empty Cart</button>
              <Link style={{textDecoration:'none'}}  to={'/'} className="bg-blue-600 me-3 border rounded text-white p-1 font-bold">Shop More</Link>
            </div>


          </div>
          <div className="col-span-1 border rounded shadow p-3">  
            <h1 className="font-bold text-2xl mb-3">
            Total Amount : <span className="text-red-600"> {Math.ceil(totalAmount)}</span></h1>
          <hr />
          <button onClick={()=>Checkout()} className="bg-green-700 border p-2 mt-3 rounded text-white font-bold">
            Checkout
          </button>
          </div>
        </div>
        ):(
          <div className='d-flex justify-between text-center'>
    <h4>No item found in wishList</h4>
    <img src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="" />
    </div>
        )}
      </div>
    </>
  );
};

export default cart;
