import React, {Component, useEffect, useState} from "react";
import Checkedbox from "../funrealOrganization/formOrganization/Checkedbox";
import service from ".././data/service";



const Services=(props)=>{

const[hidden, setHidden]=useState(1)
const [click, setClick]=useState(1)





    const hangeClassHidden=(e)=>{
        if(e.target.name=="button_clean") {
            setHidden(1)
            setClick(1)
        }
        else if(e.target.name=="button_light") {
            setHidden(2)
            setClick(2)
        }
        else if(e.target.name=="button_order"){ 
            setHidden(3)
            setClick(3)
        }        
    }
    



    useEffect(()=>{
        if(props._valueCheckbox.ActiveService==false){
            setHidden(1)
            setClick(1)
        }
    },[props._valueCheckbox.ActiveService])




    const changeFormHendel=(e)=>{
        props.changeFormNumberHendel(e)
    }



    const confirm=()=>{
        console.log("działa")
        const data={
            ActiveService: props._valueCheckbox.ActiveService,
            CyclicOrOnece: props._valueCheckbox.cyclicOrOnece,
            Cyclic: {
                Cyclic_1: props._valueCheckbox.cyclic.cyclic_1,
                Cyclic_2: props._valueCheckbox.cyclic.cyclic_2,
                Cyclic_3: props._valueCheckbox.cyclic.cyclic_3
            },
            Washing: props._valueCheckbox.washing,
            Pasting: props._valueCheckbox.pastinf,
            Tidying: props._valueCheckbox.tidying,
            Deletion: props._valueCheckbox.deletion,
            Care: props._valueCheckbox.care,
            LampSmall: props._valueCheckbox.lampSmall,
            LampMedium: props._valueCheckbox.lampMedium,
            LampBig: props._valueCheckbox.lampBig,
            FlowersSmall: props._valueCheckbox.flowersSmall,
            FlowersMedium: props._valueCheckbox.flowersMedium,
            FlowersBig: props._valueCheckbox.flowersBig,
            Monument: {
                Monument_1: props._valueCheckbox.monument.monument_1,
                Monument_2: props._valueCheckbox.monument.monument_2,
                Monument_3: props._valueCheckbox.monument.monument_3,
                Monument_4: props._valueCheckbox.monument.monument_4
            }
        }
        fetch(`http://ostatniadroga.azurewebsites.net/api/ChangeService/${props.whoLoggedd.Login}/${props.name_surName.name}/${props.name_surName.surName}`,{  ////${props.whoLoggedd.Login}
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.json())
        .then(resp => {
            props.setShowHendel()
        
        });

    }
    





    return(
    <section className="service">
        <div className="container_buttom"><button className={(click==1)?"click":""} name="button_clean" onClick={hangeClassHidden}>SPRZĄTAJ</button><button className={(click==2)?"click":""} name="button_light" onClick={hangeClassHidden}>ZAPAL ZNICZ</button><button className={(click==3)?"click":""}  name="button_order" onClick={hangeClassHidden}>ZAMÓW POMNIK</button></div>
        <div className="box_chang">
        <div className={(hidden==1)?"clean":"service-hidden"}>
            <div className="boxCheckedbox">
                <Checkedbox changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.washing} checkboxName="washing"/> <h1>Mycie pomnika 30zł</h1>
            </div>
            <div  className="boxCheckedbox">
                <Checkedbox changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.pastinf} checkboxName="pastinf"/> <h1>Pastowanie pomnika 20zł</h1>
            </div>
            <div  className="boxCheckedbox">
                <Checkedbox changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.tidying} checkboxName="tidying"/> <h1>Porządtkowanie terenu wokuł grobu 15zł</h1>
            </div>
            <div  className="boxCheckedbox">
                <Checkedbox changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.deletion} checkboxName="deletion"/> <h1>Usuwamy wypalonych zniczy i zwiędłych kwiatów 5zł</h1>
            </div>
            <div  className="boxCheckedbox">
                <Checkedbox changeCheckboxHendel={props.changeCheckbox}  checkboxValue={props._valueCheckbox.care} checkboxName="care"/> <h1>Pielegnacja zieleni i roślin 15zł</h1>
            </div>
        </div>
        <div className={(hidden==2)?"lamp":"service-hidden"}>
            <div className="box_input_namber">
                <label>{service.znicz[0].nazwa} {service.znicz[0].cena} zł/ilość:</label>
                <input type="number" min="0" max="50"name="lampSmall" value={props._valueCheckbox.lampSmall} onChange={changeFormHendel}/>
            </div>
            <div className="box_input_namber">
                <label>{service.znicz[1].nazwa} {service.znicz[1].cena} zł/ilość:</label>
                <input type="number" min="0" max="50"name="lampMedium" value={props._valueCheckbox.lampMedium} onChange={changeFormHendel}/>
            </div>
            <div className="box_input_namber">
                <label>{service.znicz[2].nazwa} {service.znicz[2].cena} zł/ilość:</label>
                <input  type="number" min="0" max="50"name="lampBig" value={props._valueCheckbox.lampBig} onChange={changeFormHendel}/>
            </div>
        </div>
        <div className={(hidden==3)?"box_monument":"service-hidden"}>
            <div className="monument">
                <Checkedbox changeCheckboxHendel={props.changeRadioMonumentHendel}  checkboxValue={props._valueCheckbox.monument.monument_1} checkboxName="monument_1"/> 
                <div className="img" style = {{backgroundImage: `url(${service.pomnik[0].url})`}}></div>
            </div>
            <div className="monument">
                <Checkedbox changeCheckboxHendel={props.changeRadioMonumentHendel}  checkboxValue={props._valueCheckbox.monument.monument_2} checkboxName="monument_2"/> 
                <div className="img" style = {{backgroundImage: `url(${service.pomnik[1].url})`}}></div>
            </div>
            <div className="monument">
                <Checkedbox changeCheckboxHendel={props.changeRadioMonumentHendel}  checkboxValue={props._valueCheckbox.monument.monument_3} checkboxName="monument_3"/> 
                <div className="img" style = {{backgroundImage: `url(${service.pomnik[2].url})`}}></div>
            </div>
            <div className="monument">
                <Checkedbox changeCheckboxHendel={props.changeRadioMonumentHendel}  checkboxValue={props._valueCheckbox.monument.monument_4} checkboxName="monument_4"/> 
                <div className="img" style = {{backgroundImage: `url(${service.pomnik[3].url})`}}></div>
            </div>
        </div>
        
        </div>
        <div className="boxAkcept">
            <button onClick={confirm} disabled={!props._valueCheckbox.ActiveService} id="add">ZATWIERDZ</button>
        </div>
    </section>
    )}

export default Services;
