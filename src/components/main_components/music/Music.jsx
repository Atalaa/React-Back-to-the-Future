import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import json_music_singers from '../../../json/json_music_singers';
import Singer from './Singer';

import 'animate.css/animate.css';

function Music() {
    return(
        <section className="sectionMusic">
            <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
                <div className="utility-center-text">
                    <h2 className="headingSecondary utility-center-text changeColor titleMusic">
                        The Motion Picture Soundtrack
                    </h2>                

                    <div className="container2">
                        {json_music_singers.map(item => (
                            <Singer 
                                key={item.id} 
                                id={item.id} 
                                singerImg={item.image} 
                                song={item.mp3} 
                                artist={item.artist} 
                                info={item.info}/>
                        ))}
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    )
}

export default Music;