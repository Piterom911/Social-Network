import React from "react";
import {connect} from "react-redux";
import Dialog from "./Dialog";

const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
