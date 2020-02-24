import React from 'react';

import '../sass/Card.scss';


function Card(){
    return(
        <div className="card">
            <div className="card__side card__side--front">
                FRONT
            </div>
            <div className="card__side card__side--back card__side--back-1">
                BACK
            </div>
        </div>
    )
}


export default Card;