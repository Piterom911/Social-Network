import {profileAPI} from "../API/api";

const SET_PROFILE = "SET_PROFILE";

let initialState = {
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
};

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileID(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
};

export const setUserProfile = (profile) => ({type: SET_PROFILE, profile: profile});

export default profileReducer;