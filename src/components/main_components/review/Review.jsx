import React from 'react';
import Reviews from './Reviews';
import '../../../sass/Review.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import json_review_reviews from '../../../json/json_review_reviews';
import waves from '../../../img/waves.mp4';




function createReviews(item){
    return(
        <Reviews 
            key={item.id}
            myPic={item.pic}
            myPicName={item.picName}
            myHeader={item.header}
            myDesc={item.desc}
        />
    )
}

function Review(){
    return(
        <section className="sectionReview">
            <div className="bg-video">
                <video className="bg-video__content" muted autoPlay loop playsInline>
                    <source src={waves} type="video/mp4"/>
                    {/* <source src={forestLullabyWebm} type="video/webm"/> */}
                    Your browser does not support the video tag.
                </video>            
            </div>

            <div className="utility-center-text utility-margin-bottom-big">
                <h2 className="headingSecondary">
                    Critics Consensus
                </h2>
            </div>
            <ScrollAnimation animateIn='fadeIn' duration={1.5} animateOnce={true}>
                {json_review_reviews.map(createReviews)}
            </ScrollAnimation>
            <h1 className="utility-center-text">Still in construction, coming soon...</h1>

        </section>
    )
}

export default Review;