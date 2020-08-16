import React from "react";
import s from "./Profile.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
    return (
        <div className={s.profile}>
            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="profile photo" className={s.ava}/>
            <h5 className={s.name}><a href="/myProfile" className={s.link}>Sarah Cruiz</a></h5>
            <span className={s.followers}><FontAwesomeIcon icon={faUserPlus} className={s.icon}/> 1,299 followers</span>
        </div>
    )
};

export default Profile;