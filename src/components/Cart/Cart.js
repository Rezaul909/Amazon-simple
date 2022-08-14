import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = ({cart}) => {

    let total = 0;
    let totalShippingCost = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        totalShippingCost = totalShippingCost + product.shipping;
    }
    const tax = (total*5)/100;
    let grandTotal = total + totalShippingCost + tax;

    return (
        <div className='cart'>
            <h3 className='text-center pt-5'>Order summery</h3>
            <div className="ms-4">
                <p>Selected Items : {quantity} </p>
                <p>Total Price : ${total} </p>
                <p>Total Shipping Charge : ${totalShippingCost} </p>
                <p>Tax : ${tax} </p>
                <h5>Grand Total: ${grandTotal} </h5>

                <button className="clear-btn mt-5 text-center border-0 p-3 ">
                    Clear Cart &#160; <FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon>
                </button>
                <button className="review-btn mt-3 text-center border-0 p-3 ">
                    Review Order &#160; <FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Cart;