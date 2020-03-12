import React from 'react';
import Typed from 'react-typed';
import '../sass/Header.scss';
import logo from '../img/bttfLogo.png';


function Header(){
    return(
        <header className="header">
            <div className="header__logoBox">
                <img src={logo} alt="logo" className="header__logo"/>
            </div>
            
            <div className="header__textBox">
                <h1 className="headingPrimary">
                    <span className="headingPrimary--main">Back</span>
                    <span className="headingPrimary--sub">to the</span>
                    <span className="headingPrimary--main">Future</span>
                </h1>

                <a href="https://www.backtothefuture.com/"  rel="noreferrer noopener" target="_blank" className="btn btn--white btn--animated btn--typed">
                    <Typed
                        strings={["A classic masterpiece", "Revisit the Past!", "A cultural phenomenon", "You’re gonna love it!"]}
                        typeSpeed={50}
                        backSpeed={20}
                        backDelay={800}
                        startDelay={1000}
                        loop
                        smartBackspace
                    />
                </a>
                
            </div>
        </header>
    )
}

export default Header;

