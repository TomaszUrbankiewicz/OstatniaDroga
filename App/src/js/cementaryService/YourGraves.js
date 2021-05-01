import React, {Component, useEffect, useState} from "react";



const YourGraves=(props)=>{
    const [grivers, setGrivers]=useState([])  
    const [selectetId, setSelectetId]=useState()

    useEffect(()=>{
        fetch(`http://ostatniadroga.azurewebsites.net/api/Graves/${props.whoLoggedd.Login}`       ////${props.whoLoggedd.Login}
        ).then(response => response.json())
        .then(resp => {
            setGrivers(resp)
        })
    },[])

    const choiceGrave=(e)=>{
        setSelectetId(e.target.id)
        props.editForm(grivers[e.target.id].Name,grivers[e.target.id].SurName)
        
    }
    return(
        <article className="list_of_griver">
            {(grivers.length>0)?
            grivers.map((el, id)=>{
            return(
                <h1 style={{color:(selectetId==id & props.show)?"#85B7ED":null}} onClick={choiceGrave}id={id} key={id}> {el.Name} {el.SurName} {el.FunrealDate.slice(0,10)} {el.Cemetery} {el.Position.Sector}/{el.Position.Row}/{el.Position.Place}</h1>
            )
            }):null}
        </article>
    )
}


export default YourGraves;
