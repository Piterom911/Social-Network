import React from "react";
import s from "./FooterNav.module.scss";

const FooterNav = () => {
    return (
        <div className={s.footerNav}>
            <div className={s.wrapper}>
                <h5 className={s.title}>For individuals</h5>
                <ul className={s.list}>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Signup</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>login</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Explore</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Finder app</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Features</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Language settings</a>
                    </li>
                </ul>
            </div>
            <div className={s.wrapper}>
                <h5 className={s.title}>For businesses</h5>
                <ul className={s.list}>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Business signup</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Business login</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Benefits</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Resources</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Advertise</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Setup</a>
                    </li>
                </ul>
            </div>
            <div className={s.wrapper}>
                <h5 className={s.title}>About</h5>
                <ul className={s.list}>
                    <li className={s.item}>
                        <a href="#" className={s.link}>About us</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Contact us</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Privacy Policy</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Terms</a>
                    </li>
                    <li className={s.item}>
                        <a href="#" className={s.link}>Help</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default FooterNav;