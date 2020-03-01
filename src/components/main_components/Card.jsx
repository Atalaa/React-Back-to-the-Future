import React from 'react';
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

                <div className="card__synopsis">                
                    <h3 className={`card__synopsis--year${props.myPostfix1dash}`}>
                        {props.myYear} <br/>
                        <span className="card__synopsis--star">
                            <img className={`card__synopsis--star${props.myPostfix1dash}`} src={props.myStar1} alt="star"/>
                        </span>
                    </h3>

                    <div className="card__synopsis--movie">
                        {props.mySynopsis}
                    </div>
                        
                </div>

                <div className="card__cast">
                    <h4 >Cast</h4>
                    <ul>
                        <li><img src={props.myCastImage1} alt="actor"/></li>
                        <li><img src={props.myCastImage2} alt="actor"/></li>
                        <li><img src={props.myCastImage3} alt="actor"/></li>
                        <li><img src={props.myCastImage4} alt="actor"/></li>
                    </ul>
                </div>
        
            </div>
        </div>
    )
}

export default Card;