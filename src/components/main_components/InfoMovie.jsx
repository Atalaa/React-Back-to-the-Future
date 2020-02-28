import React from 'react';


function InfoMovie(props){
    return(
        <div className="card__synopsis">                
            <h3 className={`card__synopsis--year${props.myPostfix1dash}`}>
                {props.myYear}
                <span className="card__synopsis--star">
                    <img className={`card__synopsis--star${props.myPostfix1dash}`} src={props.myFullStar} alt="star"/>
                    <img className={`card__synopsis--star${props.myPostfix1dash}`} src={props.myFullStar} alt="star"/>
                    <img className={`card__synopsis--star${props.myPostfix1dash}`} src={props.myFullStar} alt="star"/>
                    <img className={`card__synopsis--star${props.myPostfix1dash}`} src={props.myFullStar} alt="star"/>
                    <img className={`card__synopsis--star${props.myPostfix1dash}`} src={props.myHalfStar} alt="star"/>
                </span>
            </h3>
            

            <div className="card__synopsis--movie1">
                Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.
            </div>
        </div>
    )
}

export default InfoMovie;

