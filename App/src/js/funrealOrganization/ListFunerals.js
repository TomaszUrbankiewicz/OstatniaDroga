import React, {Component, useEffect, useState} from "react";


const ListFunerals=(props)=>{

    const editFuneral=()=>{
        props.changeChoiceOptionsHendel(props.name,props.surname)
    }


    const deleteFuneral=()=>{
        fetch(`http://ostatniadroga.azurewebsites.net/api/Funreal/${props.whoLoggedd}/${props.name}/${props.surname}`,{
        method:"DELETE"
    }).then(response => response.json())
    .then(resp => {
        props.reflesh()
    })
}

    return(
    <li id="listFunerals" key={props.id}>{props.name} {props.surname} {props.date}
        <div className="edit" onClick={editFuneral}><img src="/src/resources/img/edit.svg" title="EDYTUJ"></img> </div>
        <div className="edit" onClick={deleteFuneral}><img src="/src/resources/img/trash.svg" title="USUŃ"></img> </div>
    </li> )
}

export default ListFunerals