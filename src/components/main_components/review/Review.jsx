import React from 'react';
import '../../../sass/Review.scss';


function Review(){
    return(
        <section className="sectionReview">
            <div className="utility-center-text utility-margin-bottom-big">
                <h2 className="headingSecondary">
                    Critics Consensus
                </h2>
            </div>

            <ul className="reviews">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
        </section>
    )
}

export default Review;