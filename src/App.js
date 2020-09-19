import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Follow from "./components/Follow/Follow";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";

function App() {
    return (
        <div className="app-wrapper">

            <Header/>

            <Switch>
                <Route path="/profile/:userId?" render={() => <div className="container"><ProfileContainer/></div>}/>
                <Route path="/" render={() => <div className="container main-content">  <Sidebar/>    <Content/>  <Follow/> </div>}/>
            </Switch>

            <Footer/>
        </div>
    );
}

export default App;
