import React, { useState } from 'react';
import MenuBottom  from "./MenuBottom";

const Hamburger=()=>{
    
    const [changeBelt, setChangeBelt]=useState(true)


    const changeHamburgerHendel=()=>{
        setChangeBelt((changeBelt)?false:true)
    }
    return(
        <div className="naw">
            <div style = {{backgroundImage: 'url("/src/resources/img/logo.jpg")'}} className="logo">
            </div>
            <div className="containerhamburger">
                <div className="hamburger" onClick={changeHamburgerHendel}>
                    <div className={(changeBelt)? "belt": "belt_first"}></div>
                    <div className={(changeBelt)? "belt": null}></div>
                    <div className={(changeBelt)? "belt": "belt_third"} ></div>
                </div>
            </div>
        </div>
    )
    
}
export default Hamburger;
