import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Follow from "./components/Follow/Follow";


function App() {
    return (
        <div className="app-wrapper">

            <Header/>

            <div className="container main-content">

                <Sidebar/>

                <Content/>

                <Follow/>

            </div>
        </div>
    );
}

export default App;
