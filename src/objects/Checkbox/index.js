import React from 'react';

import './styles.css';
import Input from '../Input';
import Label from '../Label';
const Checkbox = ({id = "",value = "",content = ""}) =>(
    <>
    <Input type="checkbox" id={id} value={value} content={content}/>
    <Label  htmlFor={id} content={content}/>
    </>
)

export default Checkbox;