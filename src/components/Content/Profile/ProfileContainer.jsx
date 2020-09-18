import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profileReducer";
import * as axios from "axios";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`).then( response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({profile: state.profile});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);