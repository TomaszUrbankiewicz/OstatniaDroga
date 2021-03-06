import React, { useEffect, useState } from 'react';
import ElementListFunerali from "./ElementListFunerali"

const FuneralsList=()=>{

    return(
        <section className="FurneraliList"id="1" >
        <h1>LISTA POGRZEBÓW</h1>
        <div className="ornament"></div>
        <article>
            <div className="containerList">
            <section className="list">
                <div className="row first">  
                    <div className="col-2">Imię</div>
                    <div className="col-2">Nazwisko</div>
                    <div className="col-2">Wiek</div>
                    <div className="col-2">Data </div>
                    <div className="col-2">Godzina</div>
                    <div className="col-2">Cmentarz</div>
                </div>
                <ElementListFunerali/>
            </section>
            </div>
        </article>

    </section>

    )
}

export default FuneralsList