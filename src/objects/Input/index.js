import React from 'react';
import './styles.css';

const Input = ({id = "" ,value = "",type ="text"}) => (

    <input id={id}  value={value} type={type} className="input"/>
  
            
);

export default Input;