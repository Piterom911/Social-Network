import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const contacts = [
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
];

ReactDOM.render(
  <React.StrictMode>
    <App contacts={contacts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
