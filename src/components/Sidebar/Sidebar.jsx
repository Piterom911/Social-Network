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
import ChatOnline from "./ChatOnline/ChatOnline";
import ChatOnlineContainer from "./ChatOnline/ChatOnlineContainer";

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            < Profile/>
            <Navigation/>
            <ChatOnlineContainer/>
        </aside>
    )
};

export default Sidebar;