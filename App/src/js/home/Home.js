import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Hamburger from "./Hamburger"
import MenuBottom  from "./MenuBottom"
import ApplicationInformation from "./ApplicationInformation"
import FuneralHome from "./FuneralHome";
import service from "../data/service"
import FuneralsList from "./FuneralsList";
const Home=(props)=>{
/// stejt pokazujący strukture pełóne meni lub hamburger
    const[hamburgerShow, setHamburgerShow]=useState(true)
    const [menuBottomShow, setMenuBottomShow]=useState(true)


    const menuBottomHendel=()=>{
        setMenuBottomShow((menuBottomShow)?false:true)
    }

    const resizeHendle=()=>{
        if (window.innerWidth<1170){
            setHamburgerShow(false)
        }
        else{
            setHamburgerShow(true) 
        }
    }

    useEffect(()=>{
        window.addEventListener("resize", resizeHendle)
        resizeHendle();
    },[])

    const transitionHendle=()=>{
        props.transition()
    }

    return(
    <div className="containerHome">
        {(hamburgerShow)?<Header/>:<Hamburger menuBottomHendel={menuBottomHendel} />}
        {(menuBottomShow)? null: <MenuBottom />}
        <FuneralHome service={service}/>
        <FuneralsList/>
        <ApplicationInformation transitionHendle={transitionHendle}/>
        
    </div>
    )
}


export default Home