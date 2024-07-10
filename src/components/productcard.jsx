import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({product}) => {
    
    return (
        <>
            <div className="card"  style={{width:'18rem'}}>
                <img src={product.images[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5>price:{product.price}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link to='/productprofile' state={product} class="btn btn-secondary">view more</Link>
                </div>
            </div>
        </>
    )
}
export default ProductCard
