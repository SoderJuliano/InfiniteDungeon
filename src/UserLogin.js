import React, { useState } from 'react';
import "./App.css";
import { Redirect } from 'react-router-dom'

const UserLogin = () => {

   async function loginJson(){
    const recipeUrl = 'http://localhost:5000/login';
    const postBody = {
        name: document.getElementById("nameInput").value,
            password: document.getElementById("pass").value
    };
    const requestMetadata = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    };

   await fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(recipes => {
            console.log(recipes)
        });
}
        
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
                <input type="password" id="pass" /><br /><br />
                <button id='login-bnt' onClick={() =>loginJson()}>Login</button>
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