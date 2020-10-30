import star2 from '../img/4star.png';
import star1 from '../img/4-5star.png';
import star3 from '../img/3-5star.png';

import future1mp4 from '../img/future1.mp4';
import future2mp4 from '../img/future2.mp4';
import future3mp4 from '../img/future3.mp4';
import future1webm from '../img/future1.webm';
import future2webm from '../img/future2.webm';
import future3webm from '../img/future3.webm';

import flea_card from '../img/flea_card.jpg';
import ltom_card from '../img/ltom_card.jpg';
import cglover from '../img/cglover_card.jpg';
import eshue_card from '../img/eshue_card.jpg';
import ewood_card from '../img/ewood_card.jpg';
import smary_card from '../img/smary_card.jpg';
import bgale_card from '../img/bgale_card.jpg';
import mjfox_card from '../img/mjfox_card.jpg';
import clloyd_card from '../img/clloyd_card.jpg';
import twilson_card from '../img/twilson_card.jpg';
import jtolkan_card from '../img/jtolkan_card.jpg';
import rzemeckis_card from '../img/rzemeckis_card.jpg';


const me = {
  "name": "Rchidi",
  "lastname": "Aata-allah",
  "nationalities": ["Canadian", "French"],
  "livesin": "Toronto",
  "passions": ["Programming", "Video Games", "Movies", "Basket-Ball", "Soccer"],
  "interests": ["Education", "Sports"],
  "believes": ["Failures are not permanent, soon or later, You will succeed!"]
}

 me;
const json_trailer_cards = [ 
    {id: 1, 
    dashes:"--1",
    title:"Back to the Future",
    dash:"-1",
    video_mp4:future1mp4,
    video_webm:future1webm,
    quote:"When I began work on the first film, I was pretty much walking into unknown territory.",
    author:"— Michael J. Fox",
    pic_card:mjfox_card,
    year:"Back to the Future (1985)",
    imgStar:star1,
    synopsis:"Marty McFly is accidentally sent thirty years into the past in a time-traveling DeLorean      invented by the scientist Doc Brown.",
    cast_image1:mjfox_card,
    cast_image2:clloyd_card,
    cast_image3:twilson_card,
    cast_image4:ltom_card},


    {id: 2, 
    dashes:"--2",
    title:"Back to the Future II",
    dash:"-2",
    video_mp4: future2mp4,
    video_webm:future2webm,
    quote:"I loved inventors who come up with new theories that solve problems like Albert Einstein.",
    author:"— Christopher Lloyd",
    pic_card:clloyd_card,
    year:"Back to the Future II (1989)",
    imgStar:star2,
    synopsis:"After visiting 2015, Marty must repeat his visit to 1955 to prevent disastrous changes to 1985, without interfering with his first trip.",
    cast_image1:cglover,
    cast_image2:eshue_card,
    cast_image3:jtolkan_card,
    cast_image4:ewood_card},


    {id: 3,     
    dashes:"--3",
    title:"Back to the Future III",
    dash:"-3",
    video_mp4: future3mp4,
    video_webm:future3webm,
    quote:"Cowboys have always been my heroes, it's always been a dream of mine to appear in a western.",
    author:"— Thomas F. Wilson",
    pic_card:twilson_card,
    year:"Back to the Future III (1990)",
    imgStar:star3,
    synopsis:"Stranded in 1955, Marty McFly learns about the death of Doc Brown in 1885 and must travel back in time to save him.",
    cast_image1:flea_card,
    cast_image2:smary_card,
    cast_image3:rzemeckis_card,
    cast_image4:bgale_card}
];

export default json_trailer_cards; 