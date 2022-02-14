import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import NavBar from './components/NavBar';
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';


function App() {
  const [isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <GlobalStyle />
      <NavBar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
    
    </Router>
  );
}

export default App;
