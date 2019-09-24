import React from 'react';
import './styles.css';
import AvatarProfile from '../../objects/AvatarProfile';
import AvatarLucas from '../../img/lucas.jpeg';
const UserProfile = () =>(
    <dl className="user-profile">
        <dd className="avatar">
        <AvatarProfile src={AvatarLucas} alt="Avatar Lucas"/>
        </dd>
        <dt className="title">Lucas Luz</dt>
        <dd className="description">Front-end developer HTML,CSS,JS e React</dd>
    </dl>
);

export default UserProfile;