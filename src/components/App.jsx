import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

import '../sass/components/About.scss';
import '../sass/components/Card.scss';
import '../sass/components/Game.scss';
import '../sass/components/Music.scss';
import '../sass/components/Quotes.scss'
import '../sass/components/Review.scss';
import '../sass/components/Trailer.scss';
import '../sass/layout/App.scss';
import '../sass/layout/Footer.scss';
import '../sass/layout/Header.scss';

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