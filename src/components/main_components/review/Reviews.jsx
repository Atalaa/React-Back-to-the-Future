import React from 'react';


function Reviews(props){
    return(
        <ul className="reviews">
            <li>
                <figure className="reviews__shape">
                    <img className="reviews__img" src={props.myPic} alt="logo"/>
                    <figcaption className="reviews__caption">{props.myPicName}</figcaption>
                </figure>
                <div className="reviews__text">
                    <h3 className="headingTertiary utility-margin-bottom-small">{props.myHeader}</h3>
                    <p>{props.myDesc}</p>
                </div>
            </li>
        </ul>
    )
}

export default Reviews;