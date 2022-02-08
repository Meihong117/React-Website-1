import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import NavBar from './components/NavBar';
import TestAPI from './components/TestAPI';
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';


function App() {
  const [isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      
      <TestAPI />
        
    </BrowserRouter>
  );
}

export default App;
