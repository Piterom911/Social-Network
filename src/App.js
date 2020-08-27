import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Follow from "./components/Follow/Follow";
import Footer from "./components/Footer/Footer";

function App(props) {

    return (
            <div className="app-wrapper">

                <Header/>

                <div className="container main-content">

                    <Sidebar chat={props.state.sidebar}/>

                    <Content data={props.state.content} dispatch={props.dispatch} />

                    <Follow/>

                </div>

                <Footer/>
            </div>
    );
}

export default App;
