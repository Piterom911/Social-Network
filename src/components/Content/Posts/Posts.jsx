import React from "react";
import s from "./Posts.module.scss";
import Answer from "./Answers/Answer";
import New from "./New/New";
import PostContent from "./PostContent/PostContent";

const Posts = (props) => {

    const postMapData = props.posts.oldMessages.map( data => <Answer name={data.name} img={data.img} text={data.text}/>)
    return (
        <div className={s.post}>
            <img className={s.img} src="https://themified.com/friend-finder/images/post-images/1.jpg" alt=""/>
            <div className={s.data}>
                <PostContent/>
                { postMapData }
                <New newValue={props.posts.newValue}
                     changeValue={props.changeValue}
                     addNewPost={props.addNewPost}/>
            </div>
        </div>
    )
};

export default Posts;
