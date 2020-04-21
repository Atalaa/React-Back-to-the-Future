import React from 'react';

import './Game';

const hidden_symbol = '❔';

//destructuring
function GameCard({imageOfCard, stateOfCard, index, onClick}){
    return(
        <div className={`memory__card ${stateOfCard}`} onClick={() => onClick(index)}>
        
            { 
                stateOfCard === 'hidden' ? 
                
                <div className="symbol">{hidden_symbol}</div> : 

                <img className="symbol_card" src={imageOfCard} style={{width:"75%"}} alt="movie-icon"/> 
            }

        </div>

    )
}
  
export default GameCard;
