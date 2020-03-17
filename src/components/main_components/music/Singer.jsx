import React from 'react';
import Audio from './Audio';


function Singer(props){
    return(
        <div className="item">
            <div className="musicBox">
                <img src={props.singerImg} alt="singer" className="musicBox__img"/>

                <h3 className="headingTertiary utility-margin-bottom-small">{props.artist}</h3>
                
                <p>
                 {props.info}
                </p>
                <Audio songArtist={props.song}/>
            </div>
            
        </div>
    )
}

export default Singer;