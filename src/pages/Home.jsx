import Header from "../components/Header";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../redux/Slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const home = () => {
 

  const dispatch = useDispatch();

   useEffect(() => {
    dispatch(fetchAllProducts());
  }, []); 


  const { allProducts, loading, error } = useSelector((state) => state.productReducer);

  console.log(allProducts, "val");

  return (
    <>
      <Header insideHome={true} />
      {loading ? (
        <div className="flex justify-center items-center">
          {" "}
          <img
            src="https://loading.io/assets/mod/spinner/spinner/lg.gif"
            alt=""
          />
        </div>
      ) : (

        <div className="grid grid-cols-4 gap-3 mt-5 px-2">

         {allProducts?.length>0?(
         <>
         { allProducts.map((eachProduct)=>(
          
          <div className="border rounded p-2 shadow text-center">
            <img
              width={"100%"}
              height={"200px"}
              src={eachProduct.thumbnail}
              alt=""
            />
            <h3 className="font-bold text-xl mb-3">{eachProduct.title}</h3>
            <Link style={{textDecoration:'none'}}  to={`/${eachProduct.id}/view`} className="bg-yellow-500 p-1 rounded border">
              {" "}
              View More...
            </Link>
          </div>
          ))} </>):(<div>No Product Found</div>)}
        </div>
      )}
    </>
  );
};

export default home;
