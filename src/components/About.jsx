import React from 'react';
import '../sass/About.scss';
import marty from '../img/mjfox.jpg';
import doc from '../img/clloyd.jpg';
import biff from '../img/twilson.jpg';


function About() {
    return(
        <section className="section-about">
            <div className="utility-center-text utility-margin-bottom-big">
                <h2 className="heading-secondary">
                    The Timeless Classic Original
                </h2>
            </div>

            <div className="container">
                <div className="item item--1">
                    <h3 className="heading-tertiary utility-margin-bottom-small">You're gonna love "Back to the Future"</h3>

                    <p className="paragraph">
                    From Academy Award®-winning filmmakers Steven Spielberg and Robert Zemeckis comes Back to the Future — the original, ground-breaking adventure that sparked one of the most successful trilogies ever.
                    </p>

                    <h3 className="heading-tertiary utility-margin-bottom-small">Synopsis</h3>

                    <p className="paragraph">
                    When teenager Marty McFly (Michael J. Fox) is blasted to 1955 in the DeLorean time machine created by the eccentric Doc Brown (Christopher Lloyd), he finds himself mixed up in a time-altering chain reaction that could vaporize his future — and leave him trapped in the past. 
                    </p>

                    <a href="#" className="btn-text">Learn more &rarr;</a>

                </div>

                <div className="item item--2">
                    <div className="composition">
                        <img src={biff} alt="actor3" className="composition__photo composition__photo--p3"/>
                        <img src={doc} alt="actor2" className="composition__photo composition__photo--p2"/>
                        <img src={marty} alt="actor1" className="composition__photo composition__photo--p1"/>
                        
                    </div>
                </div>
                
            </div>
        </section>      
    )
}

export default About;