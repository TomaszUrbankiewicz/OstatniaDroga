import React, { useState } from 'react';

const UserLogin=(props)=>{

    const [loginValue, setLoginValue]=useState("")
    const [hasloValue, setHasloValue]=useState("")


    const changeValue=(e)=>{
        
        if(e.target.name=="Login"){
            setLoginValue(e.target.value)
        }
        else if(e.target.name=="Pass"){
            setHasloValue(e.target.value)
        }
    }



    const loginTry=()=>{
        console.log("loguje")
        const user={
            Login: loginValue,
            Pass: hasloValue
        };

        fetch("http://ostatniadroga.azurewebsites.net/api/Login",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json"
            }
        }).then( resp =>{
            return resp.json();}).then(user=>{
                if(user.logged){    
                props.loginOK(user);
                }
                else{
                        alert("błąd logowania")
                        setLoginValue("");
                        setHasloValue("");

                    }
            }).catch(()=>{console.log("Brak danych z api")});
    }


    return(
    <div className="log">
        <label>Login</label><input type="text" placeholder="podaj login" value={loginValue} onChange={changeValue} name="Login"/><br/>
        <label>Hasło</label><input type="password" placeholder="podaj hasło" value={hasloValue} onChange={changeValue} name="Pass"/><br/>
        <button onClick={loginTry}>ZALOGUJ</button>
    </div>
    )}

export default UserLogin;
