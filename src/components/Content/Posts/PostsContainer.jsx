import {connect} from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        oldMessages: state.postPage.oldMessages,
        newValue: state.postPage.newValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
