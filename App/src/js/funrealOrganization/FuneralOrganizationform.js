import React, {Component, useEffect, useState} from "react";
import InformationDeceased from "./formOrganization/InformationDeceased"
import TypeCeremony from "./formOrganization/TypeCeremony";



const FuneralOrganizationform=(props)=>{

const[form, setForm]=useState({
        Name:"",
        SurName:"",
        DateOfDeath: "",
        DateOfBirth: "",
        Adress:"",
        PESEL:"",
        DeathCertificateNumber:"",
        CeremonyType:true, 
        FunrealDate:"",
        FunrealTime:"",
        Cemetery:"",
        BurialType: true,
        BurialTypeNumber:1,
        FlowersSmall:0,
        FlowersMedium:1,
        FlowersBig:0,
        CarType: 1
    })

const back=()=>{
    props.changeChoiceOptionsHendel()
}
//zdarzenie zmieniające value checkboxa
const changeCheckboxHendel=(e)=>{
    const{name, checked}=e.target
    setForm(poprzedni=>{
        return{
            ...poprzedni, [name]:Boolean(checked)
        }})
}

//zdarzenie zmieniające value inputa
const changeValueHendel=(e)=>{
    const{name, value}=e.target
    
    setForm(poprzedni=>{
        return{
            ...poprzedni, [name]:value
        }}) 
}
//zdarzenie zmieniające inputaNamber
const changeNumberHendel=(e)=>{
    const{name, value}=e.target
    if(value!=""){
    if(!isNaN(value)){
    setForm(poprzedni=>{
        return{
            ...poprzedni, [name]:parseInt(value)
        }}) 
    }
    }
    else{
    setForm(poprzedni=>{
        return{
            ...poprzedni, [name]:(value)
        }}) 
    }
}



 // zdażenie wysyłania informacji do api

const sendOrderHendle=()=>{

    const data={
    Name:form.Name,
    SurName:form.SurName ,
    DateOfDeath: form.DateOfDeath,
    DateOfBirth: form.DateOfBirth,
    Adress: form.Adress,
    PESEL: form.PESEL,
    DeathCertificateNumber:form.DeathCertificateNumber,
    CeremonyType:form.CeremonyType,
    FunrealDate:form.FunrealDate,
    FunrealTime: form.FunrealTime,
    Cemetery:form.Cemetery,
    BurialType: form.BurialType,
    BurialTypeNumber: form.BurialTypeNumber,
    FlowersSmall:form.FlowersSmall,
    FlowersMedium: form.FlowersMedium,
    FlowersBig: form.FlowersBig ,
    CarType: form.CarType

    };

    console.log(data)
    if(props.edit){
    fetch("http://ostatniadroga.azurewebsites.net/api/Funreal/tomurb",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.json())
    .then(resp => {
        console.log(resp);
        if(resp.success){
        
        alert("formularz został wysłany");
        props.changeChoiceOptionsHendel()
        }
        else{
            alert(resp.faultDescription)
        }
    });
  }
    else{fetch(`http://ostatniadroga.azurewebsites.net/api/Funreal/tomurb/${props.selektetFunereal.name}/${props.selektetFunereal.surName}`,{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.json())
    .then(resp => {
        console.log(resp);
        if(resp.success){
        
        alert("formularz został wysłant/edytowany");
        props.changeChoiceOptionsHendel()
        }
        else{
            alert(resp.faultDescription)
        }
    });}
}

useEffect(()=>{
    if(!props.edit){
        fetch(`http://ostatniadroga.azurewebsites.net/api/Funreal/tomurb/${props.selektetFunereal.name}/${props.selektetFunereal.surName}`
        ).then(response => response.json())
        .then((resp) => {

            //console.log(resp.DateOfDeath.slice(0,10))
            setForm({
                Name:resp.Name,
                SurName:resp.SurName,
                DateOfDeath: resp.DateOfDeath.slice(0,10) ,
                DateOfBirth: resp.DateOfBirth.slice(0,10) ,
                Adress:resp.Adress ,
                PESEL:resp.PESEL ,
                DeathCertificateNumber:resp.DeathCertificateNumber,
                CeremonyType:resp.CeremonyType, 
                FunrealDate:resp.FunrealDate.slice(0,10),
                FunrealTime:resp.FunrealTime,
                Cemetery:resp.Cemetery,
                BurialType:resp.BurialType,
                BurialTypeNumber:resp.BurialTypeNumber,
                FlowersSmall:resp.FlowersSmall,
                FlowersMedium:resp.FlowersMedium,
                FlowersBig:resp.FlowersBig,
                CarType:resp.CarType
                })
            });
    }
},[])




    return(
        <div className="containerform">
            <div style = {{backgroundImage: 'url("/src/resources/img/logo.jpg")'}} className="logo"></div>
            <div className="form">
                <InformationDeceased changeFormNumberHendel={changeNumberHendel} changeFormValueHendel={changeValueHendel} form={form}/>
                <TypeCeremony form={form} changeFormNumberHendel={changeNumberHendel} changeFormCheckboxHendel={changeCheckboxHendel} changeFormValueHendel={changeValueHendel}/>
                <button onClick={sendOrderHendle}>{(props.edit)?"DODAJ":"ZATWIERDZ"}</button>
                <div className="back" onClick={back}>
                    <img src="/src/resources/img/back2.svg" title="COFNI"/>
                </div>
            </div>
        </div>
    )
}

export default FuneralOrganizationform