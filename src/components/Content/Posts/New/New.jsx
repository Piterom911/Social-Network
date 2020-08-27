import React from "react";
import s from "./New.module.scss";

const New = (props) => {

    const newPost = React.createRef();

    const newValue = () => {
        let text = newPost.current.value;
        props.dispatch({ type: "ADD-NEW-VALUE-TO-POST-TEXTAREA", value: text })
    };

    const addNewPost = (e) => {
        e.preventDefault();
        props.dispatch({type: "ADD-NEW-POST"});
    };

    return (
        <div className={s.form}>
            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="" className={s.ava}/>
            <textarea onChange={newValue} ref={newPost} className={s.input} type="text" value={props.newValue} placeholder="Post a comment..."/>
            <button onClick={addNewPost} className={s.submit}>Send</button>
        </div>
    )
};
export default New;
