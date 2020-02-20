import React from 'react';
import '../sass/Music.scss';
import huey from '../img/hlewis.jpg';
import chuck from '../img/cberry.jpg';
import starlighters from '../img/starlighters.jpg';


function Music() {
    return(
        <section className="section-music">
            <div className="container2">

                <div className="item item--1">
                    <div className="music-box">
                        <img src={huey} alt="singer" className="music-box__img"/>
                        <h3 className="heading-tertiary utility-margin-bottom-small">Explore the world</h3>
                        <p className="music-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis nihil a.
                        </p>
                    </div>
                </div>

                <div className="item item--2">
                    <div className="music-box">
                        <img src={chuck} alt="singer" className="music-box__img"/>
                        <h3 className="heading-tertiary utility-margin-bottom-small">Explore the world</h3>
                        <p className="music-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis nihil a.
                        </p>
                    </div>
                </div>

               <div className="item item--3">
                    <div className="music-box">
                        <img src={starlighters} alt="singer" className="music-box__img"/>
                        <h3 className="heading-tertiary utility-margin-bottom-small">Explore the world</h3>
                        <p className="music-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis nihil a.
                        </p>
                    </div>
               </div>
                
                {/* <div className="item item--4">
                    <div className="music-box">
                        <img src={huey} alt="singer" className="music-box__img"/>
                        <h3 className="heading-tertiary utility-margin-bottom-small">Explore the world</h3>
                        <p className="music-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis nihil a.
                        </p>
                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default Music;