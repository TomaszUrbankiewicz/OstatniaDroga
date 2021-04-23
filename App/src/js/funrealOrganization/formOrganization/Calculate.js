import React, { useEffect, useState } from 'react';


const Calculate=(props)=>{


    return(
        <div className="containerCalculate">
            <h1>CAŁOŚCIOWY RACHYNEK ZA USŁUGI</h1>
            <section className="calculate">
                <div className="row first">  
                    <div className="col-6">Nazwa Usługi</div>
                    <div className="col-3">Cena</div>
                    <div className="col-3">Razem</div>
                </div>
                <div className="row">  
                    <div className="col-6">OSOBA PROWADZĄCA</div>
                    <div className="col-3">{props.price.leader} zł</div>
                    
                </div>
                <div className="row">  
                    <div className="col-6">RODZAJ POCHÓWKU</div>
                    <div className="col-3">{props.price.kindOfBurial} zł</div>
                    
                </div>
                <div className="row">  
                    <div className="col-6">KARAWAN</div>
                    <div className="col-3">{props.price.hearse} zł</div>
                    
                </div>
                <div className="row">  
                    <div className="col-6">WIĄZANKA/KI</div>
                    <div className="col-3">{props.price.flowers} zł</div>
                </div>
                <div className="row">  
                    <div className="col-9"></div>
                    <div className="col-3">{props.price.leader+props.price.flowers+props.price.hearse+props.price.kindOfBurial} zł</div>
                </div>
            </section>
            
        </div>
    )
}

export default Calculate;