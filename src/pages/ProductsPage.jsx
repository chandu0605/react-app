import React from 'react';
import products from '../data';
import ProductsCard from '../components/products/ProductsCard';
import "./productspage.css"

function ProductsPage(){
    return (
        <div className="products-page">
            <div className="products-header">
                <h1>Products</h1>
                <input type="text" placeholder="Search Products..." className="search-bar"/>
            </div>
            
            <div className="products-list">
                {products.map(({id,product_name,price,product_img}) =>(
                    <ProductsCard
                     key={id} 
                     id={id}
                     product_name={product_name}
                     price={price} 
                     product_img={product_img}/>
                ))}
            </div>
        </div>
    )
}

export default ProductsPage