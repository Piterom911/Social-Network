import {profileAPI} from "../API/api";

const SET_PROFILE = "SET_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

let initialState = {
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state, profile: action.profile};
        case SET_PROFILE_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
};

export const setUserProfile = (profile) => ({type: SET_PROFILE, profile});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileID(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
};

export const getProfileStatus = userID => {
    return dispatch => {
        profileAPI.getProfileStatus(userID)
            .then(status => {
                !status ? dispatch(setProfileStatus("Write here something you want.")) : dispatch(setProfileStatus(status))
            })
    }
};

export const updateProfileStatus = status => {
    return dispatch => {
        profileAPI.updateProfileStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {dispatch(setProfileStatus(status))}
            })
    }
};

export default profileReducer;