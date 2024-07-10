import React,{useState,useEffect} from "react";
import ProductCard from "./productcard";
import NavBar from "./navbar";
const ProductsContainer=()=>{
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/products").then((response)=>{
            response.json().then((resp)=>{
                console.log(resp);
                setProducts(resp.products)
            })
        }).catch((err)=>{
            console.error(err)
        })
    },[])
    return(
        <>
        <NavBar/>
        <h1>BUY NOW!!!</h1>
        <div className="container">
           <div className="row justify-content-around">
           {
            products.map((prod,index)=>{
                return(
                    <div className="col-md-4 mb-4" key={index}>
                      <ProductCard product={prod}/>
                    </div>
                   )
            })
           }
           </div>
        </div>
        </>
    )
}
export default ProductsContainer