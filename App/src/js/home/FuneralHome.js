import React, { useEffect, useState } from 'react';

const FuneralHome=(props)=>{
    
    
    return(
        <section className="containerInfo">
            <h1>INFORMACJE O ZAKŁADZIE</h1>
            <div className="ornament"></div>
            <article>
            <div className="containerfoto">
            <div style = {{backgroundImage: 'url("./src/resources/img/wreath.svg")'}} className="foto"></div>
                </div>
                <div className="containerParagraph">
                    <p>{props.service.oZakladzie}</p>
                </div>

            </article>
        </section>
    )
}

export default FuneralHome