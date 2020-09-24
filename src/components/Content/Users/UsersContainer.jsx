import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    getUsers
} from "../../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import {compose} from "redux";
import withAuthRedirect from "../../../hoc/CheckAuth/withAuthRerender";

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
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}),
    withAuthRedirect)
(UsersApiComponent);
