import React from "react";
import s from "./New.module.scss";


const New = (props) => {

    const onNewValue = (e) => {
        let text = e.target.value;
        props.changeValue(text);
    };

    const onAddNewPost = (e) => {
        e.preventDefault();
        props.addNewPost();
    };


    return (
        <div className={s.form}>
            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="" className={s.ava}/>
            <textarea onChange={onNewValue} className={s.input} type="text" value={props.newValue} placeholder="Post a comment..."/>
            <button onClick={onAddNewPost} className={s.submit}>Send</button>
        </div>
    )
};
export default New;
