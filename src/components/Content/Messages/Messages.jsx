import React from "react";
import s from "./Messages.module.scss";
import DialogContainer from "./Dialog/DialogContainer";
import ContactListContainer from "./ContactList/ContactListContainer";

const Messages = () => {
    return (
        <div className={s.messages}>
            <ContactListContainer />
            <DialogContainer />
        </div>
    )
};

export default Messages;
