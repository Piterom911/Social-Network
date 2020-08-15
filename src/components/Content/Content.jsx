import React from "react";
import s from "./Content.module.scss";
import Top from "./Top/Top";
import Messages from "./Messages/Messages";

const Content = () => {
    return (
        <div className={s.content}>
            <Top/>
            <hr/>
            <Messages/>
        </div>
    )
};

export default Content;
