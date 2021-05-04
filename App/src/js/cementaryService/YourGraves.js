import React, {Component, useEffect, useState} from "react";



const YourGraves=(props)=>{
    const [grivers, setGrivers]=useState([])  
    const [selectetId, setSelectetId]=useState()

    useEffect(()=>{
        fetch(`https://ostatniadroga.azurewebsites.net/api/Graves/${props.whoLoggedd.Login}`       ////${props.whoLoggedd.Login}
        ).then(response => response.json())
        .then(resp => {
            setGrivers(resp)
        })
    },[])

    const choiceGrave=(e)=>{
        setSelectetId(e.target.id)
        props.editForm(grivers[e.target.id].Name,grivers[e.target.id].SurName)
        
    }


    const minusGrive=(e)=>{
        fetch(`https://ostatniadroga.azurewebsites.net/api/RemoveGrave/${props.whoLoggedd.Login}/${grivers[e.target.id].Name}/${grivers[e.target.id].SurName}`,{
            method:"PUT",
            body:JSON.stringify({}),
            headers:{
                "Content-Type":"application/json"
            }
        }).then( resp =>{
            return resp.json();}).then((resp)=>{ 
                console.log(resp)
                fetch(`https://ostatniadroga.azurewebsites.net/api/Graves/${props.whoLoggedd.Login}`       ////${props.whoLoggedd.Login}
        ).then(response => response.json())
        .then(resp => {
            setGrivers(resp)
        })
            });
    }


    return(
        <article className="list_of_griver">
            {(grivers.length>0)?
            grivers.map((el, id)=>{
            return(<div key={id} className="elList">
                <h1 style={{color:(selectetId==id & props.show)?"#85B7ED":null}} onClick={choiceGrave}id={id} key={id}> {el.Name} {el.SurName} {el.FunrealDate.slice(0,10)} {el.Cemetery} {el.Position.Sector}/{el.Position.Row}/{el.Position.Place}</h1> <img  id={id} onClick={minusGrive} src="/src/resources/img/minus.svg" title="usuń"/>
                </div>
            )
            }):null}
        </article>
    )
}


export default YourGraves;
