import React from "react";
import s from "./New.module.scss";
import {addPostActionCreator, newValueActionCreator} from "../../../../redux/state";


const New = (props) => {

    const newPost = React.createRef();

    const newValue = () => {
        let text = newPost.current.value;
        props.dispatch(newValueActionCreator(text))
    };

    const addNewPost = (e) => {
        e.preventDefault();
        props.dispatch(addPostActionCreator());
    };

    debugger;

    return (
        <div className={s.form}>
            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="" className={s.ava}/>
            <textarea onChange={newValue} ref={newPost} className={s.input} type="text" value={props.newValue} placeholder="Post a comment..."/>
            <button onClick={addNewPost} className={s.submit}>Send</button>
        </div>
    )
};
export default New;
