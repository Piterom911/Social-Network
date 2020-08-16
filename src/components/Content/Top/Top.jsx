import React from "react";
import s from "./Top.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'

const Top = () => {
    return (
        <form className={s.top}>
            <img src="https://themified.com/friend-finder/images/users/user-1.jpg" alt="" className={s.ava}/>
            <textarea placeholder="Write what you wish" className={s.text}></textarea>
            <div className={s.icons}>
                <a href="/icon" className={s.link}><FontAwesomeIcon className={s.icon} icon={faEdit}/></a>
                <a href="/icon" className={s.link}><FontAwesomeIcon className={s.icon} icon={faImages}/></a>
                <a href="/icon" className={s.link}><FontAwesomeIcon className={s.icon} icon={faVideo}/></a>
                <a href="/icon" className={s.link}><FontAwesomeIcon className={s.icon} icon={faMap}/></a>
            </div>
            <button className={s.submit}>Publish</button>
        </form>
    )
};

export default Top;