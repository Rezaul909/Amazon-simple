import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div className='header'>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <div>
                    <Link to="/Home">Home</Link>
                    <Link to="/Shop">Shop</Link>
                    <Link to="/OrderReview">Order Review</Link>
                    {
                        user ?
                        <button onClick={handleSignOut} className='ms-4 rounded '>Sign Out</button>
                        :
                        <Link to="/SignUp">Sign-Up</Link>}
                </div>
            </nav>
        </div>
    );
};

export default Header;