import React from 'react';
import './styles.css';
import Label from '../Label';
const Input = ({value = "",id = "",content = "",type = "text"}) => (
   <>
    <input className="input" id={id} type={type} value={value}/>
    <Label htmlFor={id} content={content}/>
  </>
            
);

export default Input;