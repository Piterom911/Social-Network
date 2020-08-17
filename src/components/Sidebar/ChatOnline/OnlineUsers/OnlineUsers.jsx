import React from "react";
import s from "./OnlineUsers.module.scss"

const OnlineUsers = (props) => {
    return (
        <li className={s.item}>
            <a href="/onlineUserChat" className={s.link}>
                <img src={props.ava} alt="" className={s.ava}/>
                <span className={s.dot}></span>
            </a>
        </li>
    )
};

export default OnlineUsers;