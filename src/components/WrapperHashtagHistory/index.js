import React,{useState} from 'react';
import './styles.css';
import HistoryGame from "../HistoryGame";
import HashtagGame from "../HashtagGame";
import InputCheckbox from "../../objects/InputCheckbox";

const WrapperHashtagHistory = () =>{
    
const [history, setHistory] = useState(["Início"]);
const [active,setActive] = useState(false);
const addHistory = (player,id) => {
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
  };

const changeHistory = key =>{
    setHistory(old => history.slice(0,key+1))
  }
  const showHideHistory = () =>{
    setActive((old) => old ? false : true);
    
}
    
    return(
    <div className={`wrapper-hashtagHistory ${active ? `-active` : ``}`}>
        <HashtagGame callback={addHistory} />
        <InputCheckbox onClick={showHideHistory} id="checkbox" value="show" content="Mostar eventos" />
        <HistoryGame onClick={changeHistory} history={history} />
    </div>
)}   

export default WrapperHashtagHistory;
