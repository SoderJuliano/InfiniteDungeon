import React, { useState } from 'react';
import "./App.css";
import { Redirect } from 'react-router-dom'

const UserLogin = () => {

    const [getAccount, setNeedAccount] = useState(false)
    const goToCreateAccount = () => {
        return <Redirect to="/CreateAccount" />
    }
    const [isLogged, setIsLogged] = useState(false)
    const loggedComponent = () => {
        return <Redirect to="/new-player" />
    }
    const login = () => {
        return (
            <div className="main-div-body">
                <div className="login">
                <h2>Login into game Infinite Dungeon.</h2>
                <h4>User Name</h4>
                <input id="nameInput" onChange={() => { document.getElementById("nameLogin").textContent = "welcome " + document.getElementById("nameInput").value + "."; }} type="text" />
                <h4>User Password</h4>
                <input type="password" name="" id="" /><br /><br />
                <button id='login-bnt' onClick={() => setIsLogged(true)}>Login</button>
                <p id="nameLogin"></p>
                <br />
                <a className="a-createAcc" onClick={() => setNeedAccount(true)}>I don`t have account..click here</a>
            </div>
            </div>
        )
    }

    const render = () => {
        if (getAccount==true) {
            return(goToCreateAccount());
        } else {
            return (
                isLogged ? loggedComponent() : login()
            )
        }
    }
    return render();
}

export { UserLogin };