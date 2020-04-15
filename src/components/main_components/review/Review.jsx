import React from 'react';
import Reviews from './Reviews';
import ScrollAnimation from 'react-animate-on-scroll';
import json_review_reviews from '../../../json/json_review_reviews';
import wavesMp4 from '../../../img/waves.mp4';
import wavesWebm from '../../../img/waves.webm';



function Review(){
    return(
        <section className="sectionReview">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop playsInline>
                    <source src={wavesMp4} type="video/mp4"/>
                    <source src={wavesWebm} type="video/webm"/>
                    Your browser does not support videos.
                </video>            
            </div>

            <div className="utility-center-text utility-margin-bottom-big">
                <h2 className="headingSecondary">
                    Critics Consensus
                </h2>
            </div>
            <ScrollAnimation animateIn='fadeIn' duration={1.5} animateOnce={true}>

                {json_review_reviews.map(item => (
                    <Reviews 
                        key={item.id}
                        myPic={item.pic}
                        myPicName={item.picName}
                        myHeader={item.header}
                        myDesc={item.desc}
                    />
                ))}

            </ScrollAnimation>
        </section>
    )
}

export default Review;