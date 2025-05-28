import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { addToWishList } from "../redux/Slice/wishListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProducts } from "../redux/Slice/productSlice";
import { addTocartList } from "../redux/Slice/cartSlice";

const View = () => {

  const {id}=useParams();


const dispatch = useDispatch();

   useEffect(() => {
    dispatch(fetchSingleProducts(id));
  }, []); 
    const { singleProduct, viewLoading, viewError } = useSelector((state) => state.productReducer);


 const { wishListItems } = useSelector((state) => state.wishListReducer);
console.log(wishListItems, 'wishlistItems');
  //argument are not passed bz event aanu avde kittunne, we don't need event
  const addWishList = () => {
    let existngProduct = wishListItems.find(
      (eachItem) => eachItem.id == singleProduct.id
    );
    console.log(existngProduct,"existngProduct");
    if (existngProduct) {
      alert("The product is alredy in your wishlist");
    } else {
       dispatch(addToWishList(singleProduct));
       
      alert("sucessfully added to wishlist");
    }
  };
  return (
    <>
      <Header />
{viewLoading?(
   <div className="flex justify-center items-center">
          {" "}
          <img
            src="https://loading.io/assets/mod/spinner/spinner/lg.gif"
            alt=""
          />
        </div>
):(
      <div className="grid grid-cols-2 m-3">
        <div className="p-2 shadow text-center">
          <img
            src={singleProduct.thumbnail}
            alt=""
          />
          <div className="flex justify-between">
            <button
              onClick={addWishList}
              className="border rounded bg-blue-700 p-2 text-white"
            >
              {" "}
              Add to Wishlist
            </button>
            <button onClick={()=>dispatch(addTocartList(singleProduct))} className="border rounded bg-green-700 p-2 text-white">
              {" "}
              Add to Cart
            </button>
          </div>
        </div>
        <div className="ps-4">
          <h3 className="font-bold">PID : {singleProduct.id}</h3>
          <h1 className="font-bold text-5xl">{singleProduct.title}</h1>
          <h5 className="text-red-600 text-2xl font-bold">$ {singleProduct.price}</h5>
          <h6>
            <span className="font-bold">Brand :</span>{singleProduct.brand}
          </h6>
          <h6>
            <span className="font-bold">Category :</span>{singleProduct.category}
          </h6>
          <p className="text-xl">
            <span className="font-bold">Description :</span>{singleProduct.description}
          </p>
          <h4 className="mt-5 font-bold"> Client Reviews</h4>
          {singleProduct?.reviews?.map((eachReviews)=>(
          <div className="border rounded p-2 shadow">
            <h5>
              <span className="font-bold">{eachReviews.reviewerName} :{" "}</span> {" "}
           {eachReviews.comment}
            </h5>
            <h5>
              <span className="font-bold">Review : </span> {eachReviews.rating}{" "}
              <i className="fa-solid fa-star text-yellow-300"></i>
            </h5>
          </div>
          ))}
        </div>
      </div>
      )
}
    </>
  );
};

export default View;
