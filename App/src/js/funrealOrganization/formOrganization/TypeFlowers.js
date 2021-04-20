import React, {Component, useEffect, useState} from "react";

const TypeFlowers=(props)=>{

    const [flowersArray, setFlowersArray]=useState([props.Flo])
    
    const changeFormHendel=(e)=>{
        props.changeFormNumberHendel(e)
    }
    
    return(
        <div className="containerflowers">   
        <h2>Wybór wiązanki</h2>
        <div className="flowers">
            <div>
                <label>{props.flowers[0].nazwa}: {props.flowers[0].cena}zł/ilość:</label>
                <input type="number" min="0" max="50"name="FlowersSmall" value={props.form.FlowersSmall} onChange={changeFormHendel}/>
            </div>
            <div>
                <label>{props.flowers[1].nazwa}: {props.flowers[1].cena}zł/ilość:</label>
                <input type="number" min="0" max="50"name="FlowersMedium" value={props.form.FlowersMedium} onChange={changeFormHendel}/>
            </div>
            <div>
                <label>{props.flowers[2].nazwa}: {props.flowers[2].cena}zł/ilość:</label>
                <input type="number" min="0" max="50"name="FlowersBig" value={props.form.FlowersBig} onChange={changeFormHendel}/>
            </div>
        </div>
</div>

    )
}

export default TypeFlowers; 
