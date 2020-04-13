import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

import '../sass/layout/App.scss';
import '../sass/layout/Header.scss';
import '../sass/components/About.scss';
import '../sass/components/Music.scss';
import '../sass/components/Trailer.scss';
import '../sass/components/Card.scss';
import '../sass/components/Game.scss';
import '../sass/components/GameCard.scss';
import '../sass/components/Review.scss';
import '../sass/layout/Footer.scss';


//ROOT COMPONENT
function App(){
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;