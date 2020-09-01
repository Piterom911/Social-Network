const ADD_NEW_POST = "ADD-NEW-POST";
const ADD_NEW_VALUE_TO_POST_TEXTAREA = "ADD-NEW-VALUE-TO-POST-TEXTAREA";

const postReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                name: "Diana",
                img: "https://themified.com/friend-finder/images/users/user-11.jpg",
                text: state.newValue
            };
            state.oldMessages.push(newPost);
            state.newValue = "";
            return state;
        case ADD_NEW_VALUE_TO_POST_TEXTAREA:
            state.newValue = action.value;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const newValueActionCreator = (text) => ({type: ADD_NEW_VALUE_TO_POST_TEXTAREA, value: text});

export default postReducer;