import React from 'react';

import About from './main_components/about/About';
import Game from './main_components/game/Game';
import Music from './main_components/music/Music';
import Quote from './main_components/quote/Quotes';
import Review from './main_components/review/Review';
import Trailer from './main_components/trailer/Trailer';

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