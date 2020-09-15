import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import s from "./Preloader.module.scss";

let Preloader = () => {
    return <div className={s.wrapper}>
        <img src={preloader} alt="preloader"/>
    </div>
};

export default Preloader;