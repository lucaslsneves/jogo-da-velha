import React,{useState} from 'react';
import './styles.css';
import HistoryGame from "../HistoryGame";
import HashtagGame from "../HashtagGame";
import InputCheckbox from "../../objects/InputCheckbox";

const WrapperHashtagHistory = () =>{
    
const [history, setHistory] = useState(["Início"]);
const [active,setActive] = useState(false);
const [nextPlayer,setNextPlayer] = useState("x");
const [lastRound,setLastRound] = useState(0);
   
const [historyGame,setHistoryGame] = useState(
    [
        {
        round:0,
        state:[
         {id:1,content: ''},
         {id:2,content: ''},
         {id:3,content: ''},
         {id:4,content: ''},
         {id:5,content: ''},
         {id:6,content: ''},
         {id:7,content: ''},
         {id:8,content: ''},
         {id:9,content: ''}]
       }
   ]
     );

const addHistory = (player,id) => {
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
  };

const changeHistory = key =>{
    setLastRound(key);
    setHistory(old => old.slice(0,key+1))
    setHistoryGame(old => old.slice(0,key+1));
       
    
  }
  const showHideHistory = () =>{
    setActive((old) => old ? false : true);
    
}
 
const handleClick  = (id) => {
    setHistoryGame(old => [...old,{
        round:lastRound +1,
        state:old[lastRound].state.map(player => player.id === id  ? {id,content:nextPlayer} : player)
    }])
    setLastRound(old => ++old)
    addHistory(nextPlayer);
    setNextPlayer(old => old === "x" ? "o" : "x");     
   
}
    
    return(
    <div className={`wrapper-hashtagHistory ${active ? `-active` : ``}`}>
        <HashtagGame lastRound={lastRound} historyGame={historyGame} onClick={handleClick} />
        <InputCheckbox onClick={showHideHistory} id="checkbox" value="show" content="Mostar eventos" />
        <HistoryGame onClick={changeHistory} history={history} />
    </div>
)}   

export default WrapperHashtagHistory;
