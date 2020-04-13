import React, { useState } from "react";
import GuessTry from './GuessTry';
import GameCard from './GameCard';
import imagesJson from '../../../json/images';
import shuffle from 'lodash.shuffle';
import ScrollAnimation from 'react-animate-on-scroll';


function Game(){

    const side1 = 6
    const side2 = 5
    const milliseconds = 750

    const [cards, setCards] = useState(generateCards);
    const [currentPair, setCurrentPair] = useState([]);
    const [guesses, setGuesses] = useState(0);
    const [indexOfCardsSuccessfullyPaired, setindexOfCardsSuccessfullyPaired] = useState([]);  


    // const won = indexOfCardsSuccessfullyPaired.length === cards.length;


    function generateCards() {
        const result = []
        const size = side1 * side2
        const candidates = shuffle(imagesJson)

        while (result.length < size) {
            const card = candidates.pop();
            result.push(card, card);
        }  
        return shuffle(result);
    }

    //getStateOfCard: prends la position d'une carte (index) et examine la paire en cours et les cartes deja appairees pour decider quelle est la valeur de stateOfCard a utiliser (hidden, visible, ect...) pour cette carte la.

    //getStateOfCard(index): cartes automatiquement toutes masquees car quand la partie demarre je n'ai appaire aucune carte, donc stateOfCard is hidden pour tout le monde

    function getStateOfCard(index) {
        const indexMatched = indexOfCardsSuccessfullyPaired.includes(index);

        if (currentPair.length < 2) {
            return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
        }
        if (currentPair.includes(index)) {
            return indexMatched ? 'justMatched' : 'justMismatched'
        }
        return indexMatched ? 'visible' : 'hidden'
    }
 

    function handleCardClick(index) {
        if (currentPair.length === 0){
          setCurrentPair([index]);
          return;
        }
        if (currentPair.length === 2){ //ignore click while a pair is created (success or error)
          return;
        }
        handleNewPairClosedBy(index);
    }

    function handleNewPairClosedBy(index) {//index = position {
        const newPair = [currentPair[0], index]
        setGuesses(guesses + 1)
        const matching = cards[newPair[0]] === cards[newPair[1]]
    
        setCurrentPair(newPair)
    
        if (matching){               
            setindexOfCardsSuccessfullyPaired([...indexOfCardsSuccessfullyPaired, ...newPair]);
        } 
        setTimeout(() => { setCurrentPair([]) }, milliseconds);// purge pair
    }


    return(
        <section className="sectionGame">
            <div className="gameTitle utility-center-text">
                <h2 className="headingSecondary__game">Memory Game <br/> Find all pairs</h2>
                {/* <h3 className="headingTertiary"> Find all pairs</h3> */}
                <div className="play">
                    <button className="play__btn" onClick={()=> {
                        setCards(generateCards); 
                        setGuesses(0);
                        setCurrentPair([]);
                        setindexOfCardsSuccessfullyPaired([]);
                    }}>

                        <span className="play__btn--visible">Play again ?</span>
                        <span className="play__btn--invisible">
                            <div className="play__btn--invisible-anchor">Enjoy!</div>
                        </span>
                    </button>
                </div>
            </div>


            <ScrollAnimation animateIn='fadeIn' duration={1.5} animateOnce={true}>
                <GuessTry guesses={guesses} />
                <div className="memory">
                    {cards.map((game_card, index) => (
                        <GameCard 
                            key={index} 
                            index={index} //position of a card
                            symbolOfCard={game_card.imge} 
                            stateOfCard={getStateOfCard(index)} //stateOfCard = 'hidden' at the beggining
                            onClick={handleCardClick}/>
                    ))}
                </div>
            </ScrollAnimation>
        </section>
    )

}

export default Game;
