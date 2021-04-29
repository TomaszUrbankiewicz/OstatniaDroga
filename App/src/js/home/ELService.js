import React, { useEffect, useState } from 'react';

const ELServices=(props)=>{
    return(
        <section className="container_el_service">
            <h1>{props.description}</h1>
            <div className="boxObject">
                {props.service.map((el, id)=>{
                    return(
                    <div key={id} className="object">
                    <h1>{el.nazwa}</h1>
                    <div style = {{backgroundImage: `url(${el.url})`}} className="example"></div>
                    <p>{el.cena} zł</p>
                </div>)
                })}
                
            
            </div>
        </section>
    )
}

export default ELServices