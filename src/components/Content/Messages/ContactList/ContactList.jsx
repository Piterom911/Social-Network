import React from "react";
import s from "./ContactList.module.scss";
import Contact from "./Contact/Contact";

const ContactList = (props) => {

    const contact = props.contacts.map( data => <Contact id={data.id} name={data.name} time={data.time} message={data.message} ava={data.ava}/>);

    return (
        <div className={s.contacts}>
            { contact }
        </div>
    )
};

export default ContactList;
