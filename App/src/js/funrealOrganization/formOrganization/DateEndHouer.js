import React, {Component, useEffect, useState} from "react";

const DateEndHouer=(props)=>{

    const changeFormHendel=(e)=>{
        props.changeFormValueHendel(e)
    }

    return(
        <div className="date_end_houer">   
                    <h2>Podaj datę i godzinę w której ma się odbyć ceremonia</h2>
                    <div className="presides">
                        <div className="this_or_that">
                            <label>Data ceremonii</label><input type="date" name="FunrealDate" value={props.form.FunrealDate} onChange={changeFormHendel}/>
                        </div>
                        <div className="this_or_that">
                            <label>Godzina ceremonii</label><input type="time" name="FunrealTime" value={props.form.FunrealTime} onChange={changeFormHendel}/>
                        </div>
                    </div>
                </div>
    )
}

export default DateEndHouer; 
