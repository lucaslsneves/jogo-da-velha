import React from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
import About from './objects/About';
import InternalHeader from './components/InternalHeader';
import AvatarProfile from './objects/AvatarProfile';
import AvatarLucas from './img/lucas.jpeg';

const App = () => {
  return (
    <main className="app">
    <Header/>
    <Hashtag/>
    <Checkbox id = "checkbox" value = "show" content = "Mostar eventos"/>
    <About>
        <InternalHeader/>
        <AvatarProfile src={AvatarLucas} alt="Avatar Lucas"/>
     </About>  
    </main>

  );
}

export default App;
