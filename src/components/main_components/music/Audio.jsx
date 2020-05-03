import React, { useRef } from 'react';


function Audio(props){
    
    const audioElementRef = useRef(null);
    const btnPlaySongRef = useRef(null);


     //HANDCLICK
     function handleClick(){
        const isPlaying = props.musicBoxRef.current;
        isPlaying.classList.contains('playing') ? pauseAudio() : playAudio()
    }

    //HANDCLICKSTOP
    function handleClickStop(){
        stopAudio();
    }


    //PLAY 
    function playAudio(){
        audioElementRef.current.play();
        props.musicBoxRef.current.classList.add('playing');
        props.musicBoxRef.current.classList.remove('stop');
        btnPlaySongRef.current.querySelector('i.fa').classList.remove('fa-play');
        btnPlaySongRef.current.querySelector('i.fa').classList.add('fa-pause');
    }

    //PAUSE
    function pauseAudio(){
        audioElementRef.current.pause();
        props.musicBoxRef.current.classList.remove('playing');
        btnPlaySongRef.current.querySelector('i.fa').classList.remove('fa-pause');
        btnPlaySongRef.current.querySelector('i.fa').classList.add('fa-play');
    }

    //STOP
    function stopAudio(){
        audioElementRef.current.pause(); audioElementRef.current.currentTime = 0;
        props.musicBoxRef.current.classList.remove('playing');
        props.musicBoxRef.current.classList.add('stop');
        btnPlaySongRef.current.querySelector('i.fa').classList.remove('fa-pause');
        btnPlaySongRef.current.querySelector('i.fa').classList.add('fa-play');
    }


    return(
        <div className="audio-set">

            <div className="audio-playSong">
                <button ref={btnPlaySongRef} className="playSong" onClick={handleClick}>
                    <i className="fa fa-play fa-3x"></i>
                    <audio ref={audioElementRef}  className="audio-element" src={props.songArtist}></audio>
                </button>
            </div>

            <div className="audio-stopSong">
                <button className="stopSong" onClick={handleClickStop}>
                    <i className="fa fa-stop fa-3x"></i>
                </button>
            </div>
        </div>
    )        
    
}

export default Audio;