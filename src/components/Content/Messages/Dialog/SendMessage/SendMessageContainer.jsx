import {sendNewMessage} from "../../../../../redux/messageReducer";
import SendMessage from "./SendMessage";
import {connect} from "react-redux";

const SendMessageContainer = connect(null, {sendNewMessage})(SendMessage);

export default SendMessageContainer;