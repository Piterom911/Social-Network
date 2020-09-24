import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../../hoc/CheckAuth/withAuthRerender";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11450;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({profile: state.profile});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect,
    withRouter)
(ProfileContainer);