import React from 'react';
import './styles.css';

const LabelGame = ({content,htmlFor,onClick}) => {
   return(<label onClick={onClick} className="label-game" htmlFor={htmlFor}>{content}</label>)
}

export default LabelGame;