import React from 'react';
import useCart from '../../Hook/useCart';
import useProducts from '../../Hook/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);

    const handleRemoveToCart = product =>{
        const rest = cart.filter(pd=> pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {
                    cart.map(product=> <ReviewItem key={product.id} product={product} 
                        handleRemoveToCart={handleRemoveToCart} ></ReviewItem>)
                }
            </div>
            <div className="order-summery pb-5">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default OrderReview;