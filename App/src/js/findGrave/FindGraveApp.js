import React, {Component, useEffect, useState} from "react";

const FindGraveApp=(props)=>{
    
    const backHendle=()=>{
        props.event(0)
    }
    
    return(
        <div className="bag">
        <h1>Jesteś w FindGraveApp</h1>
        <button onClick={backHendle}>cofni do wyboru</button>
        </div>
    )
}


export default FindGraveApp