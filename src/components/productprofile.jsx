import React,{useState, useEffect} from "react";
import NavBar from "./navbar";
import { useLocation } from "react-router-dom";


const ProductProfile = () => {
    const [index, setActiveStep]=useState(0)
    const location = useLocation()
    const product = location.state
    console.log(product);

    const images = [...product.images, product.thumbnail]

    
    const goToNextImg=()=>{
        if(index < images.length - 1){
            setActiveStep((prevActiveStep)=>
                prevActiveStep+1
                )
        }else{
            setActiveStep(0)
        }
        console.log(index)
        
    }
    return (
        <>
            <NavBar />
            <div className="productprofilecard">
            <div className="card"  style={{width:'18rem'}}>
                <div>
                    <img src={images[index]} className="card-img-top" alt={images[index]}/>
                    <button onClick={goToNextImg}>nextimg</button>
                    </div>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5>price:{product.price}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                </div>
            </div>

        </>
    )
}
export default ProductProfile