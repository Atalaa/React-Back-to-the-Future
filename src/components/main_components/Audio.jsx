import React from 'react';
import 'react-h5-audio-player/src/styles.scss';
import AudioPlayer from 'react-h5-audio-player';


function Audio(props){
        return(
            <div>
                <AudioPlayer src={props.songArtist} />
            </div>
        )        
}

export default Audio;