import React, {Component, useEffect, useState} from "react";
import service from ".././data/service"
const FindGraveApp=(props)=>{
    

    const [graves, setGraves]=useState([]);
    const [form, setForm]=useState({name:"",surname:"",cemetery:"",deathyear:0,deathyearfrom:1990,deathyearto:2015});

    const backHendle=()=>{
        props.event(0)
    }
            /// zmiana inputa
    const changeValueHendel=(e)=>{
        const{name, value}=e.target

        
        setForm(poprzedni=>{
            return{
                ...poprzedni, [name]:value
            }}) 
    }

    const changeNumberHendel=(e)=>{
        const{name, value}=e.target
        if(value!=""){
        if(!isNaN(value)){
        setForm(poprzedni=>{
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

console.log(form)


    //////////////////////////////////&surname=${form.surname}&cemetery=${form.cemetery}&deathyear=${form.deathyear}&deathyearfrom=${form.deathyearfrom}&deathyearto=${form.deathyearto}


        useEffect(()=>{
            fetch(`http://ostatniadroga.azurewebsites.net/api/Graves/Search?${(form.name!=="")?`name=${form.name}`: `name=-`}${(form.surname!=="")?`&surname=${form.surname}`: `&surname=-`}${(form.cemetery!=="")?`&cemetery=${form.cemetery}`: `&cemetery=-`}&deathyearfrom=${form.deathyearfrom}&deathyearto=${form.deathyearto}`       ////${props.whoLoggedd.Login}
            ).then(response => response.json())
            .then(resp => {
                console.log(resp)
                setGraves(resp)
            })     
        },[form])


   
    
    return(
        <div style={{backgroundColor:"white"}} className="">

<div className="input"> <label>Imię</label><input type="text" name="name" value={form.name} onChange={changeValueHendel}/></div>
<div className="input"> <label>nazwisko</label><input type="text" name="surname" value={form.surname} onChange={changeValueHendel}/></div>
<div className="input"> <label>data śmierci od</label><input type="number" name="deathyearfrom" value={form.deathyearfrom} onChange={changeNumberHendel}/></div>
<div className="input"> <label>data śmierci do</label><input type="number" name="deathyearto" value={form.deathyearto} onChange={changeNumberHendel}/></div>
<label>Wybierz cmentarz  </label>
        <select id="cemetery styl" name="cemetery" value={form.emetery} onChange={changeValueHendel}>
        <option key={0} value=""></option>
            {service.cmentarze.map((el,id)=>{
                return   <option key={id+1} value={el}>{el}</option>
            })}
           
        </select>


<div>
    <ul>
        {graves.map((el,id)=>{
            return <li key={id}>{el.Name}</li>
        })}
    </ul>
</div>



        <button onClick={backHendle}>cofni do wyboru</button>
        </div>
    )
}


export default FindGraveApp