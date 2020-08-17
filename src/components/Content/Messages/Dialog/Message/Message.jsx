import React from "react";
import s from "./Message.module.scss";

const Message = (props) => {
    return (
        <div className={`${s.message}`} datame={props.me}>
            <img className={s.ava} src={props.ava} alt=""/>
            <div className={s.info}>
                <h5 className={s.name}>{props.name}</h5>
                <span className={s.date}>{props.date}</span>
            </div>
            <p className={s.text}>{props.message}</p>
        </div>
    )
};

export default Message;
