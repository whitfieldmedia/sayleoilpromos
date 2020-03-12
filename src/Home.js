import React from 'react';
import coupon from './assets/images/sayle_coupon.png';
import './assets/css/home.css'

export default function Home() {
    return (
        <div className="home-page">
            <a href={coupon} download>
                <img className="promo-image" src={coupon} alt="Sayle Oil Dipstix Coupon - $10 off any synthetic oil change"/>
                <h2 className="promo-download">
                    Click to Download Coupon
                </h2>
            </a>
        </div>
    )
}