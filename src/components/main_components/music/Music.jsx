import React from 'react';
import Singer from './Singer';
import 'animate.css/animate.css';
import '../../../sass/components/Music.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import json_music_singers from '../../../json/json_music_singers';


function createSinger(item){
    return(
        <Singer key={item.id} singerImg={item.image} song={item.mp3} artist={item.artist} info={item.info}/>
    )
}

function Music() {
    return(
        <section className="sectionMusic">
            <ScrollAnimation animateIn='fadeIn' duration={1.5} animateOnce={true}>
                <div className="container2">
                    {json_music_singers.map(createSinger)}
                </div>
            </ScrollAnimation>
        </section>
    )
}

export default Music;