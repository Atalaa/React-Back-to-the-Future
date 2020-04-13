import React from 'react';
import 'react-h5-audio-player/src/styles.scss';
import AudioPlayer from 'react-h5-audio-player';


function Audio({songArtist}){
        return(
            <div>
                <AudioPlayer src={songArtist} />
            </div>
        )        
}

export default Audio;