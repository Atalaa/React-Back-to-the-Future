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
            console.log(data);
            console.log(data[0]);
            alert(data[0].quote);
        })
        .catch(err => console.log(err))    
    }
    return(
        <div className="trailers utility-center-text utility-margin-bottom-big">
            <button className="trailers__btn" onClick={quote}>
                <span>Generate Quotes</span>
        
            </button>
        </div>            
    )
}

export default Quote;