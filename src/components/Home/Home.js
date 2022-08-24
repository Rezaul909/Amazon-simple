import React from 'react';
import './Home.css'
import banner from '../../images/Home.PNG';
import PopularProducts from '../PopularProducts/PopularProducts';

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className="home-tile">
                    <small>Sale Up to 70% off!</small>
                    <h1>New Collection For Fall</h1>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                    <button>SHOP NOW</button>
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