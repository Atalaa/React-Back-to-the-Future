import React from 'react';
import './Game';


const hidden_symbol = '❔';

//destructuring
function GameCard({symbolOfCard, stateOfCard, index, onClick}){
    return(
        <div className={`game_card ${stateOfCard}`} onClick={() => onClick(index)}>
        
            {stateOfCard === 'hidden' ? <div className="symbol">{hidden_symbol}</div> : 
            <img className="symbol_card" src={symbolOfCard} style={{width:"75%"}} alt="movie-icon"/> }

        </div>

    )
}

export default GameCard;
