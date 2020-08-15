import React from "react";
import s from "./Profile.module.scss"

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className="profile-data">
                <img
                    src="https://d17bobgtnxioyl.cloudfront.net/cdn/beautifulpeople/images/default_profile/signup_male.png"
                    alt="profile photo" className={s.avatar}/>
                <div className="profile-description">
                    <h1 className="profile-name">Roman Dogoda</h1>
                    <ul>
                        <li>Date of Birth: 17 January</li>
                        <li>City: Bishkek</li>
                        <li>Education: Web Courses</li>
                        <li>E-Mail: piterom911@gmail.com</li>
                    </ul>

                    <button className={s.btn}>hello</button>
                </div>
            </div>
        </div>
    )
};

export default Profile;