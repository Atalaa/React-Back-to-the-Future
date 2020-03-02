import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Singer from './Singer';

import '../../sass/Music.scss';
import 'animate.css/animate.css';
import json_music_singers from '../../json/json_music_singers';




function createSinger(item){
    return(
        <Singer key={item.id} singerImg={item.image} song={item.mp3}/>
    )
}

function Music() {
    return(
        <section className="section-music">
            <div className="section-music-backgroundimage"></div>
                <ScrollAnimation animateIn='fadeInUp' duration={1.5} animateOnce={true}>
                    <div className="container2">
                        {json_music_singers.map(createSinger)}
                    </div>
                </ScrollAnimation>
        </section>
    )
}

export default Music;