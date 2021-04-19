import React, { useState } from 'react';

const LoginComponent=(props)=>{
    const [loginValue, setLoginValue]=useState("")
    const [hasloValue, setHasloValue]=useState("")


    const changeValue=(e)=>{
        if(e.target.name=="login"){
            setLoginValue(e.target.value)
        }
        else if(e.target.name=="haslo"){
            setHasloValue(e.target.value)
        }
    }

    const loginTry=()=>{
        console.log("loguje")
        const user={
            Login: loginValue,
            Pass: hasloValue
        };

        fetch("http://auapi.azurewebsites.net/api/people/login",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json"
            }
        }).then( resp =>{
            return resp.json();}).then(user=>{
                console.log(user.loged)
                if(user.loged){
                props.loginOK();
                }
                else{
                        alert("błąd logowania")
                    }
            });
    }

    return(
    <div className="containerLogin">
        <div style = {{backgroundImage: 'url("/src/resources/img/logo.jpg")'}} className="logo"></div>
        <div className="boxContent">
            <h1>ZALOGUJ SIĘ DO APLIKACJI</h1>
            <div className="containerInputLogo">
                <label>Login</label><input type="text" placeholder="podaj login" value={loginValue} onChange={changeValue} name="login"/><br/>
                <label>Hasło</label><input type="password" placeholder="podaj hasło" value={hasloValue} onChange={changeValue} name="haslo"/><br/>
                <button onClick={loginTry}>ZALOGUJ</button>
            </div>
        </div>
    </div>
    )
}


export default LoginComponent