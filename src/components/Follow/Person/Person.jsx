import React from "react";
import s from "./Person.module.scss"

const Person = (props) => {
    return (
        <div className={s.person}>
            <img className={s.ava} src={props.url} alt=""/>
            <div className={s.data}>
                <h5> <a href="#profile" className={s.name}>{props.name}</a></h5>
                <a href="#add" className={s.btn}>Add friend</a>
            </div>
        </div>
    )
};

export default Person;