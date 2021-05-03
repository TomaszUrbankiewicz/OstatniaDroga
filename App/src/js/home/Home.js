import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Hamburger from "./Hamburger"
import MenuBottom  from "./MenuBottom"
import ApplicationInformation from "./ApplicationInformation"
import FuneralHome from "./FuneralHome";
import service from "../data/service"
import FuneralsList from "./FuneralsList";
import Services from "./Services";
import Contact from "./Contact"
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
        else {
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
    <>
        {(hamburgerShow)?<Header/>:<Hamburger menuBottomHendel={menuBottomHendel} />}
        {(menuBottomShow)? null: <MenuBottom />}
        <div style = {{backgroundImage: 'url("./src/resources/img/tło4.jpg")'}} className="background1"></div>
        <FuneralHome service={service}/>
        <FuneralsList/>
        <div style = {{backgroundImage: 'url("./src/resources/img/tło3.jpg")'}} className="background1"></div>
        <Services/>
        <div style = {{backgroundImage: 'url("./src/resources/img/tło1.jpg")'}} className="background1"></div>
        <ApplicationInformation transitionHendle={transitionHendle}/>
        <Contact id="5"/>
        
    </>
    )
}


export default Home