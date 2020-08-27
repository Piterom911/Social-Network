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
                ]
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

    getState() {
        return this._state;
    },

    _callSubscriber() {},

    addNewPost() {
        let newPost = {
            name: "Diana",
            img: "https://themified.com/friend-finder/images/users/user-11.jpg",
            text: this._state.content.postPage.newValue
        };
        this._state.content.postPage.oldMessages.push(newPost);
        this._state.content.postPage.newValue = "";
        this._callSubscriber(this._state);
    },

    changeValue(value) {
        this._state.content.postPage.newValue = value;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }

};

export default store;