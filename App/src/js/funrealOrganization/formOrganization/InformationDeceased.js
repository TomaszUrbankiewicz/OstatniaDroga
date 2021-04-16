import React, {Component, useEffect, useState} from "react";


const InformationDeceased=()=>{

    const[formValue, setformValue]=useState({name:"", surname:""})

    const changeFormHendel=(e)=>{
        const{name, value}=e.target

        setformValue(prevState=>{
            return{...prevState, [name]:value}
        })

        console.log(e.target)
    }


    return(
        <div className="informationDeceased">
            <h1>INFORMACJE O ZMARŁYM</h1>
            <div className="border"></div>
            <div className="inputBoxMax">
                <div className="inputBocMini">
                    <div className="input"> <label>Imię</label><input type="text" name="name" /></div>   
                    <div className="input"><label>Nazwisko</label><input type="text"name="surname" value={formValue.surname} onChange={changeFormHendel}/></div>
                    <div className="input"><label>Data Urodzenia</label><input type="date" /></div>
                    <div className="input"><label>Data śmierci</label><input type="date"/></div>
                </div>
                <div className="inputBocMini">
                    <div className="input"><label>Miejsce zamiezkania</label><input type="text"/></div>
                    <div className="input"><label>PSEL</label><input type="text"/></div>
                    <div className="input"><label>Numer aktu zgonu</label><input type="text"/></div>
                </div>
            </div>
        </div>
    )
}


export default InformationDeceased;
