import React,{useState} from 'react';
import './styles.css';
import playerX from '../../img/player-x.png'
import playerO from '../../img/player-circle.png';


const PlayerGame = ({player = false}) =>{
const [statePlayer,setStatePlayer] = useState(player);

const handleClick = () => setStatePlayer ("x");
      


    const players = [];
    players['x'] = playerX;
    players['o'] = playerO;
    
    return(<button onClick={handleClick} className="player-game">
       {statePlayer && <img src={players[statePlayer]} alt={`Jogador ${statePlayer.toUpperCase()}`}></img>}
    </button>);
}
export default PlayerGame;