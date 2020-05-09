import React, { useEffect, useRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function Quote(){
    const testRef = useRef(null);

    const textRef       = useRef(null);
    const movieRef      = useRef(null);
    const quoteLeftRef  = useRef(null);
    const quoteRightRef = useRef(null);
    
    const bgColorRef    = useRef(null);
    const bgColorH2Ref  = useRef(null);
    let   bgColorBool   = false;

    useEffect(() => {
        // testRef.current.click();
        quote();
    });
    

    

    return(
        <section ref={bgColorRef} className="sectionQuotes utility-center-text">
            <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>

                <h2 ref={bgColorH2Ref} className="utility-margin-bottom-big headingSecondary changeColorQuote">
                    Famous Movie Quotes
                </h2>

                <div className="quote">
                    <div ref={textRef} className="text"></div>      
                    <div ref={movieRef} className="movie"></div>
                    <i ref={quoteLeftRef} className="font-quote-l"></i>
                    <i ref={quoteRightRef} className="font-quote-r"></i>
                </div>

                <div className="test utility-center-text utility-margin-bottom-big">
                    <button ref={testRef} className="test__btn " onClick={quote}>
                        <span>New Quote</span>
                    </button>
                </div>

            </ScrollAnimation>
        </section>
    )
}

export default Quote;