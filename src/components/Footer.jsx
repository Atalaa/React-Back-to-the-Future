import React from 'react';
import logo from '../img/footerlogo.jpg';
import '../sass/Footer.scss';


function Footer(){
    return(
        <footer className="footer">
            <div className="footer__logoBox utility-margin-bottom-small">
                <img src={logo} alt="logo" className="footer__logo"/>
            </div>

            <div className="footer__navigation">
                <hr/>
                <ul className="footer__list">
                    <li className="footer__items"><a href="https://www.linkedin.com/in/aata-allah-rchidi/" rel="noreferrer noopener" target="_blank" className="footer__link">LinkedIn</a></li>

                    <li className="footer__items"><a href="https://github.com/Atalaa" rel="noreferrer noopener" target="_blank" className="footer__link">Github</a></li>

                    <li className="footer__items"><a href="mailto:someone@example.com" rel="noreferrer noopener" target="_blank" className="footer__link">Hire me</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;