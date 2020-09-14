import React from "react";
import s from "./Users.module.scss";
import * as axios from "axios";
import userIcon from "../../../assets/images/userIcon.jpg"

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onSetCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div className={s.pagination}>
                { pages.map( p => {
                    if ((p - this.props.currentPage < 3 && p > this.props.currentPage - 3) || p >= pagesCount || p === 1 ) {
                        return <span onClick={ () => this.onSetCurrentPage(p)} className={this.props.currentPage === p && s.currentPage}> {p} </span>
                    }
                })}
            </div>
            <div className={s.wrapper}>
                {
                    this.props.users.map(u => <div key={u.id} data-id={u.id} className={s.item}>
                        <div style={{background: "#eee url(" + u.photos.large + ") no-repeat center / cover"}} className={s.avatar}>
                            <div className={s.ava} style={{background: "url(" + (u.photos.small !== null ? u.photos.small : userIcon) + ") no-repeat center / cover"}} alt={u.name}/>
                        </div>
                        <div className={s.nameBox}>
                            <h5 className={s.name}><a href="https//helomalo">{u.userName}</a></h5>
                            {u.followed
                                ? <button className={s.unfollow} onClick={ () => {
                                    this.props.unfollow(u.id)
                                } }>Unfollow</button>
                                : <button className={s.follow} onClick={ () => {
                                    this.props.follow(u.id)
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
        </div>
    }
}

export default Users;
