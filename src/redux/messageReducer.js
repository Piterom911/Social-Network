const ADD_NEW_MESSAGE_BODY = "ADD-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    contacts: [
        {
            id: 1,
            name: "Linda Lohan",
            time: "a min ago",
            message: "Oh... Do not be afraid.",
            ava: "https://themified.com/friend-finder/images/users/user-2.jpg"
        },
        {
            id: 2,
            name: "Julia Cox",
            time: "an hour ago",
            message: "see you soon",
            ava: "https://themified.com/friend-finder/images/users/user-10.jpg"
        },
        {
            id: 3,
            name: "Sophia Lee",
            time: "13 hour ago",
            message: "Okay fine. thank you",
            ava: "https://themified.com/friend-finder/images/users/user-3.jpg"
        },
        {
            id: 4,
            name: "John Doe",
            time: "Yesterday",
            message: "hey anybody there",
            ava: "https://themified.com/friend-finder/images/users/user-4.jpg"
        },
        {
            id: 5,
            name: "Anna Young",
            time: "2 days ago",
            message: "I gotta go",
            ava: "https://themified.com/friend-finder/images/users/user-9.jpg"
        },
        {
            id: 6,
            name: "Richard Bell",
            time: "2 days ago",
            message: "Hey there",
            ava: "https://themified.com/friend-finder/images/users/user-8.jpg"
        },
    ],
        messages: [
        {
            id: 1,
            ava: "https://themified.com/friend-finder/images/users/user-2.jpg",
            me: "notMe",
            name: "Linda Lohan",
            time: "3 days ago",
            message: "Hello my little friend!"
        },
        {
            id: 2,
            ava: "https://themified.com/friend-finder/images/users/user-1.jpg",
            me: "me",
            name: "Sarah Cruiz",
            time: "3 days ago",
            message: "I really want you to know about..."
        },
        {
            id: 3,
            ava: "https://themified.com/friend-finder/images/users/user-2.jpg",
            me: "notMe",
            name: "Linda Lohan",
            time: "3 days ago",
            message: "You are scaring me! Please say what you want to say!"
        },
        {
            id: 4,
            ava: "https://themified.com/friend-finder/images/users/user-1.jpg",
            me: "me",
            name: "Sarah Cruiz",
            time: "3 days ago",
            message: "Oh... Do not be afraid. It is no matter any more. You will know soon)"
        }
    ],
        newMessageBody: "Hello"
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 1,
                ava: "https://themified.com/friend-finder/images/users/user-2.jpg",
                me: "notMe",
                name: "Linda Lohan",
                time: "3 days ago",
                message: state.newMessageBody
            };

            return {...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ""
            };
        case ADD_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ( {type: ADD_NEW_MESSAGE_BODY, body: text} );

export default messageReducer;