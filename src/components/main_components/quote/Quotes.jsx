import React from 'react';

function Quote(){

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
            // console.log(data);
            // console.log(data[0]);
            // alert(`\"${data[0].quote}\" ${data[0].author}`); //HOVER TO SHOW THE MOVIE ANSWER
            document.getElementsByClassName("text")[0].innerHTML = `"${data[0].quote}"`;
            document.getElementsByClassName("movie")[0].innerHTML = `- ${data[0].author} -`;

            document.getElementsByClassName("font-quote-l")[0].classList.add("fa", "fa-quote-left", "fa-3x");
            document.getElementsByClassName("font-quote-r")[0].classList.add("fa", "fa-quote-right", "fa-3x");
        })
        .catch(err => console.log(err))    
    }


    return(
        <section className="sectionQuotes utility-center-text">
            <h2 className="utility-margin-bottom-big headingSecondary changeColorQuote">Famous Movie Quotes</h2>

            <div className="quote">
                <div className="text"></div>      
                <div className="movie"></div>
                <i className="font-quote-l"></i>
                <i className="font-quote-r"></i>
            </div>

            <div className="test utility-center-text utility-margin-bottom-big">
                <button className="test__btn " onClick={quote}>
                    <span>Generate Quotes</span>
                </button>
            </div>
        </section>
    )
}

export default Quote;