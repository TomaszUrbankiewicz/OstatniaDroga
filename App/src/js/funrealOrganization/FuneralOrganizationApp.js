import React, {Component, useEffect, useState} from "react";
import FuneralOrganizationform from "./FuneralOrganizationform";
import ListFunerals from "./ListFunerals";

const FuneralOrganizationApp=(props)=>{
    
    const[choiceOptions, setChoiceOptions]=useState(true)//steit choiceOptions który kieruje nas do formularza
    const[funerals, setFunerals]=useState([{id:2,name:"",surname:""}])
    // 
    useEffect(()=>{
        if(choiceOptions){
        setFunerals([])   
        fetch("http://ostatniadroga.azurewebsites.net/api/Funreal/tomurb"
    ).then(response => response.json())
    .then(resp => {
        resp.forEach((el, id) => {
            console.log(`${el.Name} ${el.SurName}`);
            setFunerals(prev=>[...prev, {id:id,name:el.Name,surname:el.SurName}])
        });
        //setFunerals([]) usówanie wartości z tablicy 
    });
    
    }},[choiceOptions])

    //zdarzenie na powrót
    const backHendle=()=>{
        props.event(0)
    }
    //zdarzenie sprawdzające steita choiceOptions
    const changeChoiceOptionsHendel=()=>{
        setChoiceOptions((choiceOptions)?false:true)
    }
    if(choiceOptions){
    return(
        <div className="containerFuneralOrganization">
            <div className="boxLint_button">
                <div className="funeralOrganizationList">
                    <h1>ZAPLANOWANE POGRZEBY</h1>
                    { (funerals.length>0)? <ul>{(funerals.map((el, id)=>{
                        return(
                            <ListFunerals key={id} id={id} name={el.name} surname={el.surname} date={el.date} changeChoiceOptionsHendel={changeChoiceOptionsHendel} />)}))}
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
            <FuneralOrganizationform changeChoiceOptionsHendel={changeChoiceOptionsHendel}/>
        )
    }
}


export default FuneralOrganizationApp