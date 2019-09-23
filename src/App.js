import React from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
import About from './objects/About';
const App = () => {
  return (
    <main className="app">
    <Header/>
    <Hashtag/>
    <Checkbox id = "checkbox" value = "show" content = "Mostar eventos"/>
    <About/>
    </main>

  );
}

export default App;
