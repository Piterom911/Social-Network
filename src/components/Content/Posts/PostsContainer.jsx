import {connect} from "react-redux";
import Posts from "./Posts";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        oldMessages: state.postPage.oldMessages,
        newValue: state.postPage.newValue
    }
};
export default compose(
    connect(mapStateToProps, {}))
(Posts);
