import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {searchProduct} from '../redux/Slice/productSlice'

const Header = ({insideHome}) => {
 const dispatch = useDispatch();
   const { wishListItems } = useSelector((state) => state.wishListReducer);
const {cartItems}=useSelector((state)=>state.cartReducer)
  return (
    <nav className="bg-blue-900 flex sticky top-0 w-full p-2">
      <Link style={{textDecoration:'none'}}  className="text-white text-2xl font-bold" to={"/"}>
        <i className="fa-solid fa-bag-shopping"></i> Daily Cart
      </Link>
      <ul className="text-right flex-1">
        {insideHome?<li className="inline-block mx-5">
          <input
          onChange={(e)=>dispatch(searchProduct(e.target.value))}
            type="text"
            className="border rounded-2xl bg-white p-1"
            placeholder="Search products here!!"
          />
        </li>:''}
        
        <li className="inline-block mx-5">
          {" "}
          <Link style={{textDecoration:'none'}} className="text-white" to={"/wishList"}>
            <i className="fa-solid fa-clipboard-list text-red-700"></i> WishList{" "}
            <span className="bg-black p-1 rounded-full">{wishListItems? wishListItems?.length:0}</span>
          </Link>{" "}
        </li>
        <li className="inline-block mx-5">
          {" "}
          <Link style={{textDecoration:'none'}}  className="text-white" to={"/cart"}>
            <i className="fa-solid fa-cart-plus text-green-700"></i> Cart{" "}
            <span className="bg-black p-1 rounded-full">{cartItems? cartItems?.length:0}</span>
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
