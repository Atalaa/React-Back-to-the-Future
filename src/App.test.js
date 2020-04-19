import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Game from './components/main_components/game/Game';
import GuessTry from './components/main_components/game/GuessTry';

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Game />)
    
        expect(wrapper).to.contain(<GuessTry guesses={0}/>)
    })

    it('there are 4 cards', () => {
        const wrapper = shallow(<Game />)
    
        expect(wrapper.find('GameCard')).to.have.lengthOf(4)    
    })
})

