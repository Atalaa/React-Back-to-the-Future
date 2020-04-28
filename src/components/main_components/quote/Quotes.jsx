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
            alert(`\"${data[0].quote}\" ${data[0].author}`); //HOVER TO SHOW THE MOVIE ANSWER
        })
        .catch(err => console.log(err))    
    }
    return(
        <section className="sectionQuotes">
            <div className="quote__card">
                <div className="quote__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ratione nulla? Sapiente nesciunt officia voluptas distinctio tempore, dolores esse explicabo officiis consectetur velit nostrum modi? Sunt autem animi nostrum corporis.
                </div>
            {/* <i class="fa fa-quote-left fab" data-reactid=".0.0.0"> </i> */}
            </div>

                {/* <div className="trailers utility-center-text utility-margin-bottom-big">
                    <button className="trailers__btn" onClick={quote}>
                        <span>Generate Quotes</span>
                    </button>
                </div> */}




            {/* <div className="un">
                
            </div>      
            <div className="deux">
                
            </div>    */}
        </section>
    )
}

export default Quote;