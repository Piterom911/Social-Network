import React from "react";
import s from "./Sidebar.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faComments,
    faImages,
    faNewspaper,
    faUserFriends,
    faUserPlus,
    faUsers,
    faVideo
} from '@fortawesome/free-solid-svg-icons'
import Profile from "./Profile/Profile";
import {NavLink} from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            < Profile/>
            <Navigation/>
        </aside>
    )
};

export default Sidebar;