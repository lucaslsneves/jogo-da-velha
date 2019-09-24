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
            <SocialIcon href="https://github.com/lucasluz99" src={GitHubIcon} alt="Ícone do GitHub"/>
            <SocialIcon href="https://www.linkedin.com/" src={LinkedinIcon} alt="Ícone do Linkedin"/>
            <SocialIcon href="https://www.facebook.com/" src={FacebookIcon} alt="Ícone do Facebook"/>
            <SocialIcon href="https://twitter.com/" src={TwitterIcon} alt="Ícone do Twitter"/>
            <SocialIcon href="https://instagram.com" src={InstagramIcon} alt="Ícone do Instagram"/>
        </dd>
    </dl>
);

export default UserProfile;