import React,{ useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
import LayerDark from './objects/LayerDark';
import InternalHeader from './components/InternalHeader';
import UserProfile from './components/UserProfile';


const App = () => {
const handleClickAdd = () => setActiveLayerDark("-active");
const handleClickRemove = () => setActiveLayerDark("");  

const [activeLayerDark,setActiveLayerDark] = useState("")

  return (
    <main className="app">
    <Header onClick={handleClickAdd}/>
    <Hashtag/>
    <Checkbox id = "checkbox" value = "show" content = "Mostar eventos"/>
    <LayerDark className={activeLayerDark}>
        <InternalHeader onClick={handleClickRemove}/>
        <UserProfile/>
     </LayerDark>  
    </main>

  );
}

export default App;
