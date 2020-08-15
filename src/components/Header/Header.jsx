import React from "react";
import style from "./Header.module.scss"

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`container ${style.container_header}`}>
                <a href="#main" className={style.logo}>
                    <img src="./logo-header.png" alt=""/>
                </a>
                <nav>
                    <ul>
                        <li><a href="#notNow">Something 1</a></li>
                        <li><a href="#notNow">Something 2</a></li>
                        <li><a href="#notNow">Something 3</a></li>
                        <li><a href="#notNow">Something 4</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;