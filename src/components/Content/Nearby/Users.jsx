import React from "react";
import s from "./Users.module.scss";
import userIcon from "../../../assets/images/userIcon.jpg"
import Preloader from "../../commonComponents/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followAPI} from "../../../API/api";

let Users = (props) => {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div className={s.users}>
            <div className={s.pagination}>
                { pages.map( p => {
                    if ((p - props.currentPage < 3 && p > props.currentPage - 3) || p >= pagesCount || p === 1 ) {
                        return <span key={p} onClick={ () => props.onSetCurrentPage(p)} className={props.currentPage === p ? s.currentPage : s.otherPage}> {p} </span>
                    }
                    return "";
                })}
            </div>
            {props.isFetching && <Preloader/>}
            <div className={s.wrapper}>
                {
                    props.users.map(u => <div key={u.id} data-id={u.id} className={s.item}>
                        <div style={{background: "#eee url(" + u.photos.large + ") no-repeat center / cover"}} className={s.avatar}>
                            <div className={s.ava} style={{background: "url(" + (u.photos.small !== null ? u.photos.small : userIcon) + ") no-repeat center / cover"}} alt={u.name}/>
                        </div>
                        <div className={s.nameBox}>
                            <h5 className={s.name}><NavLink to={"/profile/" + u.id}>{u.name}</NavLink></h5>
                            {u.followed
                                ? <button className={s.unfollow} onClick={ (event) => {
                                    followAPI.unfollow(u.id).then( data => {
                                        if( data.resultCode === 0 ) {
                                            props.unfollow(u.id)
                                        }
                                    })

                                } }>Unfollow</button>
                                : <button className={s.follow} onClick={ (event) => {
                                        followAPI.follow(u.id).then( data => {
                                        if( data.resultCode === 0 ) {
                                            props.follow(u.id)
                                        }
                                    })
                                } }>Follow</button>}
                        </div>
                        <div className={s.location}>
                            <span className={s.city}>{"Vancouver"} / </span>
                            <span className={s.country}>{"Canada"}</span>
                        </div>
                        <p className={s.status}>{u.status}</p>
                    </div>)
                }
            </div>
        </div>
}

export default Users;
