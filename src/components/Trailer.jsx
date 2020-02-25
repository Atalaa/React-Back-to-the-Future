import React from 'react';
import Card from './Card';

import '../sass/Trailer.scss';


function Trailer(){
    return(
        <div className="section-trailer">
            <div className="utility-center-text utility-margin-bottom-big">
                <h2 className="heading-secondary">
                    Trailers
                </h2>
            </div>
            <div className="container3">
                <Card />
                <div>Card 2</div>
                <div>Card 3</div>
            </div>
        </div>
    )
}

export default Trailer;
