import React from "react";
import s from "./Social.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faGooglePlusG,
    faLinkedin,
    faPinterest,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
    return (
        <div className={s.social}>
            <a href="#/" className={s.home}>
                <img src="https://themified.com/friend-finder/images/logo-black.png" alt=""/>
            </a>
            <ul className={s.list}>
                <li className={s.item}>
                    <a href="#/" className={s.link}>
                        <FontAwesomeIcon className={s.icon} icon={faFacebookF}/>
                    </a>
                </li>
                <li className={s.item}>
                    <a href="#/" className={s.link}>
                        <FontAwesomeIcon className={s.icon} icon={faTwitter}/>
                    </a>
                </li>
                <li className={s.item}>
                    <a href="#/" className={s.link}>
                        <FontAwesomeIcon className={s.icon} icon={faGooglePlusG}/>
                    </a>
                </li>
                <li className={s.item}>
                    <a href="#/" className={s.link}>
                        <FontAwesomeIcon className={s.icon} icon={faPinterest}/>
                    </a>
                </li>
                <li className={s.item}>
                    <a href="#/" className={s.link}>
                        <FontAwesomeIcon className={s.icon} icon={faLinkedin}/>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Social;