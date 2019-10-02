import React from 'react';
import TagGame from '../../objects/TagGame'
import './styles.css';
const changeHistory = () =>{

}
const HistoryGame = ({history}) => (
    <ol className="history-game">
        {history.map((item,i) => <li onClick={changeHistory} key={i} className="action"><TagGame content={item}/></li>)}
    </ol>
);

export default HistoryGame;