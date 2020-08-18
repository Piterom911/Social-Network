import React from "react";
import s from "./Dialog.module.scss";
import Message from "./Message/Message";

const Dialog = () => {

    const messages = [
        {
            ava: "https://themified.com/friend-finder/images/users/user-2.jpg",
            me: "notMe",
            name: "Linda Lohan",
            time: "3 days ago",
            message: "Hello my little friend!"
        },
        {
            ava: "https://themified.com/friend-finder/images/users/user-1.jpg",
            me: "me",
            name: "Sarah Cruiz",
            time: "3 days ago",
            message: "I really want you to know about..."
        },
        {
            ava: "https://themified.com/friend-finder/images/users/user-2.jpg",
            me: "notMe",
            name: "Linda Lohan",
            time: "3 days ago",
            message: "You are scaring me! Please say what you want to say!"
        },
        {
            ava: "https://themified.com/friend-finder/images/users/user-1.jpg",
            me: "me",
            name: "Sarah Cruiz",
            time: "3 days ago",
            message: "Oh... Do not be afraid. It is no matter any more. You will know soon)"
        }
    ];

    const message = messages.map( data => <Message ava={data.ava} me={data.me} name={data.name} date={data.time} message={data.message}/>);
    return (
        <div className={s.dialog}>
            { message }
        </div>
    )
};

export default Dialog;
