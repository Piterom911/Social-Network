const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";

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
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_COMMENT:
            let newPost = {
                name: "Diana",
                img: "https://themified.com/friend-finder/images/users/user-11.jpg",
                text: action.newComment
            };
            return {...state,
                oldMessages: [...state.oldMessages, newPost],
            };
        default:
            return state;
    }
};

export const addPostComment = newComment => ({ type: ADD_NEW_COMMENT, newComment });

export default postReducer;