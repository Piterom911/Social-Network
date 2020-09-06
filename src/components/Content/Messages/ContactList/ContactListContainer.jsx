import {connect} from "react-redux";
import ContactList from "./ContactList";

const mapStateToProps = (state) => {
    return {
        contacts: state.messagesPage.contacts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const ContactListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactListContainer;
