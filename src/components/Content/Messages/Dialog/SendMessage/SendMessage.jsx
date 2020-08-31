import React from "react";
import s from "./SendMessage.module.scss"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../../redux/state";

const SendMessage = (props) => {
    const sendNewMessage = (e) => {
        e.preventDefault();
        props.dispatch(sendMessageCreator());
    };
    const onNewMessageChange = (e) => {
        let value = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(value));
    };
    return (
        <form action="" className={s.form}>
            <textarea value={props.messages.newMessageBody} onChange={onNewMessageChange} className={s.text} placeholder="Type your message"></textarea>
            <button onClick={sendNewMessage} className={s.btn} type="submit">Send</button>
        </form>
    )
};

export default SendMessage;