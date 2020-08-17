import React from "react";
import s from "./Footer.module.scss"
import Social from "./Social/Social";
import FooterNav from "./FooterNav/FooterNav";
import Contacts from "./Contacts/Contacts";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`container ${s.footerContainer}`}>
                <Social/>
                <FooterNav/>
                <Contacts/>
            </div>
        </footer>
    )
};

export default Footer;