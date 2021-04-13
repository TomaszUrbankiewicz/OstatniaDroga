
import './resources/scss/index.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MainApp from "./js/MainApp";
import Home from "./js/Home"


const  App= () => {
//steit do wykorzystywany w zdarzeniu do zmiany witoku aplikacji/strony głównej
  const [transition, setTransition]=useState(true)

//zdarzenie tóre zmienia widok aplikacja?strona główna
  const transitionHendle=()=>{
    setTransition((transition)?false:true)
  }

  return(
    (transition)? <Home transition={transitionHendle} /> : <MainApp transition={transitionHendle}/>
  )

}

ReactDOM.render(<App name="Your name"/>, document.getElementById('app'));
