import React, {Component, useEffect, useState} from "react";

const FuneralOrganizationApp=(props)=>{
    
    const backHendle=()=>{
        props.event(0)
    }
    
    return(
        <>
        <h1>Jesteś w FuneralOrganizationApp</h1>
        <button onClick={backHendle}>cofni do wyboru</button>
        </>
    )
}


export default FuneralOrganizationApp