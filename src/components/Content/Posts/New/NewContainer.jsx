import React from "react";
import {addPostActionCreator, newValueActionCreator} from "../../../../redux/postReducer";
import New from "./New";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newValue: state.postPage.newValue
    }
};

const mapDispatchToProps = (dispatch) => {
    const newValue = (text) => {
        dispatch(newValueActionCreator(text))
    };

    const addNewPost = () => {
        dispatch(addPostActionCreator());
    };
    return {
        changeValue: newValue,
        addNewPost: addNewPost
    }
};

const NewContainer = connect(mapStateToProps, mapDispatchToProps)(New);

export default NewContainer;
