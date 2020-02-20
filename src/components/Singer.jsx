import React from 'react';

function Singer(props){
    return(
        <div className="item">
            <div className="music-box">
                <img src={props.singerImg} alt="singer" className="music-box__img"/>
                <h3 className="heading-tertiary utility-margin-bottom-small">Explore the world</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis nihil a.
                </p>
            </div>
        </div>
    )
}

export default Singer;