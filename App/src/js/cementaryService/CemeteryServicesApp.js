import React, {Component, useEffect, useState} from "react";
import YourGraves from "./YourGraves";
import PermanentlyOrOnce from "./PermanentlyOrOnce";
import Services from "./Services";

const CemeteryServicesApp=(props)=>{

    const [show, setShow ]=useState(false)
    const [informtionGraves, setInformtionGrave]=useState({name:"", surName:""})
    const[valueCheckbox, setValueCheckbox]=useState({
        cyclicOrOnece:true,
        cyclic:{
            cyclic_1:true,
            cyclic_2:false,
            cyclic_3:false
        },
            washing:false,
            pastinf:false,
            tidying:false,
            deletion:false,
            care:false,

            lampSmall:0,
            lampMedium:0,
            lampBig:0,

            flowersSmall:0,
            flowersMedium:0,
            flowersBig:0,

            monument:{
                monument_1:false,
                monument_2:false,
                monument_3:false,
                monument_4:false,
            },
        ActiveService:false
    })
    
    

    const changeCheckboxHendel=(e)=>{
       
        const{name, checked}=e.target
        setValueCheckbox(poprzedni=>{
            return{
                ...poprzedni, [name]:Boolean(checked)
            }})
        
    }

   

    const changeCheckboxHendelservice=(e)=>{
        const{name, checked}=e.target
        setValueCheckbox(poprzedni=>{
            return{
                ...poprzedni, [name]:Boolean(checked)
            }})
    }


///wybur częstotliwoiści usługi
    const changeRadioHendel=(e)=>{
        const{name}=e.target
        if(name=="cyclic_1"){
            setValueCheckbox(poprzedni=>{
                return{
                    ...poprzedni, cyclic:{cyclic_1:true,cyclic_2:false, cyclic_3:false}
                }})
        }
        else  if(name=="cyclic_2"){
            setValueCheckbox(poprzedni=>{
                return{
                    ...poprzedni, cyclic:{cyclic_2:true,cyclic_1:false, cyclic_3:false}
                }})
        }
        else  if(name=="cyclic_3"){
            setValueCheckbox(poprzedni=>{
                return{
                    ...poprzedni, cyclic:{cyclic_3:true,cyclic_2:false, cyclic_1:false}
                }})
        }
    }

    const changeRadioMonumentHendel=(e)=>{
        console.log("jestem")
        const{name}=e.target
        if(name=="monument_1"){
            console.log("jestem1")
            setValueCheckbox(poprzedni=>{
                return{
                    ...poprzedni, monument:{monument_1:true,monument_2:false, monument_3:false,monument_4:false,}
                }})
        }
        else  if(name=="monument_2"){
            console.log("jestem2")
            setValueCheckbox(poprzedni=>{
                return{
                    ...poprzedni,monument:{monument_2:true,monument_1:false, monument_3:false,monument_4:false}
                }})
        }
        else  if(name=="monument_3"){
            setValueCheckbox(poprzedni=>{
                return{
                    ...poprzedni, monument:{monument_3:true,monument_2:false, monument_1:false,monument_4:false}
                }})
        }
        else  if(name=="monument_4"){
            setValueCheckbox(poprzedni=>{
                return{
                    ...poprzedni, monument:{monument_4:true,monument_3:false,monument_2:false, monument_1:false}
                }})
        }
    }

    const changeNumberHendel=(e)=>{
        const{name, value}=e.target
        if(value!=""){
        if(!isNaN(value)){
        setValueCheckbox(poprzedni=>{
            return{
                ...poprzedni, [name]:parseInt(value)
            }}) 
            
        }
        }
        else{
        setForm(poprzedni=>{
            return{
                ...poprzedni, [name]:(value)
            }}) 
            
        }
    }

    const setShowHendel=()=>{
        setShow(false)
        
    }

    useEffect(()=>{
        console.log(valueCheckbox)
    },[valueCheckbox])

    const editForm=(name, surName )=>{
        setInformtionGrave({name:name, surName:surName})
        fetch(`http://ostatniadroga.azurewebsites.net/api/Service/${props.whoLoggedd.Login}/${name}/${surName}`       ////
        ).then(response => response.json())
        .then(resp => {
            setValueCheckbox({
                cyclicOrOnece:resp.CyclicOrOnece,
                cyclic:{
                    cyclic_1:resp.Cyclic.Cyclic_1,
                    cyclic_2:resp.Cyclic.Cyclic_2,
                    cyclic_3:resp.Cyclic.Cyclic_3
                },
                    washing:resp.Washing,
                    pastinf:resp.Pasting,
                    tidying:resp.Tidying,
                    deletion:resp.Deletion,
                    care:resp.Care,
        
                    lampSmall:resp.LampSmall,
                    lampMedium:resp.LampMedium,
                    lampBig:resp.LampBig,
        
                    flowersSmall:resp.FlowersSmall,
                    flowersMedium:resp.FlowersMedium,
                    flowersBig:resp.FlowersBig,
        
                    monument:{
                        monument_1:resp.Monument.Monument_1,
                        monument_2:resp.Monument.Monument_2,
                        monument_3:resp.Monument.Monument_3,
                        monument_4:resp.Monument.Monument_4,
                    },
                ActiveService:resp.ActiveService}
        )})
        setShow(true)
    }

//COFanie
    const backHendle=()=>{
        props.event(0)
        
    }
    
    return(
        <div className="container">
            <div className="user_end_list">
                <div style = {{backgroundImage: 'url("src/resources/img/logo.jpg")'}} className="logo"></div>
                <div className="user">
                    <div className="imgUser">
                        <div className="img"><img src="/src/resources/img/user.svg"/></div>
                        <h1>{props.whoLoggedd.Name}</h1>
                    </div>
                    <div className="span_i_graves">
                        <span>Twoje groby</span>
                    <YourGraves whoLoggedd={props.whoLoggedd} editForm={editForm} show={show} />
                    </div>
                </div>
            </div>
            {(show)?<PermanentlyOrOnce name_surName={informtionGraves} changeCheckbox={changeCheckboxHendel} changeRadio={changeRadioHendel} _valueCheckbox={valueCheckbox} />:null}
            {(show)? <Services whoLoggedd={props.whoLoggedd} setShowHendel={setShowHendel} name_surName={informtionGraves} changeRadioMonumentHendel={ changeRadioMonumentHendel}changeCheckbox={changeCheckboxHendelservice} _valueCheckbox={valueCheckbox} changeFormNumberHendel={changeNumberHendel}/>:null}
           
        <div className="back"onClick={backHendle}>
                    <img src="/src/resources/img/back2.svg" title="COFNI"/>
                </div>
        </div>
    )
}

export default CemeteryServicesApp