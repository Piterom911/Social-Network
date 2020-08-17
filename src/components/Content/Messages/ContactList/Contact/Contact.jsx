import React from "react";
import s from "./Contact.module.scss";
import {NavLink} from "react-router-dom";

const Contact = (props) => {

    let path = "/messages/" + props.id;
    return (
        <NavLink to={path} className={s.contact}>
            <img className={s.ava} src={props.ava} alt=""/>
            <div className={s.top}>
                <h6 className={s.name}>{props.name}</h6>
                <span className={s.time}>{props.time}</span>
            </div>
            <div className={s.info}>
                <span className={s.excerpt}>{props.message}</span>
                <span className={s.status}>{props.status}</span>
            </div>
        </NavLink>
    )
};

export default Contact;
