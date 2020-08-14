import React from "react";
import style from "./Profile.module.scss"

const Profile = () => {
    return (
        <main className={style.main}>
            <div className={style.imgWrap}>
                <img src="https://wallpaperaccess.com/full/506796.jpg" alt="main-image" className={style.img}/>
            </div>
            <div className="profile-data">
                <img
                    src="https://d17bobgtnxioyl.cloudfront.net/cdn/beautifulpeople/images/default_profile/signup_male.png"
                    alt="profile photo" className="avatar"/>
                <div className="profile-description">
                    <h1 className="profile-name">Roman Dogoda</h1>
                    <ul>
                        <li>Date of Birth: 17 January</li>
                        <li>City: Bishkek</li>
                        <li>Education: Web Courses</li>
                        <li>E-Mail: piterom911@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="posts">Posts</div>
        </main>
    )
};

export default Profile;