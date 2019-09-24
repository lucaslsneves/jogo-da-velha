import React from 'react';
import './styles.css';
import AvatarProfile from '../../objects/AvatarProfile';
import AvatarLucas from '../../img/lucas.jpeg';
const UserProfile = () =>(
    <dl>
        <dd>
        <AvatarProfile src={AvatarLucas} alt="Avatar Lucas"/>
        </dd>
        <dt>Lucas Luz</dt>
        <dd>Front-end developer HTML,CSS,JS e React</dd>
    </dl>
);

export default UserProfile;