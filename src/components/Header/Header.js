import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <div>
                    <a href="/Home">Home</a>
                    <a href="/Shop">Shop</a>
                    <a href="/OrderReview">Order Review</a>
                    <a href="/SignUp">Sign-Up</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;