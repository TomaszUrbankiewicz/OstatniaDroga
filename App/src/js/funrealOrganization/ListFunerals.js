import React, {Component, useEffect, useState} from "react";


const ListFunerals=(props)=>{

    const editFunerals=()=>{
        props.changeChoiceOptionsHendel()
    }

    return(
    <li id="listFunerals" key={props.id}>{props.name} {props.surname} {props.date}
        <div className="edit" onClick={editFunerals}><img src="/src/resources/img/edit.svg" title="EDYTUJ"></img> </div>
    </li> )
}

export default ListFunerals