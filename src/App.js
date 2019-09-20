import React from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Input from './objects/Input';
const App = () => {
  return (
    <main className="app">
    <Header/>
    <Hashtag/>
    <Input type="checkbox"id="show" value="show" content="Mostar eventos"/>
    
    
    </main>

  );
}

export default App;
