import React, { useEffect, useRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function Quote(){
    const testRef = useRef(null);

    const textRef = useRef(null);
    const movieRef = useRef(null);
    const quoteLeftRef = useRef(null);
    const quoteRightRef = useRef(null);


    useEffect(() => {
        // testRef.current.click();
        quote();
    },[]);
    

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
        })
        .catch(err => console.log('error is ', err))    
    }


    return(
        <section className="sectionQuotes utility-center-text">
            <h2 className="utility-margin-bottom-big headingSecondary changeColorQuote">
                Famous Movie Quotes
            </h2>

            <ScrollAnimation animateIn='fadeIn' duration={1.5} animateOnce={true}>

                <div className="quote">
                    <div ref={textRef} className="text"></div>      
                    <div ref={movieRef} className="movie"></div>
                    <i ref={quoteLeftRef} className="font-quote-l"></i>
                    <i ref={quoteRightRef} className="font-quote-r"></i>
                </div>

                <div className="test utility-center-text utility-margin-bottom-big">
                    <button ref={testRef} className="test__btn " onClick={quote}>
                        <span> Generate New Quote</span>
                    </button>
                </div>

            </ScrollAnimation>
        </section>
    )
}

export default Quote;