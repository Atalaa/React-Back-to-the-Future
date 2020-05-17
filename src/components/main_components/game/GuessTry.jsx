import React from 'react';
import PropTypes from 'prop-types';


const GuessTry = ({guesses}) => <div className="guesses">{`Guesses: ${guesses}`}</div>

GuessTry.propTypes = {
    guesses: PropTypes.number.isRequired
}

export default GuessTry;