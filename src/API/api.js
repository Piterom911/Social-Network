import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "bfea5beb-71b4-44c3-aee2-4a17fbf9d49c"

    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then( response => response.data)
    }
};

export const profileAPI = {
    getProfileID(profileID) {
        return axiosInstance.get(`profile/${profileID}`)
            .then( response => response.data )
    },
    getProfileStatus(profileID) {
        return axiosInstance.get(`profile/status/${profileID}`)
            .then( response => response.data )
    },
    updateProfileStatus(status) {
        return axiosInstance.put(`profile/status`, {status})
    }
};

export const authAPI = {
    authMe() {
        return axiosInstance.get(`auth/me`)
            .then( response => response.data)
    }
};

export const followAPI = {
    follow(id) {
        return axiosInstance.post(`follow/${id}`, {})
            .then( response => response.data)
    },
    unfollow(id) {
        return axiosInstance.delete(`follow/${id}`)
            .then( response => response.data)
    }
};