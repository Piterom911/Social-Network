import React from "react";
import s from "./Navigation.module.scss"
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNewspaper} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons'
import {faComments} from '@fortawesome/free-solid-svg-icons'
import {faImages} from '@fortawesome/free-solid-svg-icons'
import {faVideo} from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <ul className={s.navigation}>
            <li className={s.item}><FontAwesomeIcon className={`${s.icon} iGreen`} icon={faNewspaper}/><NavLink to="/posts" activeClassName={s.active}>My Newsfeed</NavLink></li>
            <li className={s.item}><FontAwesomeIcon className={`${s.icon} iPurple`} icon={faUsers}/><NavLink to="/users" activeClassName={s.active}>Random Users</NavLink></li>
            <li className={s.item}><FontAwesomeIcon className={`${s.icon} iPink`} icon={faUserFriends}/><NavLink to="/friends" activeClassName={s.active}>Friends</NavLink></li>
            <li className={s.item}><FontAwesomeIcon className={`${s.icon} iOrange`} icon={faComments}/><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></li>
            <li className={s.item}><FontAwesomeIcon className={`${s.icon} iBlue`} icon={faImages}/><NavLink to="/images" activeClassName={s.active}>Images</NavLink></li>
            <li className={s.item}><FontAwesomeIcon className={`${s.icon} iViolet`} icon={faVideo}/><NavLink to="/videos" activeClassName={s.active}>Videos</NavLink></li>
        </ul>
    )
};

export default Navigation;