import React from 'react';
import TagGame from '../../objects/TagGame'
import './styles.css';


const HistoryGame = ({history,onClick}) => {
    
    return(
    <ol className="history-game">
        {history.map((item,key) => <li onClick={() => onClick(key)} key={key} className="action"><TagGame content={item}/></li>)}
    </ol>
  )

};

export default HistoryGame;