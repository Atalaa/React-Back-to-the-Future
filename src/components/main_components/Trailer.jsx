import React from 'react';
import Card from './Card';

import '../../sass/Trailer.scss';
import json_trailer_cards from '../../json/json_trailer_cards';




function createCard(item){
    return(
        <Card 
            key={item.id} 
            myPostfix2dash={item.postfix2dash} 
            myTitle={item.title}
            myPostfix1dash={item.postfix1dash}
            mySrce={item.video_mp4} 
            myType={item.type_mp4}
            myQuote={item.quote}
            myAuthor={item.author} 
            myPicCard={item.pic_card}  
            myYear={item.year}
            myStar1={item.imgStar}
            mySynopsis={item.synopsis}
        />
    )
}


function Trailer(){
    return(
        <div className="section-trailer">
            <div className="utility-center-text utility-margin-bottom-big">
                <h2 className="heading-secondary">
                    Movie Trailers
                </h2>
            </div>
            <div className="container3">
                {json_trailer_cards.map(createCard)}
            </div>
        </div>
    )
}

export default Trailer;
