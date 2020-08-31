import React from "react";
import s from "./Messages.module.scss";
import ContactList from "./ContactList/ContactList";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <ContactList contacts={props.messages.contacts}/>
            <Dialog dispatch={props.dispatch} messages={props.messages}/>
        </div>
    )
};

export default Messages;
