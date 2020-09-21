import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import "./Preloader.scss";

let Preloader = () => {
    return <div className={`wrapperPreloader`}>
        <img src={preloader} alt="preloader"/>
    </div>
};

export default Preloader;