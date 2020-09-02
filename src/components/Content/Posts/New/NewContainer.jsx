import React from "react";
import {addPostActionCreator, newValueActionCreator} from "../../../../redux/postReducer";
import New from "./New";


const NewContainer = (props) => {


    const newValue = (text) => {
        props.dispatch(newValueActionCreator(text))
    };

    const addNewPost = () => {
        props.dispatch(addPostActionCreator());
    };


    return <New addNewPost={addNewPost} newValue={props.newValue} changeValue={newValue}/>

};

export default NewContainer;
