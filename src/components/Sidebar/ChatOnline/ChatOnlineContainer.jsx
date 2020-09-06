import {connect} from "react-redux";
import ChatOnline from "./ChatOnline";

const mapStateToProps = (state) => {
    return {
        chat: state.sidebar.chat
    }
};

const ChatOnlineContainer = connect(mapStateToProps)(ChatOnline);

export default ChatOnlineContainer;