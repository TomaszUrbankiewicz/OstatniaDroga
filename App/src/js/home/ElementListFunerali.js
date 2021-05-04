import React, { useEffect, useState } from 'react';



const ElementListFunerali=()=>{
    const[listItem, setListItem]=useState([])

    

    useEffect(()=>{
        fetch(`https://ostatniadroga.azurewebsites.net/api/Funreal`
            ).then(response => response.json())
                .then((resp) => {
                    resp.sort(function(a,b){return new Date(a.FunrealDate) - new Date(b.FunrealDate); })
                    setListItem(resp)
                    
        })
    },[])


    return(

       listItem.map((el,id)=>{
            if(new Date(el.FunrealDate)<new Date()){
                return null
            }
            else{
                return(
            <div key={id} className="row">  
                <div className="col-2">{el.Name}</div>
                <div className="col-2">{el.SurName}</div>
                <div className="col-2">{new Date(el.DateOfBirth).getFullYear()-new Date(el.DateOfDeath).getFullYear()}</div>
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
