import React, {Component, useEffect, useState} from "react";
import Checkedbox from "../funrealOrganization/formOrganization/Checkedbox";

const Services=(props)=>{

const[hidden, setHidden]=useState(1)

    const hangeClassHidden=(e)=>{
        if(e.target.name=="button_clean") setHidden(1)
        else if(e.target.name=="button_light") setHidden(2)
        else if(e.target.name=="button_order") setHidden(3)
    }

    const changeFormHendel=(e)=>{
        props.changeFormNumberHendel(e)
    }

    return(
    <section className="service">
        <button name="button_clean" onClick={hangeClassHidden}>SPRZĄTAJ</button><button name="button_light"onClick={hangeClassHidden}>ZAPAL ZNICZ</button><button name="button_order" onClick={hangeClassHidden}>ZAMÓW POMNIK</button>
        <div className={(hidden==1)?"clean":"service-hidden"}>
            <div >
                <Checkedbox changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.washing} checkboxName="washing"/> <h1>Mycie pomnika 30zł {hidden}</h1>
            </div>
            <div >
                <Checkedbox changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.pastinf} checkboxName="pastinf"/> <h1>Pastowanie pomnika 20zł</h1>
            </div>
            <div >
                <Checkedbox changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.tidying} checkboxName="tidying"/> <h1>Porządtkowanie terenu wokuł grobu 15zł</h1>
            </div>
            <div >
                <Checkedbox changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.deletion} checkboxName="deletion"/> <h1>Usuwamy wypalonych zniczy i zwiędłych kwiatów 5zł</h1>
            </div>
            <div >
                <Checkedbox changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.care} checkboxName="care"/> <h1>Pielegnacja zieleni i roślin 15zł</h1>
            </div>
        </div>
        <div className={(hidden==2)?"lamp":"service-hidden"}>
            <div>
                <label>Małay 3zł/ilość:</label>
                <input type="number" min="0" max="50"name="lampSmall" value={props.lampSmall} onChange={changeFormHendel}/>
            </div>
            <div>
                <label>Średni 8zł/ilość:</label>
                <input type="number" min="0" max="50"name="lampMedium" value={props.lampMedium} onChange={changeFormHendel}/>
            </div>
            <div>
                <label>Duży 12zł/ilość:</label>
                <input type="number" min="0" max="50"name="lampBig" value={props.lampBig} onChange={changeFormHendel}/>
            </div>
        </div>
        <div className={(hidden==3)?"box_monument":"service-hidden"}>
            <div className="monumen">
                <Checkedbox changeCheckboxHendel={props. changeRadioMonumentHendel}  checkboxValue={props._valueCheckbox.monument.monument_1} checkboxName="monument_1"/> <img/> 
            </div>
            <div className="monument">
                <Checkedbox changeCheckboxHendel={props.changeRadioMonumentHendel}  checkboxValue={props._valueCheckbox.monument.monument_2} checkboxName="monument_2"/> <img/> 
            </div>
            <div className="monument">
                <Checkedbox changeCheckboxHendel={props.changeRadioMonumentHendel}  checkboxValue={props._valueCheckbox.monument.monument_3} checkboxName="monument_3"/> <img/> 
            </div>
            <div className="monument">
                <Checkedbox changeCheckboxHendel={props.changeRadioMonumentHendel}  checkboxValue={props._valueCheckbox.monument.monument_4} checkboxName="monument_4"/> <img/> 
            </div>

        </div>
    </section>
    )}

export default Services;
