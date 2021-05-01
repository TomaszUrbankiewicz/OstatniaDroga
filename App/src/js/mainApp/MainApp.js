import React, { useState } from 'react';
import AppChoice from './AppChoice';
import arrayChoice from'../data/data_choice';
import FuneralOrganizationApp from "../funrealOrganization/FuneralOrganizationApp";
import CemeteryServicesApp from "../cementaryService/CemeteryServicesApp";
import FindGraveApp from "../findGrave/FindGraveApp";
import LoginComponent from "./LoginComponent";

const MainApp=(props)=>{
    //sate przechowująct informacje na której funkcjonalności aplikacji jesteśmy 
    const [whichChoice, setWchichChoice]=useState(3)
    //state przechowjący informacje czy użytkownik jest zalogowany
    const [isLoget, setIsLoget]=useState(true)
    const [whoLoggedd, setWhoLoggedd]=useState("")
    
    const loginOK=(user)=>{
        setIsLoget((isLoget)?false:true)
        setWhoLoggedd(user)
    }

    const transitionHendle=()=>{
        props.transition()
    }

  //zdarzenie zmiany ekranu alikacji(co wybraliśmy)wywoływane w komponentach i przekazane do nich za pomocą props "event"
    const selectedHendle=(id)=>{
        setWchichChoice(id)
    }

    if(isLoget){
        //renderowanie komponentu warunkowe uzależnione od (whichChoice)
        if(whichChoice==1){
            return <FuneralOrganizationApp  event={selectedHendle} whoLoggedd={whoLoggedd}/>
        }

        else if(whichChoice==2){
            return<CemeteryServicesApp event={selectedHendle} whoLoggedd={whoLoggedd}/>
        }

        else if(whichChoice==3){
            return<FindGraveApp event={selectedHendle} whoLoggedd={whoLoggedd}/>
        }

        else{
            return (
            <div className="containerBackraund">
                <div className="containerApp">
                    <div className="containerAppChoice">
                    {arrayChoice.map((el, id)=>{
                        return(<AppChoice key={id} choice={el} event={selectedHendle}/>)
                    })}
                    </div>
                <button onClick={transitionHendle}>WRÓĆ DO STRONY GŁÓWNEJ</button> 
                </div>
            </div>
            );
        }
    }
    else{
        return <LoginComponent loginOK={loginOK} transitionHendle={props.transition}/>
    }

}

    export default MainApp
