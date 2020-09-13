import React from "react";
import s from "./Users.module.scss";
import * as axios from "axios";
import userIcon from "../../../assets/images/userIcon.jpg"

const Users = (props) => {
    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=100&page=10").then( response => {
            props.setUsers(response.data.items)
        })
    }
    return <div className={s.wrapper}>
        {
            props.users.map(u => <div key={u.id} data-id={u.id}>
                <div style={{background: "#eee url(" + u.photos.large + ") no-repeat center / cover"}} className={s.avatar}>
                    <div className={s.ava} style={{background: "url(" + (u.photos.small !== null ? u.photos.small : userIcon) + ") no-repeat center / cover"}} alt={u.name}/>
                </div>
                <div className={s.nameBox}>
                    <h5 className={s.name}><a href="https//helomalo">{u.userName}</a></h5>
                    {u.followed
                        ? <button className={s.unfollow} onClick={ () => {
                            props.unfollow(u.id)
                        } }>Unfollow</button>
                        : <button className={s.follow} onClick={ () => {
                            props.follow(u.id)
                        } }>Follow</button>}
                </div>
                <div className={s.location}>
                    <span className={s.city}>{"u.location.cityName"} / </span>
                    <span className={s.country}>{"u.location.country"}</span>
                </div>
                <p className={s.status}>{u.status}</p>
            </div>)
        }
    </div>
};

export default Users;