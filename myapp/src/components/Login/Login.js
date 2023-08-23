import './Login.css';
import { useState } from 'react';


function Login(props) {

    function onLoginClick(e) {
        e.preventDefault();

        const userDeatils = {
            userName: userName,
            password: password
        }


        console.log("Calling backend API with details:", userDeatils)

        setTimeout(() => {
            const isValidCredentials = true;
            if (isValidCredentials) {
                props.onLogin();
            }
        },2000)
    }


    const [userName, changeUserName] = useState("");
    const [password, changePassword] = useState("");

    function onUserNameChange(e) {
        changeUserName(e.target.value);
    }

    function onPasswordChange(e) {
        changePassword(e.target.value);
    }

    return (
        <div className="loginPage">
            <h1>Login Page</h1>
            <div className="loginFormBox">
                <form className="loginForm">
                    <div>
                        <label id="UserName">UserName</label>
                        <input onChange={onUserNameChange} value={userName} type="text" placeholder="UserName" />
                    </div>
                    <div>
                        <label id="password">Password</label>
                        <input onChange={onPasswordChange} value={password} type="password" placeholder="Password" />
                    </div>
                    <input onClick={onLoginClick} type="submit" value="Login" />
                </form>
            </div>
        </div>
    )

}

export default Login;