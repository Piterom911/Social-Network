import React from "react";
import s from "./ChatOnline.module.scss"
import OnlineUsers from "./OnlineUsers/OnlineUsers";

const ChatOnline = () => {
    return (
        <div className={s.chat}>
            <div className={s.btn}>Chat Online</div>
            <ul className={s.list}>
                <OnlineUsers ava={"https://themified.com/friend-finder/images/users/user-2.jpg"}/>
                <OnlineUsers ava={"https://themified.com/friend-finder/images/users/user-3.jpg"}/>
                <OnlineUsers ava={"https://themified.com/friend-finder/images/users/user-4.jpg"}/>
                <OnlineUsers ava={"https://themified.com/friend-finder/images/users/user-5.jpg"}/>
                <OnlineUsers ava={"https://themified.com/friend-finder/images/users/user-6.jpg"}/>
                <OnlineUsers ava={"https://themified.com/friend-finder/images/users/user-7.jpg"}/>
                <OnlineUsers ava={"https://themified.com/friend-finder/images/users/user-8.jpg"}/>
                <OnlineUsers ava={"https://themified.com/friend-finder/images/users/user-9.jpg"}/>
                <OnlineUsers ava={"https://themified.com/friend-finder/images/users/user-10.jpg"}/>
            </ul>
        </div>
    )
};

export default ChatOnline;