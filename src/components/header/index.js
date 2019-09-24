import React from 'react';
import LogoCollab from '../../objects/LogoCollab';
import AboutLink from '../../objects/AboutLink'
import Menu from '../../objects/Menu';
import './styles.css';

const Header = ({onClick}) =>{
    return(
    <header className="header">
        <LogoCollab/>
        <AboutLink onClick={onClick}/>
        <Menu onClick={onClick}/>
    </header>
    );
}

export default Header;