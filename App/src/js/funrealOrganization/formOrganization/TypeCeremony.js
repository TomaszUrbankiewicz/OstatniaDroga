import React, {Component, useEffect, useState} from "react";
import Checkedbox from "./Checkedbox";

const TypeCeremony=()=>{
    const[checkboxValue, setCheckboxValue]=useState({a:false, b:false, test:""})

    const changeCheckboxHendel=(e)=>{
        const{name, checked}=e.target
        console.log(Boolean( checked))
        setCheckboxValue(poprzedni=>{
            return{
                ...poprzedni, [name]:Boolean( checked)
            }})
    }

    const changeValueHendel=(e)=>{
        const{name, value}=e.target
        console.log(Boolean( value))
        setCheckboxValue(poprzedni=>{
            return{
                ...poprzedni, [name]:value
            }})
    }

    useEffect(()=>{
        console.log(checkboxValue)
    },[checkboxValue])
    return(
        <div className="typeCeremony">
            <h1>INFORMACJE DOTYCZĄCE CEREMONI</h1>
            <div className="border"></div>
            <div className="checkboxes">
            <Checkedbox changeCheckboxHendel={changeCheckboxHendel} checkboxValue={checkboxValue.a}/> <h1>boll (ksiąz użędnik)</h1>
                <h1>data ceremoni</h1>
                <h1>godzina ceremoni</h1>
                <h1>cmentarz (string)</h1>
                <h1>bull()trumna urna</h1>
                <h1>wiozanka (typ, rodzaj)</h1>
                <h1>karawan(typ)</h1>
                <input type="text" name="test" value={checkboxValue.test} onChange={changeValueHendel}/>
                    
            </div>
    
        </div>
    )
}

export default TypeCeremony