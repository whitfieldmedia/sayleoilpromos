import React, { useEffect, useState } from 'react';
import './assets/css/nav.css';

export default function Nav() {
    const [ isToggled, setIsToggled ] = useState(false);
    useEffect(() => {
        window.scrollTo(0,0)
    })
    const toggleMenu = () => {
        setIsToggled(!isToggled)
    }
    return (
        <div>
            <header className="navbar">
                <div className="nav-link-holder">
                    <a className="nav-link" href="http://www.sayleoil.com/index.php"> <p className="nav-link"> HOME </p> </a>
                </div>
                <div className="dropdown nav-link-holder">
                    <a className="nav-link" href="http://www.sayleoil.com/about-us.php"> <p className="nav-link"> ABOUT <small> > </small> </p></a>
                    <div className="dropdown-content">
                        <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Sayle-Oil-Company"> Sayle Oil Company </a>
                        <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Convenience-Stores"> Convenience Stores </a>
                        <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Lubricants-and-Fuel"> Lubricants & Fuel </a>
                        <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Propane"> Propane </a>
                        <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Quick-Lubes"> Quick Lubes </a>
                        <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Careers"> Careers </a>
                        <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Sayle-Business-Credit-App"> Sayle Business Credit App </a>
                        <a className="dropdown-link" href="http://www.sayleoil.com/faq.php"> FAQ </a>
                    </div>
                </div>
                <div className="nav-link-holder">
                    <a className="nav-link" href="http://www.sayleoil.com/news.php"> <p className="nav-link"> NEWS </p> </a>
                </div> 
                <div className="dropdown nav-link-holder">
                    <a className="nav-link" href="/#"> <p className="nav-link"> LOCATIONS <small> > </small> </p></a>
                    <div className="dropdown-content"> 
                        <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Convenience-Stores-"> Convenience Stores </a>
                        <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Propane"> Propane </a>
                        <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Quick-Lubes"> Quick Lubes </a>
                        <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Bulk-Plants"> Bulk Plants </a>
                        <a className="dropdown-link" href="http://www.sayleoil.com/locations-for-sayle-oil/"> View All Locations </a>
                    </div>
                </div>
                <div className="nav-link-holder">
                    <a className="nav-link" href="http://www.sayleoil.com/about-us/Lubricants-and-Fuel"> <p className="nav-link"> FUEL & LUBE </p> </a>
                </div>
                <div className="nav-link-holder">
                    <a className="nav-link" href="http://www.sayleoil.com/contact.php"> <p className="nav-link"> CONTACT </p> </a>
                </div>
            </header>
            <header className="navbar2">
                <div className="toggle-menu-holder" onClick={toggleMenu}>
                    <div className="nav-toggle-menu"> MENU </div>
                    <div className="nav-toggle-icon"> <i className="fas fa-bars"></i> </div>
                </div>
                {isToggled
                    ? <div className="main-nav2">
                        <div className="nav-link-holder">
                            <a className="nav-link" href="http://www.sayleoil.com/index.php"> <p className="nav-link"> HOME </p> </a>
                        </div>
                        <div className="dropdown nav-link-holder">
                            <a className="nav-link" href="http://www.sayleoil.com/about-us.php"> <p className="nav-link"> ABOUT <small> > </small> </p></a>
                            <div className="dropdown-content">
                                <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Sayle-Oil-Company"> Sayle Oil Company </a>
                                <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Convenience-Stores"> Convenience Stores </a>
                                <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Lubricants-and-Fuel"> Lubricants & Fuel </a>
                                <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Propane"> Propane </a>
                                <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Quick-Lubes"> Quick Lubes </a>
                                <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Careers"> Careers </a>
                                <a className="dropdown-link" href="http://www.sayleoil.com/about-us/Sayle-Business-Credit-App"> Sayle Business Credit App </a>
                                <a className="dropdown-link" href="http://www.sayleoil.com/faq.php"> FAQ </a>
                            </div>
                        </div>
                        <div className="nav-link-holder">
                            <a className="nav-link" href="http://www.sayleoil.com/news.php"> <p className="nav-link"> NEWS </p> </a>
                        </div> 
                        <div className="dropdown nav-link-holder">
                            <a className="nav-link" href="/#"> <p className="nav-link"> LOCATIONS <small> > </small> </p></a>
                            <div className="dropdown-content"> 
                                <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Convenience-Stores-"> Convenience Stores </a>
                                <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Propane"> Propane </a>
                                <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Quick-Lubes"> Quick Lubes </a>
                                <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Bulk-Plants"> Bulk Plants </a>
                                <a className="dropdown-link" href="http://www.sayleoil.com/locations-for-sayle-oil/"> View All Locations </a>
                            </div>
                        </div>
                        <div className="nav-link-holder">
                            <a className="nav-link" href="http://www.sayleoil.com/about-us/Lubricants-and-Fuel"> <p className="nav-link"> FUEL & LUBE </p> </a>
                        </div>
                        <div className="nav-link-holder">
                            <a className="nav-link" href="http://www.sayleoil.com/contact.php"> <p className="nav-link"> CONTACT </p> </a>
                        </div>
                    </div>
                    : null }
            </header>
        </div>
    )
}