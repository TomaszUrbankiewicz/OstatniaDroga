import React, { useState } from 'react';
import header_menu from "../data/header_menu";
import HeaderHomeLi from "./HeaderHomeLi"

const Header=()=>{
    
    return(
        <div className="naw">
            <div style = {{backgroundImage: 'url("/src/resources/img/logo.jpg")'}} className="logo">
            </div>
            <div className="container_nav_ul">
                <ul>
                    {header_menu.map((el, id)=>{
                        return(<HeaderHomeLi key={id} element={el}/>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Header