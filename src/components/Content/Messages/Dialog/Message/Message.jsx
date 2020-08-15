import React from "react";
import s from "./Message.module.scss";

const Message = (props) => {
    return (
        <div className={s.message}>
            <img className={s.ava} src="https://themified.com/friend-finder/images/users/user-1.jpg" alt=""/>
            <div className={s.info}>
                <h5 className={s.name}>{props.name}</h5>
                <span className={s.date}>{props.date}</span>
            </div>
            <div className={s.text}>{props.message}</div>
        </div>
    )
};

export default Message;
