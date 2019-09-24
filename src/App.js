import React,{ useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
import About from './objects/About';
import InternalHeader from './components/InternalHeader';
import UserProfile from './components/UserProfile';


const App = () => {
const handleClickAdd = () => setActiveAbout("-active");
const handleClickRemove = () => setActiveAbout("");  

const [activeAbout,setActiveAbout] = useState("")

  return (
    <main className="app">
    <Header onClick={handleClickAdd}/>
    <Hashtag/>
    <Checkbox id = "checkbox" value = "show" content = "Mostar eventos"/>
    <About className={activeAbout}>
        <InternalHeader onClick={handleClickRemove}/>
        <UserProfile/>
     </About>  
    </main>

  );
}

export default App;
