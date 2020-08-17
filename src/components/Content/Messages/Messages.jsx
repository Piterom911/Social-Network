import React from "react";
import s from "./Messages.module.scss";
import ContactList from "./ContactList/ContactList";
import Dialog from "./Dialog/Dialog";

const Messages = () => {
    return (
        <div className={s.messages}>
            <ContactList/>
            <Dialog/>
        </div>
    )
};

export default Messages;
