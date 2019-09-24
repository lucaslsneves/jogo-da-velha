import React from 'react';
import './styles.css';


const Menu = ({onClick}) =>{
    return(
    <a 
     className="menu"
     href="#menu" 
     onClick={onClick}>
        <span className="middle">Menu</span>
    </a>)
};

export default Menu;