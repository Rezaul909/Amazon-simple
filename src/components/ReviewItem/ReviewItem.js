import React from 'react';

const ReviewItem = (props) => {
    const {name, price, shipping, quantity} = props.product;
    return (
        <div className='ms-5'>
            <h2>Items:{name} </h2>
        </div>
    );
};

export default ReviewItem;