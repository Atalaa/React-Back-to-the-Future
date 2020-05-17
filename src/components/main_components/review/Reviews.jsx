import React from 'react';
import PropTypes from 'prop-types';


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

Reviews.propTypes = {
    myPic: PropTypes.string.isRequired,
    myPicName: PropTypes.string.isRequired,
    myHeader: PropTypes.string.isRequired,
    myDesc: PropTypes.string.isRequired
}

export default Reviews;