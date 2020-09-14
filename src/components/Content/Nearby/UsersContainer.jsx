import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC} from "../../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage
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
    const setCurrentPage = currentPage => {
        dispatch(setCurrentPageAC(currentPage))
    };
    const setTotalUsersCount = totalUsersCount => {
        dispatch(setTotalUsersCountAC(totalUsersCount))
    };

    return {
        follow: follow,
        unfollow: unfollow,
        setUsers: setUsers,
        setCurrentPage: setCurrentPage,
        setTotalUsersCount: setTotalUsersCount
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
