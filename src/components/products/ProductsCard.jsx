import React from 'react';
import { Link } from 'react-router-dom';
import './productsCard.css';

function ProductsCard({ id, product_name, price, product_img }) {
  return (
    <div className="product-card">
        <div className="product-info">
        <img src={product_img} alt={product_name} className="product_image" />
        <h2 className="product-title">{product_name}</h2>
        <p className="product-price">{price}</p>

        <Link to={`/products/${id}`}>
            <button className="buy-btn">View Details</button>
        </Link>
        </div>
    </div>
  );
}

export default ProductsCard;
