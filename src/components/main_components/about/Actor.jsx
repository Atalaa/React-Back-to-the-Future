import React from 'react';


//destructuring
function Actor({actorImg, linkInfo, myClass}){
    return (
        <a className="composition__link" href={linkInfo}  rel="noreferrer noopener" target="_blank">
            <img src={actorImg} alt="actor" className={myClass}/>
        </a>
    )
}

export default Actor;
