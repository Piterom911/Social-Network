import React from "react";
import s from "./Profile.module.scss"
import {NavLink} from "react-router-dom";
import profileBg from "../../../assets/images/profileBg.jpg"
import userIcon from "../../../assets/images/userIcon.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faGlobe, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import Preloader from "../../commonComponents/Preloader/Preloader";

let Profile = (props) => {
    if (!props.profile.profile) {
        return <Preloader/>
    }

    let socialArray = [];

    let socialItems = (item) => {
        for(let key in item) {
            if(item[key]) {
                socialArray.push({name: key, url: item[key]})
            }
        }
        return socialArray;
    };

    socialItems(props.profile.profile.contacts);



    return (
        <>
            <div className={s.top} style={{background: "#eee url(" + (props.profile.profile.photos.large ? props.profile.profile.photos.large : profileBg) + ") no-repeat center / cover"}}>
                <div className={s.infoLine}>
                    <div className={s.avaBox}>
                        <div className={s.ava} style={{background: "#eee url(" + (props.profile.profile.photos.small ? props.profile.profile.photos.small : userIcon) + ") no-repeat center / cover"}}/>
                        <h1>{props.profile.profile.fullName}</h1>
                        <span className={s.position}>{props.profile.profile.aboutMe}</span>
                    </div>
                    <ul className={s.navigation}>
                        <li><NavLink to="/someLink">About</NavLink></li>
                        <li><NavLink to="/someLink">Timeline</NavLink></li>
                        <li><NavLink to="/someLink">Album</NavLink></li>
                        <li><NavLink to="/someLink">Friends</NavLink></li>
                    </ul>
                    <div className={s.followers}>
                        <span className={s.quantity}>1,299 people followers her</span>
                        <button className={s.add}>Add Friend</button>
                    </div>
                </div>
            </div>
            <div className={s.bottom}>
                <div className={s.common}>
                    <h3 className={s.title}><FontAwesomeIcon className={s.icon} icon={faInfoCircle}/> Personal Information</h3>
                    <p className={s.status}>{props.profile.profile.lookingForAJobDescription}</p>
                </div>
                <div className={s.common}>
                    <h3 className={s.title}>
                        <FontAwesomeIcon className={s.icon} icon={faBriefcase}/>
                        {`${props.profile.profile.fullName} ${!props.profile.profile.lookingForAJob ? "НЕ" : ""} ищет работу`}
                    </h3>
                    <p className={s.status}>{props.profile.profile.aboutMe}</p>
                    <p className={s.status}>«{props.profile.profile.lookingForAJobDescription}»</p>
                </div>
                <div className={s.common}>
                    <h3 className={s.title}><FontAwesomeIcon className={s.icon} icon={faGlobe}/> Social Networks</h3>
                    <ul className={s.socials}>
                        {!socialArray.length ? "Nothing to show!" : ""}
                        {socialArray.map( i => {
                            return <li key={i.name}>--- <a href={i.url}>{i.name}</a> ---</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Profile;