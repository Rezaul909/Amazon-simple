import React from 'react';
import useCart from '../../Hook/useCart';
import useProducts from '../../Hook/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const OrderReview = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);

    const handleRemoveToCart = product =>{
        const rest = cart.filter(pd=> pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container '>
            <div className="review-item-container w-75 mx-auto">
                {
                    cart.map(product=> <ReviewItem key={product.id} product={product} 
                        handleRemoveToCart={handleRemoveToCart} ></ReviewItem>)
                }
            </div>
            <div className="order-summery pb-5">
                <Cart cart={cart} >
                    <Link to='/shipment'>
                        <button className="review-btn mt-3 text-center border-0 p-3 ">
                            Proceed to Shipment &#160; <FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;