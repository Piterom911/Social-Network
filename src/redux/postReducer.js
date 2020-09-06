const ADD_NEW_POST = "ADD-NEW-POST";
const ADD_NEW_VALUE_TO_POST_TEXTAREA = "ADD-NEW-VALUE-TO-POST-TEXTAREA";

let initialState = {
    oldMessages: [
        {
            name: "Diana",
            img: "https://themified.com/friend-finder/images/users/user-11.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        },
        {
            name: "John",
            img: "https://themified.com/friend-finder/images/users/user-4.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        }
    ],
    newValue: "ddd"
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                name: "Diana",
                img: "https://themified.com/friend-finder/images/users/user-11.jpg",
                text: state.newValue
            };
            return {...state,
                oldMessages: [...state.oldMessages, newPost],
                newValue: ""
            };
        case ADD_NEW_VALUE_TO_POST_TEXTAREA:
            return {...state,
                newValue: action.value};
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const newValueActionCreator = (text) => ({type: ADD_NEW_VALUE_TO_POST_TEXTAREA, value: text});

export default postReducer;