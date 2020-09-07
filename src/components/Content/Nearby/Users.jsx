import React from "react";
import s from "./Users.module.scss";

const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers(
            [
                    {
                        id: 1,
                        photoUrl: "https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:28871?quality=0.8&format=jpg&width=1440&height=810&.jpg",
                        bgUrl: "https://innova-it.co.il/wp-content/uploads/2018/12/bg.jpg",
                        userName: "Bebe Rexha",
                        status: "I sing like a little girl",
                        followed: false,
                        location: {
                            cityId: 1,
                            cityName: "New York",
                            country: "USA"
                        }
                    },
                    {
                        id: 2,
                        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/RyanTedderphotocall.jpg",
                        bgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRK99hb-fuTgg0bVgmIrj9MYALvtGc0LAvRAA&usqp=CAU",
                        userName: "Ryan Benjamin Tedder",
                        status: "I am a good writer and singer!",
                        followed: true,
                        location: {
                            cityId: 1,
                            cityName: "Vancouver",
                            country: "Canada"
                        }
                    },
                    {
                        id: 3,
                        photoUrl: "https://pmcvariety.files.wordpress.com/2020/01/taylor-swift-variety-cover-5-16x9-1000.jpg?w=1000",
                        bgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYkaU2VWtcR6Grf38IY8lMwngseiFygyblDg&usqp=CAU",
                        userName: "Taylor Swift",
                        status: "I love you my followers!",
                        followed: false,
                        location: {
                            cityId: 1,
                            cityName: "California",
                            country: "USA"
                        }
                    }
                ]
        )
    }
    return <div className={s.wrapper}>
        {
            props.users.map(u => <div key={u.id}>
                <div style={{background: "url(" + u.bgUrl + ") no-repeat center / cover"}} className={s.avatar}>
                    <div className={s.ava} style={{background: "url(" + u.photoUrl + ") no-repeat center / cover"}} alt={u.userName}/>
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
                    <span className={s.city}>{u.location.cityName} / </span>
                    <span className={s.country}>{u.location.country}</span>
                </div>
                <p className={s.status}>{u.status}</p>
            </div>)
        }
    </div>
};

export default Users;
