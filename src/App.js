import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Follow from "./components/Follow/Follow";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";


function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>

                <div className="container main-content">

                    <Sidebar chat={props.state.sidebar}/>

                    <Content data={props.state.content}/>

                    <Follow/>

                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
