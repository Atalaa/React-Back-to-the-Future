import huey from '../img/hlewis.jpg';
import chuck from '../img/cberry.jpg';
import soundChuck from '../sounds/cberry.mp3';
import soundHuey from '../sounds/back_in_time.mp3';
import starlighters from '../img/starlighters.jpg';
import soundStarlighters from '../sounds/angel.mp3';


const json_music_singers = [ 
    {id: 1, image: huey,  mp3: soundHuey, artist:"Huey Lewis and the News",
    info: "An American pop rock band. Their greatest success was \"The Power of Love\" and \"Back in Time\" as the soundtrack of Back to the Future."}, 

    {id: 2, image: chuck, mp3: soundChuck, artist:"Chuck Berry", 
    info: "\"Johnny B. Goode\" was the signature song performed by Marty McFly and the Starlighters during the bal."}, 

    {id: 3, image: starlighters, mp3: soundStarlighters, artist:"The Starlighters",
    info: "The band performed at the Enchantment Under the Sea dance. Marvin played the guitar and was the lead vocalist."} 
];

export default json_music_singers; 