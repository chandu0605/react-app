import React from 'react';
import {useParams,Link} from 'react-router-dom';
import products from '../data';
// import images from '../images';
import './productDetails.css';

function ProductDetails() {
    const {id} = useParams();
    const product = products.find(p => p.id === parseInt(id));
    if(!product){
        return <h2>Product Not Found</h2> 
    };
    return (
        <div className='product-details-card'>
            <div className="image-container">
                 <img src={product.product_img} alt={product.product_name}  className="product_image_container"/>
            </div>
            <div className="product-details-container">
                <h2 className="product-detail-heading">{product.product_name}</h2>
                <p className="product-details-price"> Rs.{product.price}</p>
                <Link to="/products">Back to Products</Link>
            </div>
            
        </div>
    );
}
export default ProductDetails;