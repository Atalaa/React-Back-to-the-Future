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
            

            <div className={`card__side card__side--back card__side--back${props.myPostfix1dash}`}>
                <div className='card__player-wrapper'>

                    <video className="card__trailerVideo" muted autoPlay loop playsInline>
                        <source src={props.mySrce} type={props.myType}/>
                        Media is not supported
                    </video>

                </div>
            </div>
        </div>
    )
}


export default Card;