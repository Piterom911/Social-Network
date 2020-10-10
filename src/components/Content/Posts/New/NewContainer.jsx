import New from "./New";
import {connect} from "react-redux";
import {addPostComment} from "../../../../redux/postReducer";

const mapStateToProps = (state) => {
    return {
        newValue: state.postPage.newValue
    }
};

const NewContainer = connect(mapStateToProps, {addPostComment})(New);

export default NewContainer;
