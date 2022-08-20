import React from 'react';
import useCart from '../../Hook/useCart';
import useProducts from '../../Hook/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product=> <ReviewItem key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className="order-summery pb-5">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default OrderReview;