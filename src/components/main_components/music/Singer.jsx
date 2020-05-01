import React, {useRef} from 'react';

import Audio from './Audio';


function Singer({id, singerImg, song, artist, info}){
    
    const musicBoxRef = useRef(null)

    return(
        <div className="item">
            <div ref={musicBoxRef} className="musicBox">
                <img src={singerImg} alt="singer" className="musicBox__img"/>

                <h3 className="headingTertiary utility-margin-bottom-small">{artist}</h3>
                
                <p>{info}</p>

                <Audio idArtist={id} songArtist={song} musicBoxRef={musicBoxRef} />
            </div>
            
        </div>
    )
}

export default Singer;