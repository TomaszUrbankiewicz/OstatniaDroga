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
                <div className="log">
                    <label>Login</label><input type="text" placeholder="podaj login" value={loginValue} onChange={changeValue} name="Login"/><br/>
                    <label>Hasło</label><input type="password" placeholder="podaj hasło" value={hasloValue} onChange={changeValue} name="Pass"/><br/>
                    <button onClick={loginTry}>ZALOGUJ</button>
                </div>
                <div className="register">
                    <div className="inputRegister">
                    <label>Login</label><input type="text" placeholder="nadaj login" value={loginValue} onChange={changeValue} name="Login2"/><br/>
                    <label>Hasło</label><input type="password" placeholder="nadaj hasło" value={hasloValue} onChange={changeValue} name="Pass2"/><br/>
                    <label>Imię</label><input type="text" placeholder="podaj imię" value={loginValue} onChange={changeValue} name="Login"/><br/>
                    <label>Nazwisko</label><input type="text" placeholder="podaj nazwisko" value={hasloValue} onChange={changeValue} name="haslo"/><br/>
                    <label>e-mail</label><input type="email" placeholder="podaj e-mail" value={hasloValue} onChange={changeValue} name="haslo"/><br/>
                    </div>
                    <div>
                    <button onClick={loginTry}>REJESTRUJ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default LoginComponent