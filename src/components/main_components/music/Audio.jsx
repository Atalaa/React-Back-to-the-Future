import React from 'react';

function Audio({ idArtist, songArtist }){

    function playAudio(){
        const myAudio = document.getElementsByClassName("audio-element")[0];
        const musicBoxContainer = document.getElementsByClassName("musicBox")[0];

        musicBoxContainer.classList.add('playing');
        musicBoxContainer.classList.remove('stop');

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

    function stopAudio(){
        const myAudio = document.getElementsByClassName("audio-element")[0];
        const musicBoxContainer = document.getElementsByClassName("musicBox")[0];

        musicBoxContainer.classList.remove('playing');
        musicBoxContainer.classList.add('stop');


        document.getElementsByClassName("playSong")[0].querySelector('i.fa').classList.remove('fa-pause');
        document.getElementsByClassName("playSong")[0].querySelector('i.fa').classList.add('fa-play');
        myAudio.pause();
        myAudio.currentTime = 0;
    }

    function handleClick(){
        const isPlaying = document.getElementsByClassName("musicBox")[0].classList.contains('playing');

        if(isPlaying){
            pauseAudio();
        } else {
            playAudio();
        }
    }

    function handleClickStop(){
        stopAudio();
    }



    return(
        <div className="audio-set">

            <div className="audio-playSong">
                <button className="playSong">
                    <i className="fa fa-play fa-3x" onClick={handleClick}></i>
                </button>
            </div>

            <div className="audio-stopSong">
                <button className="stopSong">
                    <i className="fa fa-stop fa-3x" onClick={handleClickStop}></i>
                </button>
            </div>

            <audio className="audio-element" src={songArtist}></audio>

        </div>
        

    )        
}

export default Audio;