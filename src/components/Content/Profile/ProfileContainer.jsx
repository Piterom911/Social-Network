import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../../API/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10;
        }
        profileAPI.getProfileID(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let ProfileWithRouter = withRouter(ProfileContainer);

let mapStateToProps = (state) => ({profile: state.profile});

export default connect(mapStateToProps, {setUserProfile})(ProfileWithRouter);