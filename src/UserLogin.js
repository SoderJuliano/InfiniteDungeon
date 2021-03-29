import React, { useState } from 'react';
import "./App.css";
import { Redirect } from 'react-router-dom'

const UserLogin = () => {

    async function  loginJson(){

        try {
            const recipeUrl = 'http://localhost:5000/login';
            const postBody = {
                name: document.getElementById("nameInput").value,
                    password: document.getElementById("pass").value
            };
            const requestMetadata = {
                dataType: 'json',
                method: 'POST',
                mode:'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postBody)
            };
                fetch(recipeUrl, requestMetadata)
                .then(response => response.json())
                .then(value => console.log(value))
                        
          /*  fetch('http://localhost:5000/login', {
                mode:'no-cors',
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: document.getElementById("nameInput").value,
                password: document.getElementById("pass").value,
              })
            })
            .then(async function (response, err) {
                if(err){
                    console.log(err)
                }
                    const data =await response.json();
                    console.log(data);
                })
          */
        } catch (error) {
            console.log(error)
        }

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