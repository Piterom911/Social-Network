import {followAPI, usersAPI} from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_SETTING_FOLLOW = "TOGGLE_IS_SETTING_FOLLOW";

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    settingFollowUsers: []
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
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching};
        case TOGGLE_IS_SETTING_FOLLOW:
            return { ...state,
                settingFollowUsers: action.isSettingFollow
                    ? [...state.settingFollowUsers, action.userId]
                    : state.settingFollowUsers.filter(id => id !== action.userId)
            };
        default: return state
    }
};

export const followSuccess = (userID) => ( {type: FOLLOW, userID} );
export const unfollowSuccess = (userID) => ( {type: UNFOLLOW, userID} );
export const setUsers = (users) => ( {type: SET_USERS, users} );
export const setCurrentPage = (pageCount) => ( {type: CHANGE_PAGE, pageCount} );
export const setTotalUsersCount = (totalUsersCount) => ( {type: SET_TOTAL_USERS_COUNT, totalUsersCount} );
export const toggleIsFetching = (isFetching) => ( {type: TOGGLE_IS_FETCHING, isFetching} );
export const toggleIsSettingFollow = (isSettingFollow, userId) => ( {type: TOGGLE_IS_SETTING_FOLLOW, isSettingFollow, userId} );

export const getUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page, pageSize).then( data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
};

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleIsSettingFollow(true, userID));
        followAPI.follow(userID).then( data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userID));
                dispatch(toggleIsSettingFollow(false, userID));
            }
        })
    }
};

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleIsSettingFollow(true, userID));
        followAPI.unfollow(userID).then( data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userID));
                dispatch(toggleIsSettingFollow(false, userID));
            }
        })
    }
};

export default usersReducer;