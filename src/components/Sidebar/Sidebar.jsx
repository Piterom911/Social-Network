import React from "react";
import s from "./Sidebar.module.scss"
import Profile from "./Profile/Profile";
import Navigation from "./Navigation/Navigation";
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