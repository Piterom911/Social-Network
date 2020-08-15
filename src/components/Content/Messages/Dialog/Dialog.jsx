import React from "react";
import s from "./Dialog.module.scss";
import Message from "./Message/Message";

const Dialog = () => {
    return (
        <div className={s.dialog}>
            <Message name={"Linda Lohan"} date={"3 days ago"} message={'Hello my little friend!'}/><br/>
            <Message name={"Sarah Cruiz"} date={"3 days ago"} message={'I really want you to know about...'}/><br/>
            <Message name={"Linda Lohan"} date={"3 days ago"} message={'You are scaring me! Please say what you want to say!'}/><br/>
            <Message name={"Sarah Cruiz"} date={"3 days ago"} message={'Oh... Do not be afraid. It is no matter any more. You will know soon)'}/><br/>
        </div>
    )
};

export default Dialog;
