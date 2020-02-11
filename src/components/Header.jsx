import React from 'react';
import '../componentStyle/Header.css';
import logo from '../img/bttfLogo.png';


function Header(){
    return(
        <header className="header">
            <div className="logo-box">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Back</span>
                    <span className="heading-primary-sub">to the</span>
                    <span className="heading-primary-main">Future</span>
                </h1>
            </div>
            
        </header>
    )
}

export default Header;

