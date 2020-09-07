import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
};

const mapDispatchToProps = (dispatch) => {
    const follow = (userID) => {
        dispatch(followAC(userID))
    };
    const unfollow = (userID) => {
        dispatch(unfollowAC(userID))
    };
    const setUsers = users => {
        dispatch(setUsersAC(users))
    };

    return {
        follow: follow,
        unfollow: unfollow,
        setUsers: setUsers
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
