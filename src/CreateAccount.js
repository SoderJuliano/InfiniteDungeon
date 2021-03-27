import React, { useState } from 'react';
import "./App.css";
import { Redirect } from 'react-router-dom';

const CreateAccount = () => {



    const [sendRegistration, setNeedRegistration] = useState(false)
    const [checkEmail2, setCheckEmail2] = useState(false)
    const [checkEmail1, setCheckEmail1] = useState(false)

    const [checkPass2, setCheckPass2] = useState(false)
    const [checkPass1, setCheckPass1] = useState(false)

     function Registration() {
        console.log(document.getElementById("email").value + " values " + document.getElementById("pass").value);
        let fname = document.getElementById("fname").value;
        let pass = document.getElementById("pass").value;
        let email = document.getElementById("email").value;
        //https://webhook.site/9263114e-3970-4a55-a1a3-1f2304e1d514
            try {

                let result =  fetch('http://localhost:5000/cadastro', {
                    method: 'post',
                    mode: 'no-cors',
                    headers:{
                        'Accept': 'application/json',
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: fname,
                        password: pass,
                        email: email
                    })
                }).then((response)=>response.json())
                .then((responseJson)=>
                {
            
                   this.setState({
                       data:responseJson.token
                   })
                   console.log(this.state.data)
                })
            } catch (e) {
                console.log(e);
            }
            return <Redirect to="/" />
    }
    const checkConditions = () => {
        if (checkEmail2 != checkEmail1) {
            document.getElementById("email3").textContent = "The email don`t macth";
            document.getElementById("email3").style.display = "block";
        } else {
            document.getElementById("email3").textContent = "Rigth";
            document.getElementById("email3").style.color = "black";
        }
    }

    const checkConditionsPass = () => {
        if (checkPass2 != checkPass1) {
            document.getElementById("pass4").textContent = "The password don`t macth";
            document.getElementById("pass4").style.display = "block";
        } else {
            document.getElementById("pass4").textContent = "Rigth";
            document.getElementById("pass4").style.display = "block";
            document.getElementById("pass4").style.color = "black";
        }
    }
    if (checkPass2 != false) {
        checkConditionsPass()
    }
    if (checkEmail2 != false) {
        checkConditions()
    }
    const Todo = () => {
        document.body.style.backgroundImage = "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)";

        return (
            <div className="registration-page">
                <div className="registration-title">
                    <h2>I.D. REGISTRATION</h2>
                </div>

                <div className="registration-div">

                    <form className="registration">
                        <p>Full Name</p>
                        <input className="registration-input" placeholder="tipe in here" id="fname" type="text" />
                        <p>Email</p>
                        <input className="registration-input" onChange={() => setCheckEmail1(document.getElementById("email").value)} id="email" type="e-mail" />
                        <p>Re-enter your e-mail below there</p>
                        <input className="registration-input" onChange={() => setCheckEmail2(document.getElementById("email2").value)} id="email2" type="e-mail" />
                        <p id="email3" className="smallp" >teste</p>
                        <p>Password</p>
                        <input className="registration-input" id="pass" type="password" onChange={() => setCheckPass1(document.getElementById("pass").value)} />
                        <p>Re-enter your password below there</p>
                        <input className="registration-input" id="pass2" type="password" onChange={() => setCheckPass2(document.getElementById("pass2").value)} />
                        <p id="pass4" className="smallp"></p>
                        <br /><br />
                        <button onClick={() => setNeedRegistration(true)}>SEND REGISTRATION</button>
                    </form>
                </div>
            </div>
        );


    }

    const render = () => {
        return (
            sendRegistration ? Registration() : Todo()
        );
    }
    return render();
}
export { CreateAccount };