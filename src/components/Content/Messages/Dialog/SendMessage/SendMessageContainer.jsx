import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../../redux/messageReducer";
import SendMessage from "./SendMessage";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newMessageBody: state.messagesPage.newMessageBody
    }
};

const mapDispatchToProps = (dispatch) => {
    const sendNewMessage = () => {
        dispatch(sendMessageCreator());
    };
    const newMessageChange = (newValue) => {
        dispatch(updateNewMessageBodyCreator(newValue));
    };
    return {
        newMessageChange: newMessageChange,
        sendNewMessage: sendNewMessage
    }
};

const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage);

export default SendMessageContainer;