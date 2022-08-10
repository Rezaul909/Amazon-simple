import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(( ) => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (product) => {
        console.log(product);
    }

    return (
        <div className= 'px-4 shop-container'>
            <div className="product-container pt-5 ">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} ></Product>)
                }
            </div>
            <div className="order-summery">
                <h3 className='text-center pt-5'>Order summery</h3>
            </div>
        </div>
    );
};

export default Shop;