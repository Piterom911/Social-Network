const ADD_NEW_POST = "ADD-NEW-POST";
const ADD_NEW_VALUE_TO_POST_TEXTAREA = "ADD-NEW-VALUE-TO-POST-TEXTAREA";
const ADD_NEW_MESSAGE_BODY = "ADD-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {

    _state: {
        content: {
            messagesPage: {
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
                        ava: "https://themified.com/friend-finder/images/users/user-2.jpg",
                        me: "notMe",
                        name: "Linda Lohan",
                        time: "3 days ago",
                        message: "Hello my little friend!"
                    },
                    {
                        ava: "https://themified.com/friend-finder/images/users/user-1.jpg",
                        me: "me",
                        name: "Sarah Cruiz",
                        time: "3 days ago",
                        message: "I really want you to know about..."
                    },
                    {
                        ava: "https://themified.com/friend-finder/images/users/user-2.jpg",
                        me: "notMe",
                        name: "Linda Lohan",
                        time: "3 days ago",
                        message: "You are scaring me! Please say what you want to say!"
                    },
                    {
                        ava: "https://themified.com/friend-finder/images/users/user-1.jpg",
                        me: "me",
                        name: "Sarah Cruiz",
                        time: "3 days ago",
                        message: "Oh... Do not be afraid. It is no matter any more. You will know soon)"
                    }
                ],
                newMessageBody: ""
            },
            postPage: {
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
            }
        },
        sidebar: {
            chat: [
                { ava: "https://themified.com/friend-finder/images/users/user-2.jpg" },
                { ava: "https://themified.com/friend-finder/images/users/user-3.jpg" },
                { ava: "https://themified.com/friend-finder/images/users/user-4.jpg" },
                { ava: "https://themified.com/friend-finder/images/users/user-5.jpg" },
                { ava: "https://themified.com/friend-finder/images/users/user-6.jpg" },
                { ava: "https://themified.com/friend-finder/images/users/user-7.jpg" },
                { ava: "https://themified.com/friend-finder/images/users/user-8.jpg" },
                { ava: "https://themified.com/friend-finder/images/users/user-9.jpg" },
                { ava: "https://themified.com/friend-finder/images/users/user-10.jpg" }
            ]
        }
    },

    _callSubscriber() {},

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
      if (action.type === "ADD-NEW-POST") {
          let newPost = {
              name: "Diana",
              img: "https://themified.com/friend-finder/images/users/user-11.jpg",
              text: this._state.content.postPage.newValue
          };
          this._state.content.postPage.oldMessages.push(newPost);
          this._state.content.postPage.newValue = "";
          this._callSubscriber(this._state);
      } else if (action.type === "ADD-NEW-VALUE-TO-POST-TEXTAREA") {
          this._state.content.postPage.newValue = action.value;
          this._callSubscriber(this._state);
      } else if (action.type === ADD_NEW_MESSAGE_BODY) {
          this._state.content.messagesPage.newMessageBody = action.body;
          this._callSubscriber(this._state);
      } else if (action.type === SEND_MESSAGE) {
          let body = this._state.content.messagesPage.newMessageBody;
          this._state.content.messagesPage.newMessageBody = "";
          this._state.content.messagesPage.messages.push({
              ava: "https://themified.com/friend-finder/images/users/user-2.jpg",
              me: "notMe",
              name: "Linda Lohan",
              time: "3 days ago",
              message: body
          });
          this._callSubscriber(this._state);
      }
    }

};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const newValueActionCreator = (text) => {
    return {
        type: ADD_NEW_VALUE_TO_POST_TEXTAREA,
        value: text
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: ADD_NEW_MESSAGE_BODY,
        body: text
    }
};

export default store;