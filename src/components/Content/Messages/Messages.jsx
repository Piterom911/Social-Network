import React from "react";
import s from "./Messages.module.scss";
import Contacts from "./Contacts/Contacts";
import Dialog from "./Dialog/Dialog";

const Messages = () => {
    return (
        <div className={s.messages}>
            <Contacts/>
            <Dialog/>
        </div>
    )
};

export default Messages;
