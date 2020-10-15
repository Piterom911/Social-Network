import React from "react";
import s from "./SendMessage.module.scss"
import {Field, Form} from "react-final-form";
import {Textarea} from "../../../../commonComponents/FormControls/FormControls";
import {composeValidators, maxValue, required} from "../../../../../utils/validators";

const SendMessage = (props) => {
    const onSubmit = formObj => {
        props.sendNewMessage(formObj.newMessage)
    };

    const FinalMessageForm = props => {
        return (
            <Form onSubmit={onSubmit}>
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit} className={s.form}>
                        <Field component={Textarea} validate={composeValidators(required, maxValue(10))} name={"newMessage"} className={s.text} placeholder="Type your message"/>
                        <button className={s.btn} type="submit">Send</button>
                    </form>
                )}
            </Form>
        )
    };

    return (
        <FinalMessageForm {...props}/>
    )
};

export default SendMessage;