import React from 'react';
import Card from './Card';
import '../sass/Trailer.scss';
import json_trailer_cards from '../json/json_trailer_cards';



function createCard(item){
    return(
        <Card key={item.id} 
            myClass1={item.class1} 
            myClass2={item.class2} 
            myTitle={item.title}
            myCard={item.card}
            myClass3={item.class3} 
            mySrce={item.video_mp4} 
            myType={item.type_mp4}/>
    )
}


function Trailer(){
    return(
        <div className="section-trailer">
            <div className="utility-center-text utility-margin-bottom-big">
                <h2 className="heading-secondary">
                    Trailers
                </h2>
            </div>
            <div className="container3">
                {json_trailer_cards.map(createCard)}
            </div>
        </div>
    )
}

export default Trailer;
