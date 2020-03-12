import React from 'react';
import Game from './main_components/Game';
import About from './main_components/About';
import Music from './main_components/Music';
import Trailer from './main_components/Trailer';


function Main() {
    return(
        <main>
            <About />
            <Music />
            <Trailer />
            <Game />
        </main>
        
    )
}

export default Main;