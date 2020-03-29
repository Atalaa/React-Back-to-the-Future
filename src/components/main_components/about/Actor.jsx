import React from 'react';


function Actor(props){
    return (
        <a className="composition__link" href={props.linkInfo}  rel="noreferrer noopener" target="_blank">
            <img src={props.actorImg} alt="actor" className={props.myClass}/>
        </a>
    )
}

export default Actor;
