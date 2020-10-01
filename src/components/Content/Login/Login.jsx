import React from "react";
import withAuthRedirect from "../../../HOC/CheckAuth/withAuthRerender";

const Login = () => {
    return (
        <h1>LOGIN</h1>
    )
};

export default withAuthRedirect(Login);