import React from 'react';
import Card from '../../objects/Card';
import Player from '../../objects/Player';
import './styles.css';

const Hashtag = () =>{
    return(
    <Card>
        <ul className="hashtag">
             <li className="item"><Player player="o"/></li>
             <li className="item"><Player player="o"/></li>
             <li className="item"><Player player="o"/></li>

             <li className="item"><Player player="o"/></li>
             <li className="item"><Player player="o"/></li>
             <li className="item"><Player player="o"/></li>

             <li className="item"><Player player="o"/></li>
             <li className="item"><Player player="o"/></li>
             <li className="item"><Player player="o"/></li>
        </ul>
    </Card>
    )
    
}

export default Hashtag;