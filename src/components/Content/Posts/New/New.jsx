import React from "react";
import s from "./New.module.scss";

const New = (props) => {
    const newPost = React.createRef();
    const addNewPost = () => {
        alert(`The text of the new Post is — "${newPost.current.value}".`)
    };
    return (
        <form className={s.form}>
            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="" className={s.ava}/>
            <input ref={newPost} className={s.input} type="text" placeholder="Post a comment..."/>
            <button onClick={addNewPost} className={s.submit}></button>
        </form>
    )
};
export default New;
