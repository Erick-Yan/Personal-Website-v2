import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Slideshow from './components/Slideshow/Slideshow';
import ProjectBoxes from './components/Projects/ProjectBoxes';
import Skills from './components/Skills/Skills';
import Experiences from './components/Experiences/Experiences';
import Contacts from './components/Contacts/Contacts';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Slideshow />
      <Skills />
      <Experiences />
      <ProjectBoxes />
      <Contacts />
    </div>
  );
}

export default App;
