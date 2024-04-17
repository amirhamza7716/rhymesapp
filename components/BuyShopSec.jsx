import React from 'react'
import './shop.css';
import Link from 'next/link';
import Image from 'next/image';
import AmazonImg from '../public/images/amazon3.png'
import WalmetImg from '../public/images/img/walmart_logo.png'
import BarneImg from '../public/images/img/barnes_logo.png'
function BuyShopSec() {

    return (
        <div className='app_shop'>
            <div className='app_shop-wrapper'>
                <h3 className='app_shop-title'>WHERE TO BUY</h3>
                <div className='app_shop-cardsec'>


                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                {/* <img className='flip-card-front-img' src="/images/amazon3.png" alt="Avatar" /> */}
                                <Image
                                    className="flip-card-front-img"
                                    src={AmazonImg}
                                    alt="amazon"
                                    layout='contain'
                                />
                            </div>
                            <div className="flip-card-back">
                                <Link href="https://www.amazon.com/dp/0991273516" className="flip-card-back-btn" >SHOP NOW</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                {/* <img src="/images/img/barnes_logo.png" alt="Avatar" /> */}
                                <Image
                                    src={BarneImg}
                                    alt="Barnes"
                                    layout='contain'
                                />
                            </div>
                            <div className="flip-card-back">
                                <Link href="https://www.barnesandnoble.com/w/book-of-rhymes-romane-armand/1123599628?ean=9780991273515" className="flip-card-back-btn">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                {/* <img src="/images/img/walmart_logo.png" alt="Avatar" /> */}
                                <Image
                                    src={WalmetImg}
                                    alt="Walmet"
                                    layout='contain'
                                />
                            </div>
                            <div className="flip-card-back">
                                <Link href="https://www.walmart.com/ip/Book-of-Rhymes-A-Laxative-for-Creative-Constipation/53419994" className="flip-card-back-btn">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyShopSec