import React from 'react';
import '../../sass/Card.scss';



function Card(props){
    return(
        <div className="card">

            {/* FRONT */}
            <div className="card__side card__side--front">

                <div className={`card__picture card__picture${props.myPostfix2dash}`}>
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className={`card__heading-span card__heading-span${props.myPostfix2dash}`}>
                        {props.myTitle}
                    </span>
                </h4>

                <div className={`card__details card__details${props.myPostfix1dash}`}>
                    <div className="card__details-quotes">
                        {`"${props.myQuote}"`}
                    </div>
                        
                    <div className="card__img">
                        <img src={props.myPicCard} alt="actor" 
                                className={`card__img-circle card__img-circle${props.myPostfix2dash}`}/>
                    </div>
                    
                    <div className="card__name-author">    
                        {props.myAuthor}
                    </div>
                   
                </div>
                
            </div>



            
            {/* BACK */}
            <div className={`card__side card__side--back card__side--back${props.myPostfix1dash}`}>

                <div className='card__wrapper'>
                    <video className="card__wrapper--video" muted autoPlay loop playsInline>
                        <source src={props.mySrce} type={props.myType}/>
                        Media is not supported
                    </video>
                </div>

                <div className="card__synopsis">                
                    <h3 className={`card__synopsis--year${props.myPostfix1dash}`}>
                        {props.myYear} <br/>
                        <span className="card__synopsis--star">
                            <img className={`card__synopsis--star${props.myPostfix1dash}`} src={props.myStar1} alt="star"/>
                        </span>
                    </h3>
            

                    <div className="card__synopsis--movie">
                        {props.mySynopsis}
                    </div>
                </div>

                
                <div class="card__cast">
                    <h4 >Cast</h4>
                    <ul>
                        <li><img src = "https://www.famousbirthdays.com/headshots/robert-downey-jr-2.jpg"/></li>
                        <li><img src = "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU1MTM0NzA2NzQ3MTg4NDQw/chris-evans-arrives-at-the-los-angeles-premiere-of-captain-america-the-winter-soldier-held-at-the-el-capitan-theatre-on-march-13-2014-in-hollywood-california-photo-by-michael-tran_filmmagicjpg-square.jpg"/></li>
                        <li><img src = "https://www.india-forums.com/images/celebrity/l_12804.jpg"/></li>
                        <li><img src = "https://imageresizer.static9.net.au/LYRtJfSVUFCURsyAlx6qdMXJzwI=/400x0/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FNetwork%2FImages%2Favengers300616Scarjo.jpg"/></li>
                        <li><img src="https://www.famousbirthdays.com/faces/boseman-chadwick-image.jpg"/></li>
                    </ul>
                </div>







            </div>
        </div>
    )
}

export default Card;