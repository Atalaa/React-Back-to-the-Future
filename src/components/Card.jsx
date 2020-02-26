import React from 'react';
import '../sass/Card.scss';



function Card(props){
    return(
        <div className="card">

            <div className="card__side card__side--front">
                <div className={props.myClass1}>
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className={props.myClass2}>{props.title}</span>
                </h4>
                <div className="card__details">
                    <p className="card__details card__details-desc">
                        favicon
                    </p>
                    
                </div>
            </div>
            

            <div className={props.myClass3}>
                <div className='card__player-wrapper'>

                <video className="card__trailerVideo" muted autoPlay loop playsInline>
                        <source src={props.srce} type={props.type}/>
                        Not supported
                    </video>
                </div>
                
            </div>
        </div>
    )
}


export default Card;