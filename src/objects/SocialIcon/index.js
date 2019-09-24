import React from 'react';


const SocialIcon = ({src = "",alt = "",href =""}) => (
    <a href={href}><img className="social-icon" src={src} alt={alt}/></a>
);

export default SocialIcon;