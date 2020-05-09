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
    

    function quote(){        
        fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
                "x-rapidapi-key": "hjhBt7XE1Kmsh2YInKDyvKxfSPY4p1kY06cjsnz9ck6MUQqKdV"
            }
        })
        .then(response => response.json())
        .then(data => {
            textRef.current.innerHTML = `"${data[0].quote}"`;
            movieRef.current.innerHTML = `- ${data[0].author} -`;
            quoteLeftRef.current.classList.add("fa", "fa-quote-left", "fa-3x");
            quoteRightRef.current.classList.add("fa", "fa-quote-right", "fa-3x");

            if(bgColorBool){
                bgColorRef.current.style.backgroundImage = "linear-gradient(45deg, #000, #fff)";
                bgColorH2Ref.current.style.backgroundImage = "linear-gradient(to bottom, #240b36, #11998e)";
                testRef.current.style.backgroundImage = "linear-gradient(45deg, #000, #fff)";
                bgColorBool = false;
            }else{
                bgColorRef.current.style.backgroundImage = "linear-gradient(45deg, #480048, #c04848)";
                bgColorH2Ref.current.style.backgroundImage = "linear-gradient(to bottom, #ee0979, #ff6a00)";
                testRef.current.style.backgroundImage = "linear-gradient(45deg, #480048, #c04848)";
                bgColorBool = true;
            }
        })
        .catch(err => console.log('error is ', err))    
    }


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