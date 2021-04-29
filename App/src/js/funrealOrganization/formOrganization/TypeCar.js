import React, {Component, useEffect, useState} from "react";

const TypeCar=(props)=>{

    
    const changeFormHendel=(e)=>{
        props.changeFormNumberHendel(e)
    }

    
    return(
        <div className="car">   
                    <h2>Wbór pojazdu na ostatnią drogę zmarłego </h2>
                    <div className="presides">
                        <div className="this_or_that">
                        <label >Wybierz karawan </label>
                        <select id="car styl"name="CarType" value={props.form.CarType} onChange={changeFormHendel}>
                            {props.car.map((el, id)=>{
                                return   <option key={id} value={el.id}>{el.nazwa} {el.rodzaj}: {el.cena}zł</option>
                            })}
                        </select>
                        </div>
                    </div>
        </div>       
    )
}

export default TypeCar; 
