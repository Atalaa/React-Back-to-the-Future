import React from 'react';
import '../sass/Header.scss';
import logo from '../img/bttfLogo.png';


function Header(){
    return(
        <header className="header">
            <div className="header__logo-box">
                <img src={logo} alt="logo" className="header__logo"/>
            </div>
            
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Back</span>
                    <span className="heading-primary--sub">to the</span>
                    <span className="heading-primary--main">Future</span>
                </h1>
                <a href="https://www.backtothefuture.com/" target="_blank" className="btn btn--white btn--animated">
                    A cultural phenomenon
                </a>
            </div>

            
            
        </header>
    )
}

export default Header;

