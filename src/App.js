import React,{ useState } from 'react';
import './App.css';
import HeaderGame from './components/HeaderGame';
import HashtagGame from './components/HashtagGame';
import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';
import InternalHeader from './components/InternalHeader';
import UserProfile from './components/UserProfile';


const App = () => {
const handleClickAdd = () => setActiveLayerDark("-active");
const handleClickRemove = () => setActiveLayerDark("");  

const [activeLayerDark,setActiveLayerDark] = useState("")

  return (
    <main className="app">
    <HeaderGame onClick={handleClickAdd}/>
    <HashtagGame/>
    <InputCheckbox id = "checkbox" value = "show" content = "Mostar eventos"/>
    <LayerDark className={activeLayerDark}>
        <InternalHeader onClick={handleClickRemove}/>
        <UserProfile/>
     </LayerDark>  
    </main>

  );
}

export default App;
