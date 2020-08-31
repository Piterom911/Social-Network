import React from "react";
import s from "./Dialog.module.scss";
import Message from "./Message/Message";
import SendMessage from "./SendMessage/SendMessage";

const Dialog = (props) => {

    const message = props.messages.messages.map( data => <Message ava={data.ava} me={data.me} name={data.name} date={data.time} message={data.message}/>);
    return (
        <div className={s.sendBox}>
            <div className={s.dialog}>
                { message }
            </div>
            <SendMessage dispatch={props.dispatch} messages={props.messages}/>
        </div>
    )
};

export default Dialog;
