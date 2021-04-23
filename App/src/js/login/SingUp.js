import React, { useEffect, useState } from 'react';

const SingUp=(props)=>{
    const[valueInput, setValueImput]=useState({Login:"", Pass:"",Name:"",SurName:"",Mail:""})

    const changeValue=(e)=>{
        const{name, value}=e.target
    
        setValueImput(poprzedni=>{
            return{
                ...poprzedni, [name]:value
            }}) 
            //console.log(valueInput)
    }

        const SingUpTry=()=>{
                console.log("jestem")
            const singTry={
                Login: valueInput.Login,
                Pass: valueInput.Pass,
                Name: valueInput.Name,
                SurName:valueInput.SurName,
                Mail: valueInput.Mail
            };

            fetch("http://ostatniadroga.azurewebsites.net/api/SingUp",{
                method:"POST",
                body:JSON.stringify(singTry),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then( resp =>{
                return resp.json();}).then(resp=>{
                    
                    if(resp.singedUp){
                    alert(`Zarejestrowałeś się do aplikacji "OstatniaDroga". By wejść do aplikacji zaloguj sie!`)
                    setValueImput({Login:"", Pass:"",Name:"",SurName:"",Mail:""})
                    //console.log(setValueImput);
                    }
                    else{
                        alert("coś poszło nie tak")
                        if(resp.faultType==1){
                            alert("coś poszło nie tak! Wartośc formularza jest pusta")
                        }
                        else if(resp.faultType==2){
                            alert("coś poszło nie tak! Uzytkownik o takim loginie juz istnieje")
                        }
                        
                    }
            }).catch((e)=>{console.log(e)});
        }
    

    return(
    <div className="register">
        <div className="inputRegister">
            <label>Login</label><input type="text" placeholder="nadaj login" value={valueInput.Login} name="Login" onChange={changeValue}/><br/>
            <label>Hasło</label><input type="password" placeholder="nadaj hasło" value={valueInput.Pass} name="Pass"  onChange={changeValue}/><br/>
            <label>Imię</label><input type="text" placeholder="podaj imię" value={valueInput.Name} name="Name"  onChange={changeValue}/><br/>
            <label>Nazwisko</label><input type="text" placeholder="podaj nazwisko" value={valueInput.SurName} name="SurName"  onChange={changeValue}/><br/>
            <label>e-mail</label><input type="email" placeholder="podaj e-mail" value={valueInput.Mail} name="Mail"  onChange={changeValue}/><br/>
        </div>
        <div>
            <button onClick={SingUpTry}>REJESTRUJ</button>
        </div>
    </div>
    )}

export default SingUp