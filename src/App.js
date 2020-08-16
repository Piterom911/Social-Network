import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Navigation from "./components/Sidebar/Navigation/Navigation";
import Content from "./components/Content/Content";
import Follow from "./components/Follow/Follow";
import {BrowserRouter} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>

                <div className="container main-content">

                    <Sidebar/>

                    <Content/>

                    <Follow/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
