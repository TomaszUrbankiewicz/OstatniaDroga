import React, {Component, useEffect, useState} from "react";


const SelectionCemetery=(props)=>{

    const changeFormHendel=(e)=>{
        props.changeFormValueHendel(e)
    }

return(
<div className="presides">
    <div className="this_or_that">
        <label>Wybierz cmentarz na którym odbędzie się ceremonia </label>
        <select id="cemetery styl" name="Cemetery" value={props.form.Cemetery} onChange={changeFormHendel}>
            {props.cmentarze.map((el,id)=>{
                return   <option key={id} value={el}>{el}</option>
            })}
        </select>
    </div>
</div>)}

export default SelectionCemetery;
