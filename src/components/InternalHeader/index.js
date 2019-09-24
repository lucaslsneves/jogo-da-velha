import React from 'react';
import './styles.css';
import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/iconClose';
import LogoCollab from '../../objects/LogoCollab';

const InternalHeader = ({onClick}) => (
    <header className="internal-header">
       <LogoCollab light/>
       <AboutLink onClick={onClick} className="-white"/>
       <IconClose onClick={onClick}/>
    </header>
);

export default InternalHeader;