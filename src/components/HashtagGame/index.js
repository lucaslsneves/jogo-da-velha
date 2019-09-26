import React from 'react';
import CardGame from '../../objects/CardGame';
import PlayerGame from '../../objects/PlayerGame';
import './styles.css';

const HashtagGame = () =>{
    return(
    <CardGame>
        <ul className="hashtag-game">
             <li className="item"><PlayerGame/></li>
             <li className="item"><PlayerGame/></li>
             <li className="item"><PlayerGame /></li>

             <li className="item"><PlayerGame/></li>
             <li className="item"><PlayerGame/></li>
             <li className="item"><PlayerGame/></li>

             <li className="item"><PlayerGame/></li>
             <li className="item"><PlayerGame/></li>
             <li className="item"><PlayerGame/></li>
        </ul>
    </CardGame>
    )
    
}

export default HashtagGame;