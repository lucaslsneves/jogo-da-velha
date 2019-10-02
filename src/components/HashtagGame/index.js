import React from 'react';
import CardGame from '../../objects/CardGame';
import PlayerGame from '../../objects/PlayerGame';
import './styles.css';



const HashtagGame = ({historyGame,onClick,lastRound}) =>
   (
    <CardGame>
        <ul className="hashtag-game" >
           {historyGame[lastRound].state.map(({id,content}) => 
                <li key={id} onClick={() => content === '' && onClick(id)} className="item">
                    <PlayerGame id={id} content= {content}/>
                </li> 
            )}  
        </ul>
    </CardGame>
    )
    


export default HashtagGame;