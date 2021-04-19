import React, { useState } from 'react';

const HeaderHomeLi=(props)=>{

    const[addClassHover, setAddClassHover]=useState(false)

    const onMouseOver_ul_hover=()=>{
        setAddClassHover(true)
    }

    const onMouseLeaveHover=()=>{
        setAddClassHover(false)
    }

    return( <li onMouseOver={onMouseOver_ul_hover} className={(addClassHover)?"liHover": null} onMouseLeave={onMouseLeaveHover}><a href="#">{props.element}</a></li> )
};


export default HeaderHomeLi