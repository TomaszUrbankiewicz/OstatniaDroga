import React, {Component, useEffect, useState} from "react";



const InformationDeceased=(props)=>{

    const changeFormHendel=(e)=>{
        props.changeFormValueHendel(e);
    }
    const  changeNumberHendel=(e)=>{
        
        props.changeFormNumberHendel(e);
    }


    return(
        <div className="informationDeceased">
            <h1>INFORMACJE O ZMARŁYM</h1>
            <div className="border"></div>
            <div className="inputBoxMax">
                <div className="inputBoxMini">
                    <div className="input"> <label>Imię</label><input type="text" name="Name" value={props.form.Name} onChange={changeFormHendel}/></div>   
                    <div className="input"><label>Nazwisko</label><input type="text"name="SurName" value={props.form.SurName} onChange={changeFormHendel}/></div>
                    <div className="input"><label>Data Urodzenia</label><input type="date"name="DateOfDeath" value={props.form.DateOfDeath} onChange={changeFormHendel} /></div>
                    <div className="input"><label>Data śmierci</label><input type="date" name="DateOfBirth" value={props.form.DateOfBirth} onChange={changeFormHendel}/></div>
                </div>
                <div className="inputBoxMini">
                    <div className="input"><label>Miejsce zamiezkania</label><input type="text" name="Adress" value={props.form.Adress} onChange={changeFormHendel}/></div>
                    <div className="input"><label>PESEL</label><input type="text" name="PESEL" value={props.form.PESEL} onChange={changeNumberHendel}/></div>
                    <div className="input"><label>Numer aktu zgonu</label><input type="text" name="DeathCertificateNumber" value={props.form.DeathCertificateNumber} onChange={changeNumberHendel}/></div>
                </div>
            </div>
        </div>
    )
}


export default InformationDeceased;
