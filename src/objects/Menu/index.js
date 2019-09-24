import React from 'react';
import './styles.css';

const handleClick = () =>{
    console.log("oi");
}
const Menu = () =>{
    return(<a className="menu" href="#menu" onClick={handleClick} ><span className="middle">Menu</span></a>)
};

export default Menu;