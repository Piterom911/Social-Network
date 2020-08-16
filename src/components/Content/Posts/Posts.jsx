import React from "react";
import s from "./Posts.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import Answer from "./Answers/Answer";
import New from "./New/New";

const Posts = () => {
    return (
        <div className={s.post}>
            <img className={s.img} src="https://themified.com/friend-finder/images/post-images/1.jpg" alt=""/>
            <div className={s.data}>
                <div className={s.content}>
                    <div className={s.top}>
                        <img src="https://themified.com/friend-finder/images/users/user-5.jpg" alt="" className={s.ava}/>
                        <div className={s.info}>
                            <a href="#profile" className={s.name}>Alexis Clark</a>
                            <span className={s.following}>following</span>
                            <p className={s.time}>Published a photo about 3 mins ago</p>
                        </div>
                        <div className={s.likes}>
                            <span className={`${s.positive} ${s.thumb}`}><FontAwesomeIcon className={s.icon} icon={faThumbsUp}/> 13</span>
                            <span className={`${s.negative} ${s.thumb}`}><FontAwesomeIcon className={s.icon} icon={faThumbsDown}/> 0</span>
                        </div>
                    </div>
                    <p className={s.message}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <Answer name="Diana" img="https://themified.com/friend-finder/images/users/user-11.jpg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"/>
                <Answer name="John" img="https://themified.com/friend-finder/images/users/user-4.jpg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"/>
                <New/>
            </div>

        </div>
    )
};

export default Posts;
