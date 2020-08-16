import React from "react";
import s from "./Follow.module.scss"
import Person from "./Person/Person";

const Follow = () => {
    return (
        <aside className={s.sidebar}>
            <h4 className={s.title}>Who to Follow</h4>
            <Person name="Diana Amber" url="https://themified.com/friend-finder/images/users/user-11.jpg"/>
            <Person name="Cris Haris" url="https://themified.com/friend-finder/images/users/user-12.jpg"/>
            <Person name="Brian Walton" url="https://themified.com/friend-finder/images/users/user-13.jpg"/>
            <Person name="Olivia Steward" url="https://themified.com/friend-finder/images/users/user-14.jpg"/>
            <Person name="Sophia Page" url="https://themified.com/friend-finder/images/users/user-15.jpg"/>
        </aside>
    )
};

export default Follow;