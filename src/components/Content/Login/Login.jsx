import React from "react";
import withAuthRedirect from "../../../HOC/CheckAuth/withAuthRerender";
import {Field, Form} from "react-final-form";
import s from "./Login.module.scss"
import {Input} from "../../commonComponents/FormControls/FormControls";
import {composeValidators, maxValue, minValue, required} from "../../../utils/validators";

const LoginForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit}) => (
            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.inputs}>
                    <Field validate={composeValidators(required, minValue(3), maxValue(20))} placeholder={"Login"} name={"userName"} component={Input}/>
                    <Field validate={composeValidators(required, minValue(6), maxValue(20))} placeholder={"Password"} name={"password"} component={Input} type={"password"}/>
                </div>
                <div>
                    <label className={s.myCheckbox}>
                        <Field className={s.checkbox} name={"rememberMe"} component={"input"} type={"checkbox"}/>Remember me.<span/>
                    </label>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        )}
    />
);

const Login = () => {
    const onSubmit = formData => {
        console.log(formData)
    };

    return (
        <div className={s.wrapper}>
            <h1 className={s.heading}>Please, log in.</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
};

export default withAuthRedirect(Login);