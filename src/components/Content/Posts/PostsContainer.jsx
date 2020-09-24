import {connect} from "react-redux";
import Posts from "./Posts";
import {compose} from "redux";
import withAuthRedirect from "../../../hoc/CheckAuth/withAuthRerender";

const mapStateToProps = (state) => {
    return {
        oldMessages: state.postPage.oldMessages,
        newValue: state.postPage.newValue
    }
};
export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect)
(Posts);
