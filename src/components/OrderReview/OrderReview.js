import React from 'react';
import useProducts from '../../Hook/useProducts';

const OrderReview = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <h1>This is order review page{products.length} </h1>
        </div>
    );
};

export default OrderReview;