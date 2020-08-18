import React from "react";
import s from "./Posts.module.scss";
import Answer from "./Answers/Answer";
import New from "./New/New";
import PostContent from "./PostContent/PostContent";

const Posts = () => {

    const postData = [
        {
            name: "Diana",
            img: "https://themified.com/friend-finder/images/users/user-11.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        },
        {
            name: "John",
            img: "https://themified.com/friend-finder/images/users/user-4.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        }
    ];

    const postMapData = postData.map( data => <Answer name={data.name} img={data.img} text={data.text}/>)
    return (
        <div className={s.post}>
            <img className={s.img} src="https://themified.com/friend-finder/images/post-images/1.jpg" alt=""/>
            <div className={s.data}>
                <PostContent/>
                { postMapData }
                <New/>
            </div>
        </div>
    )
};

export default Posts;
