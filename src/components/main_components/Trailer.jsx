import React from 'react';
import Card from './Card';
import 'animate.css/animate.css';
import '../../sass/Trailer.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import json_trailer_cards from '../../json/json_trailer_cards';


function createCard(item){
    return(
        <Card 
            key={item.id} 
            myDashes={item.dashes} 
            myTitle={item.title}
            myDash={item.dash}
            mySrce={item.video_mp4} 
            myType={item.type_mp4}
            myQuote={item.quote}
            myAuthor={item.author} 
            myPicCard={item.pic_card}  
            myYear={item.year}
            myStar={item.imgStar}
            mySynopsis={item.synopsis}
            myCastImage1={item.cast_image1}
            myCastImage2={item.cast_image2}
            myCastImage3={item.cast_image3}
            myCastImage4={item.cast_image4}
        />
    )
}


function Trailer(){
    return(
        <div className="sectionTrailer">
            <div className="utility-center-text utility-margin-bottom-big">
                <h2 className="headingSecondary">
                    Movie Trailers
                </h2>
            </div>

            <ScrollAnimation animateIn='fadeInUp' duration={1.5} animateOnce={true}>
                <div className="container3">
                    {json_trailer_cards.map(createCard)}
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Trailer;
