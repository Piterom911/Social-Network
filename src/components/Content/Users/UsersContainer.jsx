import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    getUsers, toggleIsSettingFollow
} from "../../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import {compose} from "redux";
import withAuthRedirect from "../../../HOC/CheckAuth/withAuthRerender";

class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(1, this.props.pageSize);
    }

    onSetCurrentPage = (page) => {
        this.props.getUsers(page, this.props.pageSize)
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
            isFetching={this.props.isFetching}
            settingFollowUsers={this.props.settingFollowUsers}
            toggleIsSettingFollow={this.props.toggleIsSettingFollow}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        settingFollowUsers: state.users.settingFollowUsers,
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers, toggleIsSettingFollow}),
    withAuthRedirect)
(UsersApiComponent);
