import React, { useState } from 'react';
import SingUp from "../login/SingUp"
import UserLogin from "../login/UserLogin"

const LoginComponent=(props)=>{
    const back=()=>{
        props.transitionHendle()
    }
    
    return(
    <div className="containerLogin">
        <div style = {{backgroundImage: 'url("/src/resources/img/logo.jpg")'}} className="logo"></div>
        
        <div className="boxContent">
            <h1>ZALOGUJ SIĘ DO APLIKACJI</h1>
            <div className="containerInputLogo">
                <UserLogin loginOK={props.loginOK}/>
                <SingUp loginOK={props.loginOK}/>
            </div>
        </div>
        <div className="back" onClick={back}>
            <img src="/src/resources/img/back2.svg" title="COFNI"/>
        </div>
    </div>
    )
}


export default LoginComponent