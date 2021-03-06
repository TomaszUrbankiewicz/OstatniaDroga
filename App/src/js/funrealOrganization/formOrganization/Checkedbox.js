import React, {Component, useEffect, useState} from "react";

const Checkedbox=(props)=>{

    const changeCheckboxHendele2=(e)=>{
        props.changeCheckboxHendel(e);
    }

    
    return(
        <label className="checkbox">
            <input type="checkbox"  checked={props.checkboxValue} onChange={changeCheckboxHendele2} name={props.checkboxName}/>
            {(props.invert)? <span><div className={(props.checkboxValue)?null:"accepted"}></div></span> : <span><div className={(props.checkboxValue)?"accepted":null}></div></span>}
        </label>
    )
}

export default Checkedbox;
