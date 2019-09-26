import React from 'react';
import './styles.css';

const Card = ({children}) =>{
    return(
    <article className="card-game">
        {children}
    </article>
    );
}

export default Card;