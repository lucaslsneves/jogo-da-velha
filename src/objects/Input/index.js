import React from 'react';
import './styles.css';
import Label from '../Label';
const Input = ({value,id,content}) => (
   <>
    <input className="input" id={id} type="checkbox" value={value}/>
    <Label htmlFor={id} content={content}/>
  </>
            
);

export default Input;