import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let total = 0;
    let totalShippingCost = 0;
    for(const product of cart){
        total = total + product.price;
        totalShippingCost = totalShippingCost + product.shipping;
       
    }
    const tax = (total*5)/100;
    let grandTotal = total + totalShippingCost + tax;

    return (
        <div className='cart'>
            <h3 className='text-center pt-5'>Order summery</h3>
            <div className="ms-4">
                <p>Selected Items : {cart.length} </p>
                <p>Total Price : ${total} </p>
                <p>Total Shipping Charge : ${totalShippingCost} </p>
                <p>Tax : ${tax} </p>
                <h5>Grand Total: ${grandTotal} </h5>
            </div>
        </div>
    );
};

export default Cart;