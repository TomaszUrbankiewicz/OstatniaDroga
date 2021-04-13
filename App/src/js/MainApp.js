import React, { useState } from 'react';
import AppChoice from './AppChoice';
import arrayChoice from'./data/data_choice';
import FuneralOrganizationApp from "./FuneralOrganizationApp";
import CemeteryServicesApp from "./CemeteryServicesApp";
import FindGraveApp from "./FindGraveApp";

const MainApp=(props)=>{
    //sate przechowująct informacje na której funkcjonalności aplikacji jesteśmy 
    const [whichChoice, setWchichChoice]=useState(0)

    const transitionHendle=()=>{
        props.transition()
    }

  //zdarzenie zmiany ekranu alikacji(co wybraliśmy)wywoływane w komponentach i przekazane do nich za pomocą props "event"
    const selectedHendle=(id)=>{
        setWchichChoice(id)
    }

  //renderowanie komponentu warunkowe uzależnione od (whichChoice)
    if(whichChoice==1){
        return <FuneralOrganizationApp  event={selectedHendle}/>
    }

    else if(whichChoice==2){
        return<CemeteryServicesApp event={selectedHendle}/>
    }

    else if(whichChoice==3){
        return<FindGraveApp event={selectedHendle}/>
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



    export default MainApp
