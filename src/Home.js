import React from 'react';
import flowood from './assets/images/Flowood-Cust-Promo.jpg';
import './assets/scss/home.scss'

class Home extends React.Component {
    render() {
        return (
            <div className="home-page">
                <img className="promo-image" src={flowood} alt="Flowood Crust Promo"/>
                <div className="form-container">
                    <form action="https://formspree.io/user@sayleoil.com" method="POST">
                        <div className="input-holder">
                            <label htmlFor="form_name" className="form_label"> Name* </label>
                            <input type="text" name="name" className="input" />
                        </div>
                        <div className="input-holder">
                            <label htmlFor="form_email" className="form_label"> Email* </label>
                            <input type="text" name="email" className="input" />
                        </div>
                        <div className="input-holder">
                            <label htmlFor="form_number" className="form_label"> Phone # </label>
                            <input type="number" name="number" className="input" />
                        </div>
                        <div className="button-holder">
                            <button id="form-button"> Send to Sayle Oil </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home;