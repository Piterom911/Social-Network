import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";

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

let ProfileWithRouter = withRouter(ProfileContainer);

let mapStateToProps = (state) => ({profile: state.profile});

export default connect(mapStateToProps, {getUserProfile})(ProfileWithRouter);