import React from 'react';
import Audio from './Audio';

function Singer({id, singerImg, song, artist, info}){
    return(
        <div className="item">
            <div className="musicBox">
                <img src={singerImg} alt="singer" className="musicBox__img"/>

                <h3 className="headingTertiary utility-margin-bottom-small">{artist}</h3>
                
                <p>
                 {info}
                </p>
                <Audio idArtist={id} songArtist={song} />
            </div>
            
        </div>
    )
}

export default Singer;