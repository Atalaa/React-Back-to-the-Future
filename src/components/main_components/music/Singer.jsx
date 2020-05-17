import React, {useRef} from 'react';
import Audio from './Audio';
import PropTypes from 'prop-types';


function Singer({singerImg, song, artist, info}){
    
    const musicBoxRef = useRef(null);

    return(
        <div className="item">
            <div ref={musicBoxRef} className="musicBox">
                <h3 className="headingTertiary utility-margin-bottom-small">{artist}</h3>
                <img src={singerImg} alt="singer" className="musicBox__img"/>
                <p className="info-crew">{info}</p>
                
                <Audio songArtist={song} musicBoxRef={musicBoxRef} />
            </div>
            
        </div>
    )
}

Singer.propTypes = {
    singerImg: PropTypes.string.isRequired,
    song: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
}


export default Singer;