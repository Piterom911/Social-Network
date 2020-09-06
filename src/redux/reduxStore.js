import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
    postPage: postReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;