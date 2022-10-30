import React, { useEffect, useState } from 'react';



const ElementListFunerali=()=>{
    const[listItem, setListItem]=useState([])
    const lista_pogrzebow = [ 
        { 
            Name: "Mieszko I", SurName: 'Piast', DateOfBirth:'03.04.945', wiek:'33', DateOfDeath:'25.05.992',FunrealDate:'30.12.2022', FunrealTime:'12:30', Cemetery:'Poznan'
        },
        { 
            Name: "Jan", SurName: 'Kowalski', DateOfBirth:'03.04.945', wiek:'87', DateOfDeath:'25.05.992',FunrealDate:'12.02.2023', FunrealTime:'13:30', Cemetery:'Poznan'
        },
        { 
            Name: "Stefan", SurName: 'Nowakowski', DateOfBirth:'03.04.945', wiek:'65', DateOfDeath:'25.05.992',FunrealDate:'02.01.2023', FunrealTime:'14:00', Cemetery:'Warszawa'
        },
        { 
            Name: "Roman", SurName: 'Stefanski', DateOfBirth:'03.04.945', wiek:'93', DateOfDeath:'25.05.992',FunrealDate:'13.01.2023', FunrealTime:'12:00', Cemetery:'Poznan'
        },
        { 
            Name: "Aana", SurName: 'Polipała', DateOfBirth:'03.04.945', wiek:'72', DateOfDeath:'25.05.992',FunrealDate:'23.01.2023', FunrealTime:'12:50', Cemetery:'Łódz'
        }
    ] 

    

    useEffect(()=>{
        fetch(`https://ostatniadroga.azurewebsites.net/api/Funreal`
            ).then(response => response.json())
                .then((resp) => {
                    resp.sort(function(a,b){return new Date(a.FunrealDate) - new Date(b.FunrealDate); })
                    setListItem(resp)
                    
        })
    },[])


    return(

        lista_pogrzebow.map((el,id)=>{
            if(new Date(el.FunrealDate)<new Date()){
                return null
            }
            else{
                return(
            <div key={id} className="row">  
                <div className="col-2">{el.Name}</div>
                <div className="col-2">{el.SurName}</div>
                <div className="col-2">{el.wiek}</div>
                <div className="col-2">{el.FunrealDate.slice(0,10)}</div>
                <div className="col-2">{el.FunrealTime.slice(0,5)}</div>
                <div className="col-2">{el.Cemetery}</div>
            <div className="col-12">{el.Name} {el.SurName}</div>
            <div className="col-12">{el.FunrealDate.slice(0,10)} {el.FunrealTime.slice(0,5)}</div>
            <div className="col-12">{el.Cemetery}</div>

            </div>)}
        
       })
    )
}

export default ElementListFunerali;
