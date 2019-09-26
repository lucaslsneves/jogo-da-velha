import React from 'react';

import './styles.css';
import InputGame from '../InputGame';
import LabelGame from '../LabelGame';


const InputCheckbox = ({id = "",value = "",content = "",onClick}) =>(
    <>
    <InputGame type="checkbox" id={id} value={value} content={content}/>
    <LabelGame onClick={onClick} htmlFor={id} content={content}/>
    </>
)

export default InputCheckbox;