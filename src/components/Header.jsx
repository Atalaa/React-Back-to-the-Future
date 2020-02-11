import React from 'react';
import '../componentStyle/Header.css';
import logo from '../img/bandw.png';


function Header(){
    return(
        <header className="header">
            <div className="logo-box">
                <img src={logo} alt="logo" className="logo"/>
            </div>
        </header>
    )
}

export default Header;

