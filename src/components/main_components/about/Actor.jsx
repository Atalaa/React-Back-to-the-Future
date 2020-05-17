import React from 'react';
import PropTypes from 'prop-types';


function Actor({actorImg, linkInfo, myClass}){
    return (
        <a className="composition__link" href={linkInfo}  rel="noreferrer noopener" target="_blank">
            <img src={actorImg} alt="actor" className={myClass}/>
        </a>
    )
}

Actor.propTypes = {
    actorImg: PropTypes.string.isRequired,
    linkInfo: PropTypes.string.isRequired,
    myClass:  PropTypes.string.isRequired
}

export default Actor;
