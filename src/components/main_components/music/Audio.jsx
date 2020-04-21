import React from 'react';

function Audio(props){
    
    const myAudio = document.getElementsByClassName("audio-element");
    const musicBoxContainer = document.getElementsByClassName("musicBox");
    const controls = document.getElementsByClassName("playSong");

    console.log(myAudio)

    //PLAY
    function playAudio(){
        if(props.idArtist === 1){
            //class audio-element
            myAudio[0].play();
            //class musicBox
            musicBoxContainer[0].classList.add('playing');
            musicBoxContainer[0].classList.remove('stop');
            //class playSong
            controls[0].querySelector('i.fa').classList.remove('fa-play');
            controls[0].querySelector('i.fa').classList.add('fa-pause');
        }

        if(props.idArtist === 2){
            //class audio-element
            myAudio[1].play();
            //class musicBox
            musicBoxContainer[1].classList.add('playing');
            musicBoxContainer[1].classList.remove('stop');
            //class playSong
            controls[1].querySelector('i.fa').classList.remove('fa-play');
            controls[1].querySelector('i.fa').classList.add('fa-pause');
        }

        if(props.idArtist === 3){
            //class audio-element
            myAudio[2].play();
            //class musicBox
            musicBoxContainer[2].classList.add('playing');
            musicBoxContainer[2].classList.remove('stop');
            //class playSong
            controls[2].querySelector('i.fa').classList.remove('fa-play');
            controls[2].querySelector('i.fa').classList.add('fa-pause');
        }
    }


    //PAUSE
    function pauseAudio(){
        if(props.idArtist === 1){
            //class audio-element
            myAudio[0].pause();
            //class musicBox
            musicBoxContainer[0].classList.remove('playing');
            //class playSong
            controls[0].querySelector('i.fa').classList.remove('fa-pause');
            controls[0].querySelector('i.fa').classList.add('fa-play');
        }

        if(props.idArtist === 2){
            //class audio-element
            myAudio[1].pause();
            //class musicBox
            musicBoxContainer[1].classList.remove('playing');
            //class playSong
            controls[1].querySelector('i.fa').classList.remove('fa-pause');
            controls[1].querySelector('i.fa').classList.add('fa-play');
        }

        if(props.idArtist === 3){
            //class audio-element
            myAudio[2].pause();
            //class musicBox
            musicBoxContainer[2].classList.remove('playing');
            //class playSong
            controls[2].querySelector('i.fa').classList.remove('fa-pause');
            controls[2].querySelector('i.fa').classList.add('fa-play');
        }
    }


    //STOP
    function stopAudio(){
        if(props.idArtist === 1){
            //class audio-element
            myAudio[0].pause();
            myAudio[0].currentTime = 0;
            //class musicBox
            musicBoxContainer[0].classList.remove('playing');
            musicBoxContainer[0].classList.add('stop');
            //class playSong    
            controls[0].querySelector('i.fa').classList.remove('fa-pause');
            controls[0].querySelector('i.fa').classList.add('fa-play');
        }

        if(props.idArtist === 2){
            //class audio-element
            myAudio[1].pause();
            myAudio[1].currentTime = 0;
            //class musicBox
            musicBoxContainer[1].classList.remove('playing');
            musicBoxContainer[1].classList.add('stop');
            //class playSong    
            controls[1].querySelector('i.fa').classList.remove('fa-pause');
            controls[1].querySelector('i.fa').classList.add('fa-play');
        }

        if(props.idArtist === 3){
            //class audio-element
            myAudio[2].pause();
            myAudio[2].currentTime = 0;
            //class musicBox
            musicBoxContainer[2].classList.remove('playing');
            musicBoxContainer[2].classList.add('stop');
            //class playSong    
            controls[2].querySelector('i.fa').classList.remove('fa-pause');
            controls[2].querySelector('i.fa').classList.add('fa-play');
        }


        
    }

    function handleClick(){
        const isPlaying1 = musicBoxContainer[0].classList.contains('playing');
        const isPlaying2 = musicBoxContainer[1].classList.contains('playing');
        const isPlaying3 = musicBoxContainer[2].classList.contains('playing');

        if(isPlaying1 || isPlaying2 || isPlaying3){
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
                {/* <button className={`playSong ${props.idArtist}`} onClick={handleClick}> */}
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