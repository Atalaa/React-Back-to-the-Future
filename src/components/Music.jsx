import React from 'react';
import Singer from './Singer';

import '../sass/Music.scss';
import huey from '../img/hlewis.jpg';
import chuck from '../img/cberry.jpg';
import starlighters from '../img/starlighters.jpg';


function Music() {
    return(
        <section className="section-music">
            <div className="container2">
                <Singer singerImg={huey} />
                <Singer singerImg={chuck} />
                <Singer singerImg={starlighters} />
            </div>
        </section>
    )
}

export default Music;