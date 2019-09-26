import React from 'react';
import './styles.css';
import playerX from '../../img/player-x.png'
import playerO from '../../img/player-circle.png';

const PlayerGame = ({player = false}) =>{
    const players = [];
    players['x'] = playerX;
    players['o'] = playerO;
    
    return(<button className="player-game">
       {player && <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`}></img>}
    </button>);
}
export default PlayerGame;