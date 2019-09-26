import React from 'react';


const InputGame = ({id = "" ,value = "",type ="text"}) => (

    <input id={id}  value={value} type={type} className="input-game"/>
  
            
);

export default InputGame;