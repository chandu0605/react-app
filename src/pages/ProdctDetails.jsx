import React from 'react';
import {useParams,Link} from 'react-router-dom';
import products from '../data';
// import images from '../images';

function ProductDetails() {
    const {id} = useParams();
    const product = products.find(p => p.id === parseInt(id));
    if(!product){
        return <h2>Product Not Found</h2>
    };
    return (
        <div className='product-card'>
            <img src={`/assets/${product.product_img}`} alt={product.product_name} />
            <h2>{product.product_name}</h2>
            <p>{product.price}</p>
            <Link to="/products">Back to Products</Link>
        </div>
    );
}
export default ProductDetails;