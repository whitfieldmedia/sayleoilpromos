import React from 'react';
import './assets/css/nav.css';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggled: false,
        }
    }
    toggleMenu = () => {
        this.setState ({
            isToggled: !this.state.isToggled
        })
    }
    render() {
        return (
            <div>
                <header className="navbar">
                    <li className="nav-link-holder">
                        <a className="nav-link" href="http://www.sayleoil.com/index.php"> <p className="nav-link"> HOME </p> </a>
                    </li>
                    <li className="dropdown nav-link-holder">
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
                    </li>
                    <li className="nav-link-holder">
                        <a className="nav-link" href="http://www.sayleoil.com/news.php"> <p className="nav-link"> NEWS </p> </a>
                    </li> 
                    <li className="dropdown nav-link-holder">
                        <a className="nav-link" href="/#"> <p className="nav-link"> LOCATIONS <small> > </small> </p></a>
                        <div className="dropdown-content"> 
                            <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Convenience-Stores-"> Convenience Stores </a>
                            <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Propane"> Propane </a>
                            <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Quick-Lubes"> Quick Lubes </a>
                            <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Bulk-Plants"> Bulk Plants </a>
                            <a className="dropdown-link" href="http://www.sayleoil.com/locations-for-sayle-oil/"> View All Locations </a>
                        </div>
                    </li>
                    <li className="nav-link-holder">
                        <a className="nav-link" href="http://www.sayleoil.com/about-us/Lubricants-and-Fuel"> <p className="nav-link"> FUEL & LUBE </p> </a>
                    </li>
                    <li className="nav-link-holder">
                        <a className="nav-link" href="http://www.sayleoil.com/contact.php"> <p className="nav-link"> CONTACT </p> </a>
                    </li>
                </header>
                <header className="navbar2">
                    <div className="toggle-menu-holder" onClick={this.toggleMenu}>
                        <li className="nav-toggle-menu"> MENU </li>
                        <li className="nav-toggle-icon"> <i className="fas fa-bars"></i> </li>
                    </div>
                    {this.state.isToggled
                        ? <ul className="main-nav2">
                            <li className="nav-link-holder">
                                <a className="nav-link" href="http://www.sayleoil.com/index.php"> <p className="nav-link"> HOME </p> </a>
                            </li>
                            <li className="dropdown nav-link-holder">
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
                            </li>
                            <li className="nav-link-holder">
                                <a className="nav-link" href="http://www.sayleoil.com/news.php"> <p className="nav-link"> NEWS </p> </a>
                            </li> 
                            <li className="dropdown nav-link-holder">
                                <a className="nav-link" href="/#"> <p className="nav-link"> LOCATIONS <small> > </small> </p></a>
                                <div className="dropdown-content"> 
                                    <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Convenience-Stores-"> Convenience Stores </a>
                                    <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Propane"> Propane </a>
                                    <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Quick-Lubes"> Quick Lubes </a>
                                    <a className="dropdown-link" href="http://www.sayleoil.com/location-category/Bulk-Plants"> Bulk Plants </a>
                                    <a className="dropdown-link" href="http://www.sayleoil.com/locations-for-sayle-oil/"> View All Locations </a>
                                </div>
                            </li>
                            <li className="nav-link-holder">
                                <a className="nav-link" href="http://www.sayleoil.com/about-us/Lubricants-and-Fuel"> <p className="nav-link"> FUEL & LUBE </p> </a>
                            </li>
                            <li className="nav-link-holder">
                                <a className="nav-link" href="http://www.sayleoil.com/contact.php"> <p className="nav-link"> CONTACT </p> </a>
                            </li>
                        </ul>
                        : null }
                </header>
            </div>
        )
    }
}

export default Nav;