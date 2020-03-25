import React from 'react';


function Card(props){
    return(
        <div className="card">

            {/* FRONT */}
            <div className="card__side card__side--front">
                <div className={`card__picture card__picture${props.myDashes}`}>
                    &nbsp;
                </div>


                <h4 className="card__heading">
                    <span className={`card__headingSpan card__headingSpan${props.myDashes}`}>
                        {props.myTitle}
                    </span>
                </h4>


                <div className={`card__details card__details${props.myDash}`}>
                    <div className="card__quotes">
                        {`"${props.myQuote}"`}
                    </div>
                        
                    <div className="card__img">
                        <img src={props.myPicCard} alt="actor" 
                        className={`card__imgCircle card__imgCircle${props.myDashes}`}/>
                    </div>
                    
                    <div className="card__nameAuthor">    
                        {props.myAuthor}
                    </div>  
                </div>
            </div>

            
            {/* BACK  we have 3 backside cards --back1,2,3*/}
            <div className={`card__side card__side--back card__side--back${props.myDash}`}>

                <div className='card__wrapper'>
                    <video className="card__video" muted autoPlay loop playsInline>
                        <source src={props.mySrce} type={props.myType}/>
                        Media is not supported

                    </video>
                </div>


                <div className="card__synopsis">                
                    <h3 className={`card__year${props.myDash}`}>
                        {props.myYear} <br/>
                        <span className="card__star">
                            <img className={`card__star${props.myDash}`} src={props.myStar} alt="star"/>
                        </span>
                    </h3>

                    <div className="card__movie">
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