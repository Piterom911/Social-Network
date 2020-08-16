import React from "react";
import s from "./Answer.module.scss";

const Answer = (props) => {
    return (
        <div className={s.answer}>
            <img src={props.img} alt="" className={s.ava}/>
            <p className={s.text}>
                <a href="#profile" className={s.name}>{props.name}</a>
                {props.text}
            </p>
        </div>
    )
};

export default Answer;
