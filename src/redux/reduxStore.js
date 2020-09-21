import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    postPage: postReducer,
    profile: profileReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;