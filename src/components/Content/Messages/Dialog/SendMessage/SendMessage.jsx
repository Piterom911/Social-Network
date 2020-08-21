import React from "react";
import s from "./SendMessage.module.scss"

const SendMessage = () => {
    const newMessageElement = React.createRef();
    const sendNewMessage = () => {
        alert(newMessageElement.current.value);
    };
    return (
        <form action="" className={s.form}>
            <textarea ref={newMessageElement} className={s.text} placeholder="Type your message"></textarea>
            <button onClick={sendNewMessage} className={s.btn} type="submit">Send</button>
        </form>
    )
};

export default SendMessage;