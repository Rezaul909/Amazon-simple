import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(( ) => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart= getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity= storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
                console.log(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart); 
        addToDb(product.id);    
    }

    return (
        <div className= 'px-4 shop-container'>
            <div className="product-container pt-5 ">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} ></Product>)
                }
            </div>
            <div className="order-summery" fixed="top">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;