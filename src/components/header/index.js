import React from 'react';
import LogoCollab from '../../objects/LogoCollab';
import AboutLink from '../../objects/AboutLink'
import MenuGame from '../../objects/MenuGame';
import './styles.css';

const Header = ({onClick}) =>{
    return(
    <header className="header">
        <LogoCollab/>
        <AboutLink onClick={onClick}/>
        <MenuGame onClick={onClick}/>
    </header>
    );
}

export default Header;