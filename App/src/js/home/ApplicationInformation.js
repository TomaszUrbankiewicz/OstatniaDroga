import React, { useState } from 'react';

const ApplicationInformation=(props)=>{

    const goToApplication=()=>{
        props.transitionHendle()
    }

    return(
        <section className="informationApplication">
            <h1>INFORMACJE O APLIKACJI</h1>
            <div className="ornament"></div>
            <article>
                <div className="containerParagraph">
                    <p>Aplikacja powstała w trudnym czasie, jakim jest walka z pandemią. 
                        Jest to alternatywa by bez potrzeby wychodzenia z domu i kontaktu z 
                        innymi zorganizować pogrzeb osoby która odeszła. 
                    </p>
                    <p>Za pośrednictwem naszej aplikacji zadbasz również o wgląd i konserwacje grobu/pomnika bliskiego. 
                        Wychodzimy naprzeciw oczekiwaniom i potrzebom pamięci o swoich bliskich. 
                        Logując się w naszej aplikacji możesz zlecić sprzątanie otoczenia przy grobie jak i jego konserwację. 
                        W propozycjach dla naszych klientów mamy również asortyment zniczy i wiązanek, które położymy za ciebie. 
                    </p>
                    <p>
                    Zdajemy sobie sprawę że czas pandemii nie pozwala na wiele. 
                    Jednak Aplikacja sprawdzi się nie tylko w czasie pandemii. 
                    Żyjemy w czasach gdzie ciagle jestesmy zabiegani i zapracowani a niekoniecznie przez nie chcieć zaniedbujemy groby naszych bliskich. 
                    Dajemy szansę na bieżącą dbałość o miejsca spoczynku bliskich za naszym pośrednictwem
                    </p>
                </div>
                <div className="containerButtom">
                    <h1>Zaloguj się i zobacz aplikacje!</h1>
                    <button onClick={goToApplication}>APLIKACJA</button>
                </div>
            </article>

        </section>

    )
}
export default ApplicationInformation