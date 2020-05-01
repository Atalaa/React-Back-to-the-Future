import React, { useRef, useEffect } from 'react';

function Audio(props){
    
    const artist = props.idArtist;
    const audioElementRef = useRef(null)
    const playSongRef = useRef(null)

    // useEffect


    //PLAY 
    function playAudio(){

        switch(artist){
            case 1:
                audioElementRef.current.play();
                props.musicBoxRef.current.classList.add('playing');
                props.musicBoxRef.current.classList.remove('stop');
                playSongRef.current.querySelector('i.fa').classList.remove('fa-play');
                playSongRef.current.querySelector('i.fa').classList.add('fa-pause');
                break;

            case 2:
                audioElementRef.current.play();
                props.musicBoxRef.current.classList.add('playing');
                props.musicBoxRef.current.classList.remove('stop');
                playSongRef.current.querySelector('i.fa').classList.remove('fa-play');
                playSongRef.current.querySelector('i.fa').classList.add('fa-pause');
                break;

            default:
                audioElementRef.current.play();
                props.musicBoxRef.current.classList.add('playing');
                props.musicBoxRef.current.classList.remove('stop');
                playSongRef.current.querySelector('i.fa').classList.remove('fa-play');
                playSongRef.current.querySelector('i.fa').classList.add('fa-pause');
        }
    }


    //PAUSE
    function pauseAudio(){

        switch(artist){
            case 1:
                audioElementRef.current.pause();
                props.musicBoxRef.current.classList.remove('playing');
                playSongRef.current.querySelector('i.fa').classList.remove('fa-pause');
                playSongRef.current.querySelector('i.fa').classList.add('fa-play');
                break;

            case 2:
                audioElementRef.current.pause();
                props.musicBoxRef.current.classList.remove('playing');
                playSongRef.current.querySelector('i.fa').classList.remove('fa-pause');
                playSongRef.current.querySelector('i.fa').classList.add('fa-play');
                break;

            default:
                audioElementRef.current.pause();
                props.musicBoxRef.current.classList.remove('playing');
                playSongRef.current.querySelector('i.fa').classList.remove('fa-pause');
                playSongRef.current.querySelector('i.fa').classList.add('fa-play');
        }
    }


    // STOP
    function stopAudio(){

        switch(artist){
            case 1:
                audioElementRef.current.pause();
                audioElementRef.current.currentTime = 0;
                props.musicBoxRef.current.classList.remove('playing');
                props.musicBoxRef.current.classList.add('stop');
                playSongRef.current.querySelector('i.fa').classList.remove('fa-pause');
                playSongRef.current.querySelector('i.fa').classList.add('fa-play');
                break;

            case 2:
                audioElementRef.current.pause();
                audioElementRef.current.currentTime = 0;
                props.musicBoxRef.current.classList.remove('playing');
                props.musicBoxRef.current.classList.add('stop');
                playSongRef.current.querySelector('i.fa').classList.remove('fa-pause');
                playSongRef.current.querySelector('i.fa').classList.add('fa-play');
                break;

            default:
                audioElementRef.current.pause();
                audioElementRef.current.currentTime = 0;
                props.musicBoxRef.current.classList.remove('playing');
                props.musicBoxRef.current.classList.add('stop');
                playSongRef.current.querySelector('i.fa').classList.remove('fa-pause');
                playSongRef.current.querySelector('i.fa').classList.add('fa-play');
        }
    }


    //HANDCLICK
    function handleClick(){
        const isPlaying = props.musicBoxRef.current;
        isPlaying.classList.contains('playing') ? pauseAudio() : playAudio()
    }


    //HANDCLICKSTOP
    function handleClickStop(){
        stopAudio();
    }

   
    return(
        <div className="audio-set">

            <div className="audio-playSong">
                <button ref={playSongRef} className="playSong" onClick={handleClick}>
                    <i className="fa fa-play fa-3x"></i>
                    <audio ref={audioElementRef} className="audio-element" src={props.songArtist}></audio>
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