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
        <div className="container_find_grave">
            <h1>Znajdz grób</h1>
            <div className="searching">
            <h2>Szukaj po:</h2>
                <div className="boxInput">
                    <div className="input">
                        <div className="input"> <label>Imieniu</label><input placeholder="nie znam" type="text" name="name" value={form.name} onChange={changeValueHendel}/></div>
                        <div className="input"> <label>Nazwisku</label><input placeholder="nie znam " type="text" name="surname" value={form.surname} onChange={changeValueHendel}/></div>
                        <label>Datcie śmierci </label>
                        <div className="from_and_to">
                        <div className="input"> <label>od:</label><input id="od" type="number" name="deathyearfrom" value={form.deathyearfrom} onChange={changeNumberHendel}/></div>
                        <div className="input"> <label>do:</label><input id="do" type="number" name="deathyearto" value={form.deathyearto} onChange={changeNumberHendel}/></div>
                        </div>
                        <label>Cmentarzu </label>
                            <select id="cemetery styl" name="cemetery" value={form.emetery} onChange={changeValueHendel}>
                                <option key={0} value="">nie wiem </option>
                                {service.cmentarze.map((el,id)=>{
                                    return   <option key={id+1} value={el}>{el}</option>
                                })}
                            </select>
                    </div>   
                </div>
                <button>SZUKAJ</button>
            </div>
            <div className="list_container"> 
                <h1>Wynik wyszukiwania</h1>       
                    <section  ection className="found">
                        <div className="row first">  
                            <div className="col-3">Imię</div>
                            <div className="col-3">Nazwisko</div>
                            <div className="col-2">Cmentarz</div>
                            <div className="col-1">Sektor</div>
                            <div className="col-1">Rząd</div>
                            <div className="col-1">Miejsce</div>
                            <div className="col-1">Dodaj </div>
                        </div>
                        {(graves.length!=0)?
                        graves.map((el,id)=>{
                                return (
                                    <div key={id} className="row "> 
                                        <div className="col-3">{el.Name}</div>
                                        <div className="col-3">{el.SurName}</div>
                                        <div className="col-2">{el.Cementary}</div>
                                        <div className="col-1">{el.Position.Sector}</div>
                                        <div className="col-1">{el.Position.Row}</div>
                                        <div className="col-1">{el.Position.Place}</div>
                                        <div className="col-1"> <img src="/src/resources/img/add.svg" title="Dodaj do listy grobów"></img></div>
                                        <div className="col-12">{el.Name} {el.SurName}</div>
                                        <div className="col-12">{el.Position.Sector}/{el.Position.Row}/{el.Position.Place} </div>
                                        <div className="col-12">{el.Cementary} <img src="/src/resources/img/add.svg" title="Dodaj do listy grobów"></img></div>
                                    </div>
                                )
                            }):<p>BRAK WYSZUKIWANIA</p>}
                    </section>
            </div>    
            <div className="back"onClick={backHendle}>
                    <img src="/src/resources/img/back2.svg" title="COFNI"/>
            </div>
        </div>
    )
}


export default FindGraveApp
