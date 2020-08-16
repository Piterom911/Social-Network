import React from "react";
import s from "./New.module.scss";

const New = (props) => {
    return (
        <form className={s.form}>
            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="" className={s.ava}/>
            <input className={s.input} type="text" placeholder="Post a comment..."/>
        </form>
    )
};


export default New;
