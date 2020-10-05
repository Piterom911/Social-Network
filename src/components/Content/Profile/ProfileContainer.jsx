import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11450;
        }
        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getProfileStatus}),
    withRouter)
(ProfileContainer);