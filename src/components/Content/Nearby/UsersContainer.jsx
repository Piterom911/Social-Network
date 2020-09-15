import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC} from "../../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersApiComponent extends React.Component {

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
    };

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onSetCurrentPage={this.onSetCurrentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);

export default UsersContainer;
