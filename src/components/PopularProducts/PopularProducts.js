import React from 'react';
import './PopularProducts.css';
import pc1 from '../../imagesPP/pc-1.png';
import pc2 from '../../imagesPP/pc-2.png';
import pc3 from '../../imagesPP/pc-3.png';
import pc4 from '../../imagesPP/pc-4.png';
import pc5 from '../../imagesPP/pc-5.png';
import pc6 from '../../imagesPP/pc-6.png';
import pc7 from '../../imagesPP/pc-7.png';
import pc8 from '../../imagesPP/pc-8.png';
import pc9 from '../../imagesPP/pc-9.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const PopularProducts = () => {
    return (
        <div className='my-5 pt-5 '>
            <section class="container">
            <div class="popular-collection">
                <h2 class="popular-collections-title">Popular Collection</h2>
                <div class="collection-items">
                    <article class="item">
                        <div class="item-image">
                            <img src={pc1} alt="" />
                        </div>
                        <div class="item-details">
                            <h2 class="item-name">Airbuds</h2>
                            <p class="price">$100.00</p>
                            <div class="item-ratings">
                                <div>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    &nbsp;&nbsp;
                                    <span class="rating">4.5</span>
                                </div>
                                <p class="item-info">Worldwide shifting available Buyers protection possible!</p>
                            </div>
                        </div>
                    </article>
                    <article class="item">
                        <div class="item-image">
                            <img src={pc2} alt=""/>
                        </div>
                        <div class="item-details">
                            <h2 class="item-name">Vlogging Camera</h2>
                            <p class="price">$1800.80</p>
                            <div class="item-ratings">
                                <div>
                                    FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    &nbsp;&nbsp;
                                    <span class="rating">4.5</span>
                                </div>
                                <p class="item-info">Worldwide shifting available Buyers protection possible!</p>
                            </div>
                        </div>
                    </article>
                    <article class="item">
                        <div class="item-image">
                            <img src={pc3} alt="" />
                        </div>
                        <div class="item-details">
                            <h2 class="item-name">Drone</h2>
                            <p class="price">$980.25</p>
                            <div class="item-ratings">
                                <div>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    &nbsp;&nbsp;
                                    <span class="rating">4.5</span>
                                </div>
                                <p class="item-info">Worldwide shifting available Buyers protection possible!</p>
                            </div>
                        </div>
                    </article>
                    <article class="item">
                        <div class="item-image">
                            <img src={pc4} alt="" />
                        </div>
                        <div class="item-details">
                            <h2 class="item-name">Light Setup</h2>
                            <p class="price">$1200.00</p>
                            <div class="item-ratings">
                                <div>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    &nbsp;&nbsp;
                                    <span class="rating">4.5</span>
                                </div>
                                <p class="item-info">Worldwide shifting available Buyers protection possible!</p>
                            </div>
                        </div>
                    </article>
                    <article class="item">
                        <div class="item-image">
                            <img src={pc5} alt="" />
                        </div>
                        <div class="item-details">
                            <h2 class="item-name">microphone</h2>
                            <p class="price">$120.00</p>
                            <div class="item-ratings">
                                <div>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    &nbsp;&nbsp;
                                    <span class="rating">4.5</span>
                                </div>
                                <p class="item-info">Worldwide shifting available Buyers protection possible!</p>
                            </div>
                        </div>
                    </article>
                    <article class="item">
                        <div class="item-image">
                            <img src={pc6} alt="" />
                        </div>
                        <div class="item-details">
                            <h2 class="item-name">Photoshoot set</h2>
                            <p class="price">$820.00</p>
                            <div class="item-ratings">
                                <div>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    &nbsp;&nbsp;
                                    <span class="rating">4.5</span>
                                </div>
                                <p class="item-info">Worldwide shifting available Buyers protection possible!</p>
                            </div>
                        </div>
                    </article>
                    <article class="item">
                        <div class="item-image">
                            <img src={pc7} alt="" />
                        </div>
                        <div class="item-details">
                            <h2 class="item-name">Green Screen</h2>
                            <p class="price">$30.00</p>
                            <div class="item-ratings">
                                <div>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    &nbsp;&nbsp;
                                    <span class="rating">4.5</span>
                                </div>
                                <p class="item-info">Worldwide shifting available Buyers protection possible!</p>
                            </div>
                        </div>
                    </article>
                    <article class="item">
                        <div class="item-image">
                            <img src={pc8} alt="" />
                        </div>
                        <div class="item-details">
                            <h2 class="item-name">Flex Tripod</h2>
                            <p class="price">$50.00</p>
                            <div class="item-ratings">
                                <div>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    &nbsp;&nbsp;
                                    <span class="rating">4.5</span>
                                </div>
                                <p class="item-info">Worldwide shifting available Buyers protection possible!</p>
                            </div>
                        </div>
                    </article>
                    <article class="item">
                        <div class="item-image">
                            <img src={pc9} alt="" />
                        </div>
                        <div class="item-details">
                            <h2 class="item-name">Action Camera</h2>
                            <p class="price">$380.00</p>
                            <div class="item-ratings">
                                <div>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    &nbsp;&nbsp;
                                    <span class="rating">4.5</span>
                                </div>
                                <p class="item-info">Worldwide shifting available Buyers protection possible!</p>
                            </div>
                        </div>
                    </article>
                </div>
                {/* <div class="see-more">
                    <a href="#">See More &nbsp; <i class="fas fa-arrow-right"></i></a>
                </div> */}
            </div>
        </section>
        </div>
    );
};

export default PopularProducts;