import React from 'react';

function Audio({ idArtist, songArtist }){

    function playAudio(){
        const myAudio = document.getElementsByClassName("audio-element")[0];
        const musicBoxContainer = document.getElementsByClassName("musicBox")[0];

        musicBoxContainer.classList.add('playing');

        document.getElementsByClassName("playSong")[0].querySelector('i.fa').classList.remove('fa-play');
        document.getElementsByClassName("playSong")[0].querySelector('i.fa').classList.add('fa-pause');
        myAudio.play();


    }

    function pauseAudio(){
        const myAudio = document.getElementsByClassName("audio-element")[0];
        const musicBoxContainer = document.getElementsByClassName("musicBox")[0];

        musicBoxContainer.classList.remove('playing');

        document.getElementsByClassName("playSong")[0].querySelector('i.fa').classList.remove('fa-pause');
        document.getElementsByClassName("playSong")[0].querySelector('i.fa').classList.add('fa-play');

        myAudio.pause();
    }

    function handleClick(){
        const isPlaying = document.getElementsByClassName("musicBox")[0].classList.contains('playing');

        if(isPlaying){
            pauseAudio();
        } else {
            playAudio();
        }
    }

    return(
        <div>
            <button className="playSong">
                <i className="fa fa-play fa-3x" onClick={handleClick}></i>
            </button>

            <audio className="audio-element" src={songArtist}></audio>
        </div>
    )        
}

export default Audio;