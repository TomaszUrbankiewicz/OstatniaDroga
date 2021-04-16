import React, {Component, useEffect, useState} from "react";

const Checkedbox=(props)=>{

    const changeCheckboxHendele2=(e)=>{
        props.changeCheckboxHendel(e);
    }
    return(
        <label className="checkbox">
            <input type="checkbox" checked={props.checkboxValue.a} onChange={changeCheckboxHendele2} name="a"/>
            <span></span>
        </label>
    )
}

export default Checkedbox;