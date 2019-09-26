import React from 'react';
import './styles.css';
const iconClose = ({onClick}) => (
    <a href="#" onClick={onClick}
    className="icon-close">
        <span className="content">Fechar</span>
    </a>
);

export default iconClose;