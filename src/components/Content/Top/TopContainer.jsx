import React from "react";
import {connect} from "react-redux";
import {getProfileStatus, updateProfileStatus} from "../../../redux/profileReducer";
import Top from "./Top";

class TopContainer extends React.Component{
    componentDidMount() {
        this.props.getProfileStatus(11450)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return <Top {...this.props}/>
    }
}

const mapStateToProps = state => ({status: state.profile.status});

export default connect(mapStateToProps, {getProfileStatus, updateProfileStatus})(TopContainer);