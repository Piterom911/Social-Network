import React from "react";
import s from "./Posts.module.scss";
import Answer from "./Answers/Answer";
import PostContent from "./PostContent/PostContent";
import NewContainer from "./New/NewContainer";

const Posts = (props) => {

    const postMapData = props.oldMessages.map( data => <Answer name={data.name} img={data.img} text={data.text}/>)
    return (
        <div className={s.post}>
            <img className={s.img} src="https://themified.com/friend-finder/images/post-images/1.jpg" alt=""/>
            <div className={s.data}>
                <PostContent/>
                { postMapData }
                <NewContainer/>
            </div>
        </div>
    )
};

export default Posts;
