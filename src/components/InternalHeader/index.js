import React from 'react';
import './styles.css';
import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/iconClose';
import LogoCollab from '../../objects/LogoCollab';

const InternalHeader = () => (
    <header className="internal-header">
       <LogoCollab light/>
       <AboutLink className="-white"/>
       <IconClose/>
    </header>
);

export default InternalHeader;