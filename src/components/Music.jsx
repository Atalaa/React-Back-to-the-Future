import React from 'react';
import Singer from './Singer';
import json_music_singers from '../json/json_music_singers';
import '../sass/Music.scss';



function createSinger(item){
    return(
        <Singer key={item.id} singerImg={item.image} song={item.mp3}/>
    )
}

function Music() {
    return(
        <section className="section-music">
            <div className="container2">
                {json_music_singers.map(createSinger)}
            </div>
                
        </section>
    )
}

export default Music;