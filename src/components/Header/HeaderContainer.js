import React from "react";
import Header from "./Header";
import {isAuthFetching, setFullName, setMeLogged, setUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {authAPI, profileAPI} from "../../API/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.isAuthFetching(true);
        authAPI.authMe()
            .then(response => {
                let {id, login, email} = response.data;
                this.props.setUserData(id, login, email);
                this.props.isAuthFetching(false);
                this.props.setMeLogged(true);
                    profileAPI.getProfileID(response.data.id)
                        .then( user => {
                        this.props.setFullName(user.fullName);
                    })
            })
    }
    render() {
        return <Header isFetchin={this.props.isFetching} isLogged={this.props.isLogged} fullName={this.props.fullName} />
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    isLogged: state.auth.isLogged,
    fullName: state.auth.fullName
});

export default connect(mapStateToProps, {setUserData, isAuthFetching, setMeLogged, setFullName})(HeaderContainer);