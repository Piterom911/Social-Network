import React from "react";
import Header from "./Header";
import {isAuthFetching, setFullName, setMeLogged, setUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import * as axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.isAuthFetching(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
            .then(response => {
                let {id, login, email} = response.data.data;
                this.props.setUserData(id, login, email);
                this.props.isAuthFetching(false);
                this.props.setMeLogged(true);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`)
                    .then( user => {
                        this.props.setFullName(user.data.fullName);
                        // console.log(user.data)
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