import React from "react";
import s from "./Contact.module.scss";

const Contact = (props) => {
    return (
        <a href="/contact" className={s.contact}>
            <img className={s.ava} src={props.ava} alt=""/>
            <div className={s.top}>
                <h6 className={s.name}>{props.name}</h6>
                <span className={s.time}>{props.time}</span>
            </div>
            <div className={s.info}>
                <span className={s.excerpt}>{props.message}</span>
                <span className={s.status}>{props.status}</span>
            </div>
        </a>
    )
};

export default Contact;
