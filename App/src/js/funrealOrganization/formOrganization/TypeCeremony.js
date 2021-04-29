import React, {Component, useEffect, useState} from "react";
import Checkedbox from "./Checkedbox";
import ListCoffinsAndUrns from "./ListCoffinsAndUrns";
import service from "../../data/service";
import DateEndHouer from "./DateEndHouer";
import SelectionCemetery from "./SelectionCemetery";
import TypeCar from "./TypeCar";
import TypeFlowers from "./TypeFlowers";



const TypeCeremony=(props)=>{

    const changeCheckboxHendel=(e)=>{
        props.changeFormCheckboxHendel(e)
    }

    return(
        <div className="typeCeremony">
            <h3>INFORMACJE DOTYCZĄCE CEREMONII</h3>
            <div className="border"></div>
            <div className="filling">
                <div>
                    <h2>Wybierz osobę prowadzącą ceremonię</h2>
                    <div className="presides">
                        <div className="this_or_that">
                            <Checkedbox changeCheckboxHendel={changeCheckboxHendel} checkboxValue={props.form.CeremonyType} checkboxName="CeremonyType" invert={false}/> <h1>KSIĄDZ</h1>
                        </div>
                        <div className="this_or_that">
                            <Checkedbox changeCheckboxHendel={changeCheckboxHendel} checkboxValue={props.form.CeremonyType} checkboxName="CeremonyType" invert={true}/> <h1>URZĘDNIK</h1>
                        </div>
                    </div>
                </div>
                <DateEndHouer form={props.form}  changeFormValueHendel={props.changeFormValueHendel} />
                <SelectionCemetery cmentarze={service.cmentarze} form={props.form}  changeFormValueHendel={props.changeFormValueHendel}/>
                <div className="burialType">
                    <h2>Wybierz rodzaj pochówku</h2>
                    <div className="presides">
                        <div className="this_or_that">
                        </div>
                        <div className="this_or_that">
                            <Checkedbox changeCheckboxHendel={changeCheckboxHendel} checkboxValue={props.form.BurialType} checkboxName="BurialType" invert={true}/> <h1>URNA</h1>
                        </div>
                    </div>
                    <ListCoffinsAndUrns trumny={service.trumny} urny={service.urny} checkboxValue={props.form.BurialType} form={props.form}  changeFormNumberHendel={props.changeFormNumberHendel}/>    
                </div>
                <TypeCar car={service.karawany} form={props.form}  changeFormNumberHendel={props.changeFormNumberHendel}/>
                <TypeFlowers flowers={service.wiazanki} form={props.form}  changeFormNumberHendel={props.changeFormNumberHendel}/>
            </div>

    
        </div>
    )
}

export default TypeCeremony



