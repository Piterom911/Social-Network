import React from "react";
import Header from "./Header";
import {getUserData} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData();
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

export default connect(mapStateToProps, {getUserData})(HeaderContainer);