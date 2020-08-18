import React from "react";
import s from "./ContactList.module.scss";
import Contact from "./Contact/Contact";

const ContactList = () => {

    const contacs = [
        {
            id: 1,
            name: "Linda Lohan",
            time: "a min ago",
            message: "Oh... Do not be afraid.",
            ava: "https://themified.com/friend-finder/images/users/user-2.jpg"
        },
        {
            id: 2,
            name: "Julia Cox",
            time: "an hour ago",
            message: "see you soon",
            ava: "https://themified.com/friend-finder/images/users/user-10.jpg"
        },
        {
            id: 3,
            name: "Sophia Lee",
            time: "13 hour ago",
            message: "Okay fine. thank you",
            ava: "https://themified.com/friend-finder/images/users/user-3.jpg"
        },
        {
            id: 4,
            name: "John Doe",
            time: "Yesterday",
            message: "hey anybody there",
            ava: "https://themified.com/friend-finder/images/users/user-4.jpg"
        },
        {
            id: 5,
            name: "Anna Young",
            time: "2 days ago",
            message: "I gotta go",
            ava: "https://themified.com/friend-finder/images/users/user-9.jpg"
        },
        {
            id: 6,
            name: "Richard Bell",
            time: "2 days ago",
            message: "Hey there",
            ava: "https://themified.com/friend-finder/images/users/user-8.jpg"
        },
    ];

    const contact = contacs.map( data => <Contact id={data.id} name={data.name} time={data.time} message={data.message} ava={data.ava}/>)

    return (
        <div className={s.contacts}>
            { contact }
        </div>
    )
};

export default ContactList;
