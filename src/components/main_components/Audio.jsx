import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';


function Audio(props){
        return(
            <div>
                <AudioPlayer src={props.songArtist} />
            </div>
        )        
}

export default Audio;