import React from "react";
import s from "./Profile.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";

const Profile = () => {
    return (
        <div className={s.profile}>
            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="" className={s.ava}/>
            <h5 className={s.name}><NavLink to="/profile" className={s.link}>Sarah Cruiz</NavLink></h5>
            <span className={s.followers}><FontAwesomeIcon icon={faUserPlus} className={s.icon}/> 1,299 followers</span>
        </div>
    )
};

export default Profile;