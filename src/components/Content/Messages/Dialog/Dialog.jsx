import React from "react";
import s from "./Dialog.module.scss";
import Message from "./Message/Message";

const Dialog = (props) => {

    const message = props.messages.map( data => <Message ava={data.ava} me={data.me} name={data.name} date={data.time} message={data.message}/>);
    return (
        <div className={s.dialog}>
            { message }
        </div>
    )
};

export default Dialog;
