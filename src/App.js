import React from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
import About from './objects/About';
import InternalHeader from './components/InternalHeader';
import UserProfile from './components/UserProfile';

let activeAbout = "";

const handleClick = () => activeAbout = "-active";




const App = () => {
  return (
    <main className="app">
    <Header onClick={handleClick}/>
    <Hashtag/>
    <Checkbox id = "checkbox" value = "show" content = "Mostar eventos"/>
    <About className={activeAbout}>
        <InternalHeader/>
        <UserProfile/>
     </About>  
    </main>

  );
}

export default App;
