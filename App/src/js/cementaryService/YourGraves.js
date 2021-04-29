import React, {Component, useEffect, useState} from "react";



const YourGraves=()=>{
    const [grivers, setGrivers]=useState([{//przechowuje tablice z groami uzytkownika
        Name:"Tom",
        SurName:"Urb", 
        Cemetery:"Spycimierz", 
        DateOfDeath: "20-03-2018",
        DateOfBirth: "03-05-1980",
        FunrealDate:"20-11-2018",
        position:{
                sector:"B",
                row:22,
                place:234
        } 
    },
    {Name:"Tom22",
    SurName:"Urb22", 
    Cemetery:"Spycimierz22", 
    DateOfDeath: "20-03-2018",
    DateOfBirth: "03-05-1980",
    FunrealDate:"20-11-2018",
    position:{
            sector:"B",
            row:22,
            place:234
    }} ,
    {Name:"Tom22",
    SurName:"Urb22", 
    Cemetery:"Spycimierz22", 
    DateOfDeath: "20-03-2018",
    DateOfBirth: "03-05-1980",
    FunrealDate:"20-11-2018",
    position:{
            sector:"B",
            row:22,
            place:234
    }} 
])   

    return(
        <article className="list_of_griver">
            
            {grivers.map((el, id)=>{
            return(
                <h1 key={id}>{el.Name} {el.SurName} {el.FunrealDate} {el.Cemetery} {el.position.sector}/{el.position.row}/{el.position.place}</h1>
            )
            })}
        </article>
    )
}


export default YourGraves;
