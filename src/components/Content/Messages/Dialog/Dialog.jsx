import React from "react";
import s from "./Dialog.module.scss";
import Message from "./Message/Message";
import SendMessageContainer from "./SendMessage/SendMessageContainer";

const Dialog = (props) => {

    const message = props.messages.map( (data, index) => <Message ava={data.ava} key={index} me={data.me} name={data.name} date={data.time} message={data.message}/>);
    return (
        <div className={s.sendBox}>
            <div className={s.dialog}>
                { message }
            </div>
            <SendMessageContainer/>
        </div>
    )
};

export default Dialog;
