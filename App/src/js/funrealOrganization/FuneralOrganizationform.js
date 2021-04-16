import React, {Component, useEffect, useState} from "react";
import InformationDeceased from "./formOrganization/InformationDeceased"
import TypeCeremony from "./formOrganization/TypeCeremony";
const FuneralOrganizationform=(props)=>{

const back=()=>{
    props.changeChoiceOptionsHendel()
}


    return(
        <div className="containerform">
            <div style = {{backgroundImage: 'url("/src/resources/img/logo.jpg")'}} className="logo"></div>
            <div className="form">
                <InformationDeceased/>
                <TypeCeremony/>
                <div className="back" onClick={back}>
                    <img src="/src/resources/img/back.svg" title="COFNI"/>
                </div>
            </div>
        </div>
    )
}

export default FuneralOrganizationform