import React from "react";
import s from "./Header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import Preloader from "../commonComponents/Preloader/Preloader";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={`container ${s.container_header}`}>
                <a href="#main" className={s.logo}>
                    <img className={s.logoImg} src="https://themified.com/friend-finder/images/logo.png" alt=""/>
                </a>
                <nav className={s.nav}>
                    <form className={s.search}>
                        <div className={s.formGroup}>
                            <FontAwesomeIcon className={s.icon} icon={faSearch} />
                            <input type="text" className={s.formControl} placeholder="Search friends, photos, videos"/>
                        </div>
                    </form>
                    {/*<ul className={s.list}>
                        <li className={s.item}><a className={s.link} href="#notNow">Something 1</a></li>
                        <li className={s.item}><a className={s.link} href="#notNow">Something 2</a></li>
                        <li className={s.item}><a className={s.link} href="#notNow">Something 3</a></li>
                        <li className={s.item}><a className={s.link} href="#notNow">Something 4</a></li>
                    </ul>*/}
                    <div className={s.wrapper}>
                        {props.isFetchin
                        ? <Preloader/>
                        : (props.isLogged
                            ? <span><NavLink className={s.logged} to="/profile">{props.fullName}</NavLink></span>
                            : <NavLink className={s.login} to="/auth">Login</NavLink>)}
                    </div>
                </nav>
            </div>
        </header>
    )
};
/*let isLogged = (logState) => {
    if(logState === true) {
        return <span className={s.logged} to="/auth">{props.fullName}</span>
    }
    return <NavLink className={s.login} to="/auth">Login</NavLink>
};*/

export default Header;