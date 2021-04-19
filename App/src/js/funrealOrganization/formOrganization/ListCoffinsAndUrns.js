import React, {Component, useEffect, useState} from "react";

const ListCoffinsAndUrns=(props)=>{

    const changeFormHendel=(e)=>{
        props.changeFormNumberHendel(e)
    }
    return(
        <div className="container_select">
                <select id="styl"disabled={(props.checkboxValue)?false:true} name="BurialTypeNumber" value={props.form.BurialTypeNumber} onChange={changeFormHendel}>
                {props.trumny.map((el,id)=>{
                    return   <option key={id} value={(props.checkboxValue)?el.id:1}>{el.nazwa}: {el.cena}zł</option>
                })}
                </select>

                <select id="styl" disabled={(props.checkboxValue)?true:false} name="BurialTypeNumber" value={props.form.BurialTypeNumber} onChange={changeFormHendel}>
                {props.urny.map((el,id)=>{
                    return   <option key={id} value={(props.checkboxValue)?1:el.id}>{el.nazwa}: {el.cena}zł</option>
                    })}
                </select>        
        </div>
    )
    
}


export default ListCoffinsAndUrns