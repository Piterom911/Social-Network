import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profileReducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 10;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then( response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let ProfileWithRouter = withRouter(ProfileContainer);

let mapStateToProps = (state) => ({profile: state.profile});

export default connect(mapStateToProps, {setUserProfile})(ProfileWithRouter);