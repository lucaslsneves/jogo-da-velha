import React from 'react';
import './styles.css';
import AvatarProfile from '../../objects/AvatarProfile';
import AvatarLucas from '../../img/lucas.jpeg';
import SocialIcon from '../../objects/SocialIcon';
import GitHubIcon from '../../img/github-icon.png';
import LinkedinIcon from '../../img/linkedin-icon.png';
import FacebookIcon from '../../img/facebook-icon.png';
import TwitterIcon from '../../img/twitter-icon.png';
import InstagramIcon from '../../img/instagram-icon.png'; 
const UserProfile = () =>(
    <dl className="user-profile">
        <dd className="avatar">
             <AvatarProfile src={AvatarLucas} alt="Avatar Lucas"/>
        </dd>
        <dt className="title">Lucas Luz</dt>
        <dd className="description">Front-end developer HTML,CSS,JS e React</dd>
        <dd className="socials">
            <SocialIcon src={GitHubIcon} alt="Ícone do GitHub"/>
            <SocialIcon src={LinkedinIcon} alt="Ícone do Linkedin"/>
            <SocialIcon src={FacebookIcon} alt="Ícone do Facebook"/>
            <SocialIcon src={TwitterIcon} alt="Ícone do Twitter"/>
            <SocialIcon src={InstagramIcon} alt="Ícone do Instagram"/>
        </dd>
    </dl>
);

export default UserProfile;