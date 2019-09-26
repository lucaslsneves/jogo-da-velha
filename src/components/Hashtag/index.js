import React from 'react';
import CardGame from '../../objects/CardGame';
import Player from '../../objects/Player';
import './styles.css';

const Hashtag = () =>{
    return(
    <CardGame>
        <ul className="hashtag">
             <li className="item"><Player player="x"/></li>
             <li className="item"><Player player="o"/></li>
             <li className="item"><Player player="o"/></li>

             <li className="item"><Player player="o"/></li>
             <li className="item"><Player player="x"/></li>
             <li className="item"><Player player="o"/></li>

             <li className="item"><Player player="o"/></li>
             <li className="item"><Player player="o"/></li>
             <li className="item"><Player player="x"/></li>
        </ul>
    </CardGame>
    )
    
}

export default Hashtag;