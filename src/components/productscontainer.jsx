import React,{useState,useEffect,useRef} from "react";
import ProductCard from "./productcard";
import NavBar from "./navbar";
const ProductsContainer=()=>{
    const [products,setProducts]=useState([])
    const searchInputRef=useRef("")
    const [searchQuery,setSearchQuery]=useState("")
    
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
    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.value = "";
        }
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return(
        <>
        <NavBar/>
        <input
                type="text"
                placeholder="Search product..."
                onChange={(e) => setSearchQuery(e.target.value)}
                ref={searchInputRef}
            />
        <h1>BUY NOW!!!</h1>
        <div className="container">
           <div className="row justify-content-around">
           {
           
            
           filteredProducts.length>0?(
            filteredProducts.map((prod,index)=>{
                return(
                    <div className="col-md-4 mb-4" key={index}>
                      <ProductCard product={prod}/>
                    </div>
                   )
            })
        ):(
            <h1>No products found!!</h1>
        )
           }
           </div>
        </div>
        </>
    )
}
export default ProductsContainer