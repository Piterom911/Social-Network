import {authAPI, profileAPI} from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";
const IS_FETCHING = "IS_FETCHING";
const SET_ME_LOGGED = "SET_ME_LOGGED";
const SET_FULL_NAME = "SET_FULL_NAME";

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isLogged: false,
    fullName: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data,
                isFetching: action.isFetching
        };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_ME_LOGGED:
            return {
                ...state,
                isLogged: action.isLogged
            };
        case SET_FULL_NAME:
            return {
                ...state,
                fullName: action.fullName
            };
        default:
            return state;
    }
};

export const setUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}});
export const isAuthFetching = (isFetching) => ({type: IS_FETCHING, isFetching});
export const setMeLogged = isLogged => ({type: SET_ME_LOGGED, isLogged});
export const setFullName = fullName => ({type: SET_FULL_NAME, fullName});

export const getUserData = () => {
    return dispatch => {
        dispatch(isAuthFetching(true));
        authAPI.authMe()
            .then(response => {
                if(response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    dispatch(setMeLogged(true));
                    dispatch(setUserData(id, login, email));
                    profileAPI.getProfileID(response.data.id)
                        .then( user => {
                            dispatch(setFullName(user.fullName));
                        });
                }
                dispatch(isAuthFetching(false));
            })
    }
};

export default authReducer;