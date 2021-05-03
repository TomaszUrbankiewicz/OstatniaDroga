import React, { useEffect, useState } from 'react';
import Carousel from "./Carousel"

const Services=()=>{
    const[whichChoice, setWhichChoice]=useState(1)

    const changeChoicePlus=()=>{
        (whichChoice==5)?setWhichChoice(1):setWhichChoice(prew =>prew+1)
    }

    const changeChoiceMinus=()=>{
        (whichChoice==1)?setWhichChoice(5):setWhichChoice(prew =>prew-1)
    }

    return(
        <section id="2" className="containerservice" style = {{backgroundImage: 'url("./src/resources/img/tło.jpg")'}}>
            <h1>NASZA OFERTA</h1>
            <div className="ornament"></div>
            <article>
                <div style = {{backgroundImage: 'url("./src/resources/img/nextR.svg")'}} className="slide  sliteL" onClick={changeChoiceMinus}></div>
                <div className="showing">
                    <Carousel whichChoice={whichChoice}/>
                </div>
                <div style = {{backgroundImage: 'url("./src/resources/img/nextL.svg")'}} className="slide  sliteR" onClick={changeChoicePlus}></div>
            </article>
        </section>
    )
}

export default Services