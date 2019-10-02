import React from 'react';
import './styles.css';


const WrapperHashtagHistory = ({children,active,history}) =>(

    <div className={`wrapper-hashtagHistory ${active ? `-active` : ``}`}>
        {children}
    </div>
)   

export default WrapperHashtagHistory;
