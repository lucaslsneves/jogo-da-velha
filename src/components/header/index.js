import React from 'react';
import Logo from '../../objects/Logo';
import AboutLink from '../../objects/AboutLink'
import Menu from '../../objects/Menu';
import './styles.css';

const Header = () =>{
    return(
    <header className="header">
        <Logo/>
        <AboutLink/>
        <Menu/>
    </header>
    );
}

export default Header;