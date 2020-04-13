import React from 'react';
import Actor from './Actor';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import json_about_actors from '../../../json/json_about_actors';


function About() {
    return(
        <section className="sectionAbout">
            <ScrollAnimation animateIn='fadeIn' duration={1.5} animateOnce={true}>
                <div className="utility-center-text utility-margin-bottom-big">
                    <h2 className="headingSecondary">
                        The Timeless Classic Original
                    </h2>
                </div>
                <div className="container">
                    <div className="item item--1">
                        <h3 className="headingTertiary utility-margin-bottom-small">You're gonna love "Back to the Future"</h3>

                        <p className="paragraph">
                        From Academy Award®-winning filmmakers Steven Spielberg and Robert Zemeckis comes Back to the Future — the original, ground-breaking adventure that sparked one of the most successful trilogies ever.
                        </p>

                        <h3 className="headingTertiary utility-margin-bottom-small">Synopsis</h3>

                        <p className="paragraph">
                        When teenager Marty McFly (Michael J. Fox) is blasted to 1955 in the DeLorean time machine created by the eccentric Doc Brown (Christopher Lloyd), he finds himself mixed up in a time-altering chain reaction that could vaporize his future — and leave him trapped in the past. 
                        </p>

                        <a href="https://www.backtothefuture.com/cast"  rel="noreferrer noopener" target="_blank" className="btn-text">Learn more &rarr;</a>
                    </div>

                    <div className="item item--2">
                        <div className="composition">
                            {json_about_actors.map(item => (
                                <Actor 
                                    key={item.id} 
                                    actorImg={item.image} 
                                    linkInfo={item.link} 
                                    myClass={item.classes}/>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            
        </section>      
    )
}

export default About;