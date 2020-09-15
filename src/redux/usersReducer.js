const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
    users: [
    //     {
    //         id: 1,
    //         photoUrl: "https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:28871?quality=0.8&format=jpg&width=1440&height=810&.jpg",
    //         bgUrl: "https://innova-it.co.il/wp-content/uploads/2018/12/bg.jpg",
    //         userName: "Bebe Rexha",
    //         status: "I sing like a little girl",
    //         followed: false,
    //         location: {
    //             cityId: 1,
    //             cityName: "New York",
    //             country: "USA"
    //         }
    //     },
    //     {
    //         id: 2,
    //         photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/RyanTedderphotocall.jpg",
    //         bgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRK99hb-fuTgg0bVgmIrj9MYALvtGc0LAvRAA&usqp=CAU",
    //         userName: "Ryan Benjamin Tedder",
    //         status: "I am a good writer and singer!",
    //         followed: true,
    //         location: {
    //             cityId: 1,
    //             cityName: "Vancouver",
    //             country: "Canada"
    //         }
    //     },
    //     {
    //         id: 3,
    //         photoUrl: "https://pmcvariety.files.wordpress.com/2020/01/taylor-swift-variety-cover-5-16x9-1000.jpg?w=1000",
    //         bgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYkaU2VWtcR6Grf38IY8lMwngseiFygyblDg&usqp=CAU",
    //         userName: "Taylor Swift",
    //         status: "I love you my followers!",
    //         followed: false,
    //         location: {
    //             cityId: 1,
    //             cityName: "California",
    //             country: "USA"
    //         }
    //     }
    ],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return { ...state, users: [...action.users]};
        case CHANGE_PAGE:
            return { ...state, currentPage: action.pageCount};
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount};
        default: return state
    }
};

export const followAC = (userID) => ( {type: FOLLOW, userID} );
export const unfollowAC = (userID) => ( {type: UNFOLLOW, userID} );
export const setUsersAC = (users) => ( {type: SET_USERS, users} );
export const setCurrentPageAC = (pageCount) => ( {type: CHANGE_PAGE, pageCount} );
export const setTotalUsersCountAC = (totalUsersCount) => ( {type: SET_TOTAL_USERS_COUNT, totalUsersCount} );

export default usersReducer;