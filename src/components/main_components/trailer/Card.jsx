import React from 'react';
import PropTypes from 'prop-types';


function Card(props){
    return(
        <div className="card">

            {/* FRONT */}
            <div className="card__side card__side--front">

                {/* poster movie */}
                <div className={`card__picture card__picture${props.myDashes}`}>
                    &nbsp;
                </div>

                {/* title movie */}
                <h4 className="card__heading">
                    <span className={`card__headingSpan card__headingSpan${props.myDashes}`}>
                        {props.myTitle}
                    </span>
                </h4>

                {/* content front card */}
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

                {/* video movie - playsInline not to enter full-screen mode*/}
                <div className='card__wrapper'>
                    <video className="card__video" autoPlay muted loop playsInline>
                        <source src={props.myMp4} type="video/mp4"/>
                        <source src={props.myWebm} type="video/webm"/>
                        Your browser does not support videos.
                    </video>
                </div>

                {/* synopsis movie */}
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

                {/* cast movie */}
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

Card.propTypes = {
    myDashes: PropTypes.string.isRequired,
    myTitle: PropTypes.string.isRequired,
    myDash: PropTypes.string.isRequired,
    myMp4: PropTypes.string.isRequired,
    myWebm: PropTypes.string.isRequired,
    myQuote: PropTypes.string.isRequired,
    myAuthor: PropTypes.string.isRequired,
    myPicCard: PropTypes.string.isRequired,
    myYear: PropTypes.string.isRequired,
    myStar: PropTypes.string.isRequired,
    mySynopsis: PropTypes.string.isRequired,
    myCastImage1: PropTypes.string.isRequired,
    myCastImage2: PropTypes.string.isRequired,
    myCastImage3: PropTypes.string.isRequired,
    myCastImage4: PropTypes.string.isRequired,
}

export default Card;