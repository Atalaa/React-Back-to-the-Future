import future1mp4 from '../img/future1.mp4';
import future2mp4 from '../img/future2.mp4';
import future3mp4 from '../img/future3.mp4';

import mjfox_card from '../img/mjfox_card.jpg'
import clloyd_card from '../img/clloyd_card.jpg'
import twilson_card from '../img/twilson_card.jpg'


import star1 from '../img/4-5star.png';
import star2 from '../img/4star.png';
import star3 from '../img/3-5star.png';


const json_trailer_cards = [ 
    {id: 1, 
    postfix2dash:"--1",
    title:"Back to the Future",
    postfix1dash:"-1",
    video_mp4:future1mp4,
    type_mp4:"video/mp4",
    quote:"When I began work on the first film, I was pretty much walking into unknown territory.",
    author:"— Michael J. Fox",
    pic_card:mjfox_card,
    year:"Back to the Future (1985)",
    imgStar:star1,
    synopsis:"Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown."},



    {id: 2, 
    postfix2dash:"--2",
    title:"Back to the Future II",
    postfix1dash:"-2",
    video_mp4: future2mp4,
    type_mp4:"video/mp4",
    quote:"I loved inventors who come up with new theories that solve problems like Albert Einstein.",
    author:"— Christopher Lloyd",
    pic_card:clloyd_card,
    year:"Back to the Future II (1989)",
    imgStar:star2,
    synopsis:"After visiting 2015, Marty McFly must repeat his visit to 1955 to prevent disastrous changes to 1985...without interfering with his first trip."},



    {id: 3,     
    postfix2dash:"--3",
    title:"Back to the Future III",
    postfix1dash:"-3",
    video_mp4: future3mp4,
    type_mp4:"video/mp4",
    quote:"Cowboys have always been my heroes, it's always been a dream of mine to appear in a western.",
    author:"— Thomas F. Wilson",
    pic_card:twilson_card,
    year:"Back to the Future III (1990)",
    imgStar:star3,
    synopsis:"Stranded in 1955, Marty McFly learns about the death of Doc Brown in 1885 and must travel back in time to save him. With no fuel readily available for the DeLorean, the two must figure how to escape the Old West before Emmett is murdered."}
];

export default json_trailer_cards; 