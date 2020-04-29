import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function Quote(){

    function quote(){
        setTimeout(() => {
            document.getElementsByClassName('text')[0].style.display="block"
            document.getElementsByClassName('movie')[0].style.display="block"
            document.getElementsByClassName('font-quote-l')[0].style.display="inline";
            document.getElementsByClassName('font-quote-r')[0].style.display="inline";
        }, 500)
        

        fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
                "x-rapidapi-key": "hjhBt7XE1Kmsh2YInKDyvKxfSPY4p1kY06cjsnz9ck6MUQqKdV"
            }
        })
        .then(response => response.json())
        .then(data => {
            document.getElementsByClassName("text")[0].innerHTML = `"${data[0].quote}"`;
            document.getElementsByClassName("movie")[0].innerHTML = `- ${data[0].author} -`;
            document.getElementsByClassName("font-quote-l")[0].classList.add("fa", "fa-quote-left", "fa-3x");
            document.getElementsByClassName("font-quote-r")[0].classList.add("fa", "fa-quote-right", "fa-3x");
        })
        .catch(err => console.log('error is ', err))    
    }


    function reset(){
        document.getElementsByClassName('text')[0].style.display="none";
        document.getElementsByClassName('movie')[0].style.display="none";
        document.getElementsByClassName('font-quote-l')[0].style.display="none";
        document.getElementsByClassName('font-quote-r')[0].style.display="none";
    }



    return(
        <section className="sectionQuotes utility-center-text">
            <h2 className="utility-margin-bottom-big headingSecondary changeColorQuote">
                Famous Movie Quotes
            </h2>

            <ScrollAnimation animateIn='fadeIn' duration={1.5} animateOnce={true}>

                <div className="quote">
                    <div className="text"></div>      
                    <div className="movie"></div>
                    <i className="font-quote-l"></i>
                    <i className="font-quote-r"></i>
                </div>

                <div className="test utility-center-text utility-margin-bottom-big">
                    <button className="test__btn blank" onClick={reset}>
                        <span>Reset</span>
                    </button>
                    <span>&nbsp;</span>
                    <button className="test__btn " onClick={quote}>
                        <span>New Quote</span>
                    </button>
                </div>
            </ScrollAnimation>
        </section>
    )
}

export default Quote;