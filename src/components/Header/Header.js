import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <div>
                    <a href="/Home">Home</a>
                    <a href="/Shop">Shop</a>
                    <a href="/Order Review">Order Review</a>
                    <a href="/Manage Inventory">Manage Inventory</a>
                    <a href="/Sign-Up">Sign-Up</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;