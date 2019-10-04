import React from 'react';
import './styles.css';

const NextPlayer = ({content}) =>(
        <h2 className="next-player" >Próximo jogador: {content.toUpperCase()}</h2>
)
    


export default NextPlayer;