//komponent prezentujący możliwości wyboru funcjonalność aplikacji 
import React, {Component, useEffect, useState} from "react";

const AppChoice=(props)=>{
    const [hover, setHover]=useState(true)

    const onHover=()=>{
        setHover(true)
    }

    const offHover=()=>{
        setHover(false)
    }


    const selectedHendle=()=>{
        props.event(props.choice.id);
    }
    return(
        <div className={(hover)? "containerChoice containerChoiceHover":"containerChoice" } onClick={selectedHendle} onMouseOver={onHover} onMouseOut={offHover}>
            <h1>{props.choice.title}</h1>
            <ul>
                {props.choice.array.map((el, id)=>{
                return <li key={id}>{el}</li>
                })}
            </ul>
            <img src={props.choice.imgUrl}/>
        </div>
    )
}

export default AppChoice
