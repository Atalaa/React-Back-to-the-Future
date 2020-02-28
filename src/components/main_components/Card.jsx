import React from 'react';
import InfoMovie from './InfoMovie';

import json_cards_infoMovie from '../../json/json_cards_infoMovie';
import '../../sass/Card.scss';


function Card(props){
    return(
        <div className="card">

            {/* FRONT */}
            <div className="card__side card__side--front">

                <div className={`card__picture card__picture${props.myPostfix2dash}`}>
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className={`card__heading-span card__heading-span${props.myPostfix2dash}`}>
                        {props.myTitle}
                    </span>
                </h4>

                <div className={`card__details card__details${props.myPostfix1dash}`}>
                    <div className="card__details-quotes">
                        {`"${props.myQuote}"`}
                    </div>
                        
                    <div className="card__img">
                        <img src={props.myPicCard} alt="actor" 
                                className={`card__img-circle card__img-circle${props.myPostfix2dash}`}/>
                    </div>
                    
                    <div className="card__name-author">    
                        {props.myAuthor}
                    </div>
                   
                </div>
                
            </div>
            
            {/* BACK */}
            <div className={`card__side card__side--back card__side--back${props.myPostfix1dash}`}>

                <div className='card__wrapper'>
                    <video className="card__wrapper--video" muted autoPlay loop playsInline>
                        <source src={props.mySrce} type={props.myType}/>
                        Media is not supported
                    </video>
                </div>

                    {json_cards_infoMovie.map(createInfoMovie)}

            </div>
        </div>
    )
}

function createInfoMovie(item){
    return(
        <InfoMovie 
            key={item.id}
            myPostfix1dash={item.postfix1dash}
            myYear={item.year}
            myFullStar={item.fullStar}
            myHalfStar={item.halfStar}
        />

    )
}


export default Card;