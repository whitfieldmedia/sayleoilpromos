import React from 'react';
import facebook from './assets/icons/facebook-letter-logo.svg';
import youtube from './assets/icons/youtube.svg';
import linkedin from './assets/icons/linkedin-sign.svg';
import copyright from './assets/icons/copyright.svg';
import logo from './assets/icons/sayle-logo.png';
import './assets/scss/footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="left-footer-column">
                    <div className="footer-nav-row">
                        <a className="footer-nav-link" href="http://www.sayleoil.com/index.php"> Home </a>
                        <a className="footer-nav-link" href="http://www.sayleoil.com/about-us.php"> About Us </a>
                        <a className="footer-nav-link" href="http://www.sayleoil.com/news.php"> News </a>
                        <a className="footer-nav-link" href="http://www.sayleoil.com/locations-for-sayle-oil/"> Locations </a>
                        <a className="footer-nav-link" href="http://www.sayleoil.com/about-us/Lubricants-and-Fuel"> Fuel & Lube </a>
                        <a className="footer-nav-link" href="http://www.sayleoil.com/contact.php"> Contact Us </a>
                    </div>
                    <div className="disclaimer-row"> Disclaimer: Sayle Oil provides all this information in good faith and makes no representations about the suitability, reliability, availability, timeliness, and accuracy of the information contained on this website for any purpose. The information contained on this website is provided "as is" without warranty of any kind. Sayle Oil hereby disclaims all warranties and conditions with regard to this website, including all implied warranties and conditions or merchantability, fitness for a particular purpose, title and non-infringement. Trademarks / Logos are the property of their respective owners. </div>
                    <div className="social-media-row">  
                        <a href="https://www.facebook.com/SayleOilCompany"> <img src={facebook} alt="Sayle Oil Facebook"/> </a>
                        <a href="https://www.youtube.com/channel/UCxQj-KoFcDRrnS-SRTcJdsQ"> <img src={youtube} alt="Sayle Oil Youtube"/> </a>
                        <a href="https://www.linkedin.com/company/sayle-oil-company/"> <img src={linkedin} alt="Sayle Oil Company LinkedIn"/> </a>
                    </div>
                    <div className="copyright">
                        <p> <img src={copyright} alt="Copyright"/> July 9, 2019 - <strong> Sayle Oil Company </strong> All rights reserved. </p>
                    </div>
                </div>
                <div className="right-footer-column">
                    <img src={logo} alt="Sayle Oil Company 'Ride With Us'"/>
                    <p> (662) 647-5802 </p>
                    <p> 410 West Main Street </p>
                    <p> Charleston, MS 38921 </p>
                </div>
            </div>
        )
    }
}

export default Footer;