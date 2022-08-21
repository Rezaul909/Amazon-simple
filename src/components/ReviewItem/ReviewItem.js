import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product , handleRemoveToCart} = props;
    const {img, name, price, shipping, quantity} = product;
    return (
        <div className='mx-5 mt-5 review-item'>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="product-info-container ps-3">
                <div className="product-info">
                    <h4 className='m-0'>{name}</h4>
                    <p className='m-0'>Price: <span className='highlight'>${price} </span></p>
                    <p><small>
                        Shipping: <span className='highlight'> ${shipping}</span> <br />
                        Quantity: {quantity}    
                    </small></p>
                </div>
                <div className="delete-btn">
                    <button className='trash-btn' onClick={() => handleRemoveToCart(product)}>
                        <FontAwesomeIcon className='trash-icon' icon={faTrashAlt} ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;