import React from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
import About from './objects/About';
import AboutLink from './objects/AboutLink';
import IconClose from './objects/iconClose';

const App = () => {
  return (
    <main className="app">
    <Header/>
    <Hashtag/>
    <Checkbox id = "checkbox" value = "show" content = "Mostar eventos"/>
    <About>
       <AboutLink className="-white"/>
       <IconClose/>
     </About>  
    </main>

  );
}

export default App;
