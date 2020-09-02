import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../../redux/messageReducer";
import SendMessage from "./SendMessage";

const SendMessageContainer = (props) => {
    const sendNewMessage = () => {
        props.dispatch(sendMessageCreator());
    };
    const newMessageChange = (newValue) => {
        props.dispatch(updateNewMessageBodyCreator(newValue));
    };

    return (<SendMessage newMessageChange={newMessageChange} messages={props.messages.newMessageBody} sendNewMessage={sendNewMessage}/>)
};

export default SendMessageContainer;