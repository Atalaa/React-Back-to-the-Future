import React from 'react';
import Reviews from './Reviews';
import '../../../sass/Review.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import json_review_reviews from '../../../json/json_review_reviews';



function createReviews(item){
    return(
        <Reviews 
            key={item.id}
            myPic={item.pic}
            myHeader={item.header}
            myDesc={item.desc}
        />
    )
}

function Review(){
    return(
        <section className="sectionReview">
            <div className="utility-center-text utility-margin-bottom-big">
                <h2 className="headingSecondary">
                    Critics Consensus
                </h2>
            </div>
            <ScrollAnimation animateIn='fadeInUp' duration={1.5} animateOnce={true}>
                {json_review_reviews.map(createReviews)}
            </ScrollAnimation>

        </section>
    )
}

export default Review;