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
                    <span className={props.myClass2}>{props.myTitle}</span>
                </h4>
                <div className={props.myCard}>
                    <p> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    
                </div>
            </div>
            

            <div className={props.myClass3}>
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