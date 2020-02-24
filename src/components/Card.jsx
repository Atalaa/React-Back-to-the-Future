import React from 'react';

import '../sass/Card.scss';


function Card(){
    return(
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture--1">
                    &nbsp;
                </div>
                <div className="card__heading">
                    Heading
                </div>
                <div className="card__details">
                    Details about movie
                </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
                BACK
            </div>
        </div>
    )
}


export default Card;