import React from 'react';
import '../sass/Card.scss';
import future1webm from '../img/future1.webm';
import future1mp4 from '../img/future1.mp4';




function Card(){
    return(
        <div className="card">

            <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">Back to the Future</span>
                </h4>
                <div className="card__details">
                    <ul>
                        <li>Lorem, ipsum dolor.</li>
                        <li>accusamus recusandae mollitia.</li>
                        <li>commodi dolorum excepturi.</li>
                        <li>veritatis voluptate aut.</li>
                        <li> Officiis, blanditiis?</li>
                    </ul>
                </div>
            </div>
            

            <div className="card__side card__side--back card__side--back-1">
                <div className='card__player-wrapper'>

                <video className="card__trailerVideo" muted autoPlay loop playsInline>
                        <source src={future1webm} type="video/webm"/>
                        <source src={future1mp4} type="video/mp4"/>
                        Not supported
                    </video>
                </div>
                
            </div>
        </div>
    )
}


export default Card;