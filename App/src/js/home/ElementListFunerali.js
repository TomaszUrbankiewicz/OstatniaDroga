import React, { useEffect, useState } from 'react';



const ElementListFunerali=()=>{
    const[listItem, setListItem]=useState([{Name:"Jan", Surnme:"Kowalski",Date:"22-05-2021",Hour:"13:30",Cemetery:"Spycimierz"},{Name:"Michał", Surnme:"Nowak",Date:"12-06-2021",Hour:"13:15",Cemetery:"Uniejów"},{Name:"Zbigniew", Surnme:"Woityl",Date:"12-05-2021",Hour:"10:00",Cemetery:"Spycimierz"}])
    return(
       listItem.map((el,id)=>{
        return(
            <div key={id} className="row">  
                <div className="col-3">{el.Name}</div>
                <div className="col-3">{el.Surnme}</div>
                <div className="col-2">{el.Date}</div>
                <div className="col-2">{el.Hour}</div>
                <div className="col-2">{el.Cemetery}</div>
            </div>)
       })
    )
}

export default ElementListFunerali;
