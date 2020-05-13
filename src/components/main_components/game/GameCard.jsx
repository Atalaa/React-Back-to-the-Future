import React from 'react';

import './Game';

const HIDDEN_SYMBOL = '❔';

//destructuring
function GameCard({imageOfCard, stateOfCard, index, onClick}){
    return(
        <div className={`memory_card ${stateOfCard}`} onClick={() => onClick(index)}>
        
            { 
                stateOfCard === 'hidden' ? 
                
                <div className="symbol">{HIDDEN_SYMBOL}</div> : 

                <img className="symbol_card" src={imageOfCard} style={{width:"75%"}} alt="movie-icon"/> 
            }

        </div>

    )
}
  
export default GameCard;
