import React from "react";
import s from "./Content.module.scss";
import Top from "./Top/Top";
import Messages from "./Messages/Messages";
import Posts from "./Posts/Posts";
import {Route} from "react-router-dom";
import Nearby from "./Nearby/Nearby";
import Friends from "./Friends/Friends";
import Images from "./Images/Images";
import Videos from "./Videos/Videos";

const Content = (props) => {
    return (
        <div className={s.content}>
            <Top/>
            <Route path="/messages" render={ () => <Messages contacts={props.contacts}/> } />
            <Route path="/posts" component={Posts}/>
            <Route path="/nearby" component={Nearby}/>
            <Route path="/friends" component={Friends}/>
            <Route path="/images" component={Images}/>
            <Route path="/videos" component={Videos}/>
        </div>
    )
};

export default Content;
