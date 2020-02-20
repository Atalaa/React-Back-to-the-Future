import React from 'react';


function Actor(props){
    return (
        <a href={props.link} target="_blank">
            <img src={props.actorImg} alt="actor" className={props.className}/>
        </a>
    )
}

export default Actor;
