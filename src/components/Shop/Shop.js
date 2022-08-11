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

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart); 
    }

    return (
        <div className= 'px-4 shop-container'>
            <div className="product-container pt-5 ">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} ></Product>)
                }
            </div>
            <div className="order-summery" fixed="top">
                <h3 className='text-center pt-5'>Order summery</h3>
                <div className="ms-4">
                    <p>Selected Items : {cart.length} </p>
                    <p>Total Price : $ </p>
                    <p>Total Shipping Charge : $ </p>
                    <p>Tax : $ </p>
                    <h3>Grand Total: $ </h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;