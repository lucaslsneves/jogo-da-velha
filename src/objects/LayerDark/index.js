import React from 'react';
import './styles.css';
const About = ({children,className = ""}) => (
    <article className={`layer-dark ${className}`}>
        {children}
    </article>
)
    
;

export default About;