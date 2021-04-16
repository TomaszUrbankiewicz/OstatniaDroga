import React, { useState } from 'react';
import header_menu from "../data/header_menu"; 
import HeaderHomeLi from"./HeaderHomeLi"



const MenuBottom=()=>{

    return(
        <div className="container_menu_bottom">
            <ul>
                {header_menu.map((el, id)=>{
                        return(<HeaderHomeLi key={id} element={el}/>)
                    })}
            </ul>
        </div>
    )
}
export default MenuBottom