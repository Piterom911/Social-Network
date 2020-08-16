import React from "react";
import s from "./Content.module.scss";
import Top from "./Top/Top";
import Messages from "./Messages/Messages";
import Posts from "./Posts/Posts";

const Content = () => {
    return (
        <div className={s.content}>
            <Top/>
            <hr/>
            {/*<Messages/>*/}
            <Posts/>
        </div>
    )
};

export default Content;
