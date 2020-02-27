import React from 'react';
import '../../sass/Card.scss';


function Card(props){
    return(
        <div className="card">

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
                    <div>
                        {props.myQuote}
                        <p className="card__quotes">{props.myAuthor}</p>
                    </div>
                </div>
                
            </div>
            

            <div className={`card__side card__side--back card__side--back${props.myPostfix1dash}`}>
                <div className='card__player-wrapper'>

                    <video className="card__trailerVideo" muted autoPlay loop playsInline>
                        <source src={props.mySrce} type={props.myType}/>
                        Not supported
                    </video>

                </div>
            </div>
        </div>
    )
}


export default Card;