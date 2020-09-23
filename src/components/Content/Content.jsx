import React from "react";
import s from "./Content.module.scss";
import Top from "./Top/Top";
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";
import Friends from "./Friends/Friends";
import Images from "./Images/Images";
import Videos from "./Videos/Videos";
import PostsContainer from "./Posts/PostsContainer";
import UsersContainer from "./Nearby/UsersContainer";
import Login from "./Login/Login";

const Content = () => {
    return (
        <div className={s.content}>
            <Top/>
            <Route path="/messages" render={ () => <Messages/> } />
            <Route path="/posts" render={ () => <PostsContainer/> }/>
            <Route exact path="/" render={ () => <PostsContainer/> }/>
            <Route path="/users" render={ () => <UsersContainer/>}/>
            <Route path="/login" render={ () => <Login/>}/>
            <Route path="/friends" component={Friends}/>
            <Route path="/images" component={Images}/>
            <Route path="/videos" component={Videos}/>
        </div>
    )
};

export default Content;
