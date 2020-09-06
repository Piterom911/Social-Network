import React from "react";
import s from "./SendMessage.module.scss"

const SendMessage = (props) => {
    const sendNewMessage = (e) => {
        e.preventDefault();
        props.sendNewMessage();
    };
    const onNewMessageChange = (e) => {
        let value = e.target.value;
        props.newMessageChange(value);
    };
    return (
        <form action="" className={s.form}>
            <textarea value={props.newMessageBody} onChange={onNewMessageChange} className={s.text} placeholder="Type your message"></textarea>
            <button onClick={sendNewMessage} className={s.btn} type="submit">Send</button>
        </form>
    )
};

export default SendMessage;