import React, { useEffect, useState } from 'react';
import ELServices from "./ELService";
import service from ".././data/service";


const Carousel=(props)=>{
    if(props.whichChoice==1){
    return(
        <ELServices service={service.trumny} description="TRUMNY"/>
    )
    }
    else if(props.whichChoice==2){
        return(
            <ELServices service={service.urny} description="URNY"/>
        )
    }
    else if(props.whichChoice==3){
        return(
            <ELServices service={service.znicz} description="ZNICZE"/>
        )
    }
    else if(props.whichChoice==4){
        return(
            <ELServices service={service.wiazanki} description="WIĄZANKI"/>
        )
    }
    else if(props.whichChoice==5){
        return(
           
            <ELServices style={{}} service={service.karawany} description="KARAWANY"/>
           
            
        )
    }
}


export default Carousel