import future1mp4 from '../img/future1.mp4';
import future2mp4 from '../img/future2.mp4';
import future3mp4 from '../img/future3.mp4';

import mjfox_card from '../img/mjfox_card.jpg'
import clloyd_card from '../img/clloyd_card.jpg'
import twilson_card from '../img/twilson_card.jpg'


const json_trailer_cards = [ 
    {id: 1, 
    postfix2dash:"--1",
    title:"Back to the Future",
    postfix1dash:"-1",
    video_mp4:future1mp4,
    type_mp4:"video/mp4",
    quote:"When I began work on the first film, I was pretty much walking into unknown territory.",
    author:"— Michael J. Fox",
    pic_card:mjfox_card},


    {id: 2, 
    postfix2dash:"--2",
    title:"Back to the Future II",
    postfix1dash:"-2",
    video_mp4: future2mp4,
    type_mp4:"video/mp4",
    quote:"I loved inventors who come up with new theories that solve problems like Albert Einstein.",
    author:"— Christopher Lloyd",
    pic_card:clloyd_card},


    {id: 3,     
    postfix2dash:"--3",
    title:"Back to the Future III",
    postfix1dash:"-3",
    video_mp4: future3mp4,
    type_mp4:"video/mp4",
    quote:"Cowboys have always been my heroes, it's always been a dream of mine to appear in a western.",
    author:"— Thomas F. Wilson",
    pic_card:twilson_card}
];

export default json_trailer_cards; 