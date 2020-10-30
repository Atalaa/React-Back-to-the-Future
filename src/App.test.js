//don't need expect from Jest - so I use the one from chai
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import App from './components/App';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Game from './components/main_components/game/Game';
import GuessTry from './components/main_components/game/GuessTry';

describe('<App />', () => {
    it('App component has these components inside it', () => {
        const wrapper = shallow(<App />)
        expect(wrapper).to.contain(<Header />, <Main />, <Footer />)
    })

    it('renders proper components', () => {
        const wrapper = shallow(<Game />)
        expect(wrapper).to.contain(<GuessTry guesses={0}/>)
    })

    it('has 30 cards', () => {
        const wrapper = shallow(<Game />)
        expect(wrapper.find('GameCard')).to.have.lengthOf(3);    
    })
})

