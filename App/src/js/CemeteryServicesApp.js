import React, {Component, useEffect, useState} from "react";

const CemeteryServicesApp=(props)=>
{
    const backHendle=()=>{
        props.event(0)
    }
    
    return(
        <>
        <h1>CemeteryServicesApp</h1>
        <button onClick={backHendle}>cofni do wyboru</button>
        </>
    )
}

export default CemeteryServicesApp