import React, { useEffect, useState } from 'react';
import useProducts from '../../Hook/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const [products, setProducts] = useProducts()

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

    const handleAddToCart = (selectedProduct) => {
        // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart); 
        addToDb(selectedProduct.id);    
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