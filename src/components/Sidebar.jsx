import React from "react";
import s from "./Sidebar.module.scss"

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <ul>
                <li><a href="#notMatter">Profile</a></li>
                <li><a href="#notMatter">Messages</a></li>
                <li><a href="#notMatter">News</a></li>
                <li><a href="#notMatter">Music</a></li>
                <li><a href="#notMatter">Settings</a></li>
            </ul>
        </aside>
    )
};

export default Sidebar;