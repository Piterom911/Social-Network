import React from "react";
import s from "./Contacts.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons'

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <h5 className={s.title}>Contacts Us</h5>
            <ul className={s.list}>
                <li className={s.item}>
                    <FontAwesomeIcon className={s.icon} icon={faPhone}/>+1 (234) 222 0754
                </li>
                <li className={s.item}>
                    <FontAwesomeIcon className={s.icon} icon={faEnvelope}/>info@thunder-team.com
                </li>
                <li className={s.item}>
                    <FontAwesomeIcon className={s.icon} icon={faMapMarkerAlt}/>228 Park Ave S NY, USA
                </li>
            </ul>
        </div>
    )
};

export default Contacts;