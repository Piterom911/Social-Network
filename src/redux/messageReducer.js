const ADD_NEW_MESSAGE_BODY = "ADD-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({
                ava: "https://themified.com/friend-finder/images/users/user-2.jpg",
                me: "notMe",
                name: "Linda Lohan",
                time: "3 days ago",
                message: body
            });
            return state;

        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ( {type: ADD_NEW_MESSAGE_BODY, body: text} );

export default messageReducer;