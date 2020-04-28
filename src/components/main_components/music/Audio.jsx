import React from 'react';

function Audio(props){
    const myAudio = document.getElementsByClassName("audio-element");
    const musicBoxContainer = document.getElementsByClassName("musicBox");
    const controls = document.getElementsByClassName("playSong");
    const artist = props.idArtist;


//PLAY 
    function playAudio(audio1, audio2, audio3, musBox1, musBox2, musBox3, control1, control2, control3){

        switch(artist){
            case 1:
                audio1.play();
                musBox1.classList.add('playing');
                musBox1.classList.remove('stop');
                control1.querySelector('i.fa').classList.remove('fa-play');
                control1.querySelector('i.fa').classList.add('fa-pause');
                break;

            case 2:
                audio2.play();
                musBox2.classList.add('playing');
                musBox2.classList.remove('stop');
                control2.querySelector('i.fa').classList.remove('fa-play');
                control2.querySelector('i.fa').classList.add('fa-pause');
                break;

            default:
                audio3.play();
                musBox3.classList.add('playing');
                musBox3.classList.remove('stop');
                control3.querySelector('i.fa').classList.remove('fa-play');
                control3.querySelector('i.fa').classList.add('fa-pause');
        }
    }


//PAUSE
    function pauseAudio(audio1, audio2, audio3, musBox1, musBox2, musBox3, control1, control2, control3){

        switch(artist){
            case 1:
                audio1.pause();
                musBox1.classList.remove('playing');
                control1.querySelector('i.fa').classList.remove('fa-pause');
                control1.querySelector('i.fa').classList.add('fa-play');
                break;

            case 2:
                audio2.pause();
                musBox2.classList.remove('playing');
                control2.querySelector('i.fa').classList.remove('fa-pause');
                control2.querySelector('i.fa').classList.add('fa-play');
                break;

            default:
                audio3.pause();
                musBox3.classList.remove('playing');
                control3.querySelector('i.fa').classList.remove('fa-pause');
                control3.querySelector('i.fa').classList.add('fa-play');
        }
    }


// STOP
    function stopAudio(audio1, audio2, audio3, musBox1, musBox2, musBox3, control1, control2, control3){

        switch(artist){
            case 1:
                audio1.pause();
                audio1.currentTime = 0;
                musBox1.classList.remove('playing');
                musBox1.classList.add('stop');
                control1.querySelector('i.fa').classList.remove('fa-pause');
                control1.querySelector('i.fa').classList.add('fa-play');
                break;

            case 2:
                audio2.pause();
                audio2.currentTime = 0;
                musBox2.classList.remove('playing');
                musBox2.classList.add('stop');
                control2.querySelector('i.fa').classList.remove('fa-pause');
                control2.querySelector('i.fa').classList.add('fa-play');
                break;

            default:
                audio3.pause();
                audio3.currentTime = 0;
                musBox3.classList.remove('playing');
                musBox3.classList.add('stop');
                control3.querySelector('i.fa').classList.remove('fa-pause');
                control3.querySelector('i.fa').classList.add('fa-play');
        }
    }


//HANDCLICK
    function handleClick(){
        const [isPlaying1, isPlaying2, isPlaying3] = musicBoxContainer;

        isPlaying1.classList.contains('playing') || 
        isPlaying2.classList.contains('playing') || 
        isPlaying3.classList.contains('playing') ? 
        pauseAudio(...myAudio, ...musicBoxContainer, ...controls) : 
        playAudio(...myAudio, ...musicBoxContainer, ...controls)
    }

//HANDCLICKSTOP
    function handleClickStop(){
        stopAudio(...myAudio, ...musicBoxContainer, ...controls);
    }


   
    return(
        <div className="audio-set">

            <div className="audio-playSong">
                <button className="playSong" onClick={handleClick}>
                    <i className="fa fa-play fa-3x"></i>
                    <audio className="audio-element" src={props.songArtist}></audio>
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