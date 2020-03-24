import React from 'react';
import Game from './main_components/game/Game';
import About from './main_components/about/About';
import Music from './main_components/music/Music';
import Trailer from './main_components/trailer/Trailer';
import Review from './main_components/review/Review';


function Main() {
    return(
        <main>
            <About />
            <Music />
            <Trailer />
            <Game />
            <Review />
        </main>
        
    )
}

export default Main;