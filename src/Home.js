import React from 'react';
import coupon from './assets/images/sayle_coupon.png';
import './assets/css/home.css'

class Home extends React.Component {
    render() {
        return (
            <div className="home-page">
                <a href={coupon} download>
                    <img className="promo-image" src={coupon} alt="Sayle Oil Dipstix Coupon - $10 off any synthetic oil change"/>
                    <h2 className="promo-download">
                        Click to Download Coupon
                    </h2>
                </a>
                {/* <div className="form-container">
                    <form action="https://formspree.io/mrich@sayleoil.com" method="POST">
                        <input type="hidden" name="_cc" value="charlie@cwhitfieldmedia.com" />
                        <div className="input-holder">
                            <label htmlFor="form_name" className="form_label"> Name* </label>
                            <input type="text" name="name" className="input" />
                        </div>
                        <div className="input-holder">
                            <label htmlFor="email" className="form_label"> Email* </label>
                            <input type="email" name="email" className="input" />
                        </div>
                        <div className="input-holder">
                            <label htmlFor="form_number" className="form_label"> Phone # </label>
                            <input type="number" name="number" className="input" />
                        </div>
                        <div className="button-holder">
                            <button id="form-button" type="submit"> Send to Sayle Oil </button>
                        </div>
                    </form>
                </div> */}
            </div>
        )
    }
}

export default Home;