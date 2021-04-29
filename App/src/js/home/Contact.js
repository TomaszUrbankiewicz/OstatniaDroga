import React, { useEffect, useState } from 'react';
import service from ".././data/service"

const Contact=()=>{
    return(
        <section id="4" className="containerContact">
            <h1>KONTAKT</h1>
            <div className="ornament"></div>
            <article className="information">
                <div className="box">
                    <div className="foto">
                        <img src="/src/resources/img/phone.svg"/>
                    </div>
                    <div className="text">
                    <h1>{service.Contact.phone}</h1>
                    </div>
                </div>
                <div className="box">
                    <div className="foto">
                        <img src="/src/resources/img/email.svg"/>
                    </div>
                    <div className="text">
                    <h1>{service.Contact.mail}</h1>
                    </div>
                </div>
                <div className="box">
                    <div className="foto">
                        <img src="/src/resources/img/home.svg"/>
                    </div>
                    <div className="text">
                        <h1>{service.Contact.adres.city}</h1>
                        <h1>{service.Contact.adres.street} {service.Contact.adres.namber}</h1>
                    </div>
                </div>
            </article>
            <footer>Praca końcowa CoderLab Tomasz Urbankiewicz © Wszelkie prawa zastrzeżopne </footer>
        </section>
    )
    
}

export default Contact