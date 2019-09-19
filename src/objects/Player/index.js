import React from 'react';
import './styles.css';
import playerX from '../../img/player-x.png'
const Player = () =>{
    return(<button className="player">
        <img src={playerX} alt="Jogador X"></img>
    </button>);
}
export default Player;