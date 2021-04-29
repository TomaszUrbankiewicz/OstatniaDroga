import React, {Component, useEffect, useState} from "react";
import Checkedbox from "../funrealOrganization/formOrganization/Checkedbox"




const PermanentlyOrOnce=(props)=>{

    const[hidden, setHidden]=useState(false)

    const changeHiden=()=>{
        setHidden((hidden)?false:true)
        
    }



    return(
        <section className="choiceReference">
            <label id="date">Wybierz termin realizacji zamówienia</label><input type="date" name="OrderCompletion"/>
            <div className="containerChoicebox">
                <div className="Once">
                    <Checkedbox changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.cyclicOrOnece} checkboxName="cyclicOrOnece" invert={false}/> <h1>Jednorazowo</h1>
                </div>
                <div className="Permanently">
                    <Checkedbox changeHiden={changeHiden} changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.cyclicOrOnece} checkboxName="cyclicOrOnece" invert={true}/> <h1>Powtarzaj</h1>
                </div>
            </div>
            <div className={(hidden)?"length":"length_hidden"}>
                <div className="example">
                    <Checkedbox changeCheckboxHendel={props.changeRadio}  checkboxValue={props._valueCheckbox.cyclic.cyclic_1} checkboxName="cyclic_1"/> <h1> CO TYDZIEŃ </h1>
                </div>
                <div className="example">
                    <Checkedbox changeCheckboxHendel={props.changeRadio}  checkboxValue={props._valueCheckbox.cyclic.cyclic_2} checkboxName="cyclic_2"/> <h1> CO MIESIĄC </h1>
                </div>
                <div className="example">
                    <Checkedbox changeCheckboxHendel={props.changeRadio}  checkboxValue={props._valueCheckbox.cyclic.cyclic_3} checkboxName="cyclic_3"/> <h1> CO ROK </h1>
                </div>
            </div>
        </section>
    )
}

export default PermanentlyOrOnce;
