import React from 'react';


function Reviews({myPic, myPicName, myHeader, myDesc}){
    return(
        <ul className="reviews">
            <li>
                <figure className="reviews__shape">
                    <img className="reviews__img" src={myPic} alt="logo"/>
                    <figcaption className="reviews__caption">{myPicName}</figcaption>
                </figure>
                <div className="reviews__text">
                    <h3 className="headingTertiary utility-margin-bottom-small">{myHeader}</h3>
                    <p>{myDesc}</p>
                </div>
            </li>
        </ul>
    )
}

export default Reviews;