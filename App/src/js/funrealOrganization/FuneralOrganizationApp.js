import React, {Component, useCallback, useEffect, useState} from "react";
import FuneralOrganizationform from "./FuneralOrganizationform";
import ListFunerals from "./ListFunerals";

const FuneralOrganizationApp=(props)=>{
    
    const[choiceOptions, setChoiceOptions]=useState(true)//steit choiceOptions który kieruje nas do formularza
    const[funerals, setFunerals]=useState([]);
    const[edit, setEdit]=useState(false)//sprawdza czy edytujemy czy dodajemy
    const[selektetFunereal,setSelektetFunereal]=useState({name:"", surName:""})
    // 
    useEffect(()=>{
        reflesh()
    },[choiceOptions])

    const reflesh=()=>{
        if(choiceOptions){  
            fetch(`https://ostatniadroga.azurewebsites.net/api/Funreal/${props.whoLoggedd.Login}`
        ).then(response => response.json())
        .then(resp => {
            setFunerals([])
            resp.forEach((el, id) => {
                setFunerals(prev=>[...prev, {id:id,name:el.Name,surname:el.SurName}])
            });
            
    })}}

    //zdarzenie na powrót
    const backHendle=()=>{
        props.event(0)
    }
    //zdarzenie sprawdzające steita choiceOptions
    const changeChoiceOptionsHendel=()=>{
        setEdit(true)
        setChoiceOptions((choiceOptions)?false:true)
    }
//przekierowanie do edycji formularza
    const changeEditHendel=(name, surName)=>{
        setEdit(false)
        setChoiceOptions((choiceOptions)?false:true)
        setSelektetFunereal({name:name, surName:surName})
       

    }

    if(choiceOptions){
    return(
        <div className="containerFuneralOrganization">
            <div className="user">
                <img src="/src/resources/img/user.svg"/>
                <h1>{props.whoLoggedd.Name}</h1>
            </div>
            <div className="boxLint_button">
                <div className="funeralOrganizationList">
                    <h1>ZAPLANOWANE POGRZEBY</h1>
                    { (funerals.length>0)? <ul>{(funerals.map((el, id)=>{
                        return(
                            <ListFunerals key={id} id={id} name={el.name} surname={el.surname} date={el.date} changeChoiceOptionsHendel={ changeEditHendel} reflesh={reflesh} whoLoggedd={props.whoLoggedd}/>)}))}
                            </ul>:<h2>Obecnie nie ma zaplanowanych pogrzebów</h2>}
                </div>
                <button className="organize" onClick={changeChoiceOptionsHendel}>ORGANIZUJ POGRZEB</button>
                <div className="back" onClick={backHendle}>
                    <img src="/src/resources/img/back.svg" title="COFNI DO WYBORU"/>
                </div>
            </div>
        </div>
    
    )}
    else {
        return(
            <FuneralOrganizationform changeChoiceOptionsHendel={changeChoiceOptionsHendel} edit={edit} selektetFunereal={selektetFunereal} whoLoggedd={props.whoLoggedd}/>
        )
    }
}


export default FuneralOrganizationApp