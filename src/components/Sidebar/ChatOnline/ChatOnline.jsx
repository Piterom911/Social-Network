import React from "react";
import s from "./ChatOnline.module.scss"
import OnlineUsers from "./OnlineUsers/OnlineUsers";

const ChatOnline = (props) => {
    const chat = props.chat.map( (img, index) => <OnlineUsers key={index} ava={img.ava}/>);
    return (
        <div className={s.chat}>
            <div className={s.btn}>Chat Online</div>
            <ul className={s.list}>
                { chat }
            </ul>
        </div>
    )
};

export default ChatOnline;