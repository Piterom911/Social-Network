import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
    postPage: postReducer,
    profile: profileReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer,
    users: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;