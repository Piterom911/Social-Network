import React from "react";
import s from "./New.module.scss";
import {Field, Form} from "react-final-form";

const New = (props) => {

    const PostCommentForm = props => {
       return (
           <Form onSubmit={props.onSubmit}>
               {({handleSubmit}) => (
                   <form onSubmit={handleSubmit} className={s.form}>
                       <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="" className={s.ava}/>
                       <Field className={s.input} name={"newComment"} component={"textarea"} placeholder={"Post a comment..."}/>
                       <button className={s.submit}>Send</button>
                   </form>
               )}
           </Form>
       )
    };

    const onSubmit = obj => {
        props.addPostComment(obj.newComment);
        console.log(obj.newComment)
    };

    return (
        <PostCommentForm onSubmit={onSubmit} />
    )
};
export default New;
