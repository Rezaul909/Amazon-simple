import React from 'react';
import './Home.css'
import banner from '../../images/HomeMe.jpg';
import PopularProducts from '../PopularProducts/PopularProducts';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='home-container pb-5'>
                <div className="home-tile">
                    <h4 className='text-warning'>Sale Up to 70% off!</h4>
                    <h1 className='mt-5'>New Collection For Fall</h1>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                    <Link to="/Shop">
                        <button className='home-btn'>SHOP NOW</button>
                    </Link>
                </div>
                <div className="home-banner">
                    <img src={banner} alt="" />
                </div>
            </div>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;