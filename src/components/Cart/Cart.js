import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h3 className='text-center pt-5'>Order summery</h3>
            <div className="ms-4">
                <p>Selected Items : {cart.length} </p>
                <p>Total Price : $ </p>
                <p>Total Shipping Charge : $ </p>
                <p>Tax : $ </p>
                <h3>Grand Total: $ </h3>
            </div>
        </div>
    );
};

export default Cart;