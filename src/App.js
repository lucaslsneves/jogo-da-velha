import React,{ useState } from 'react';
import './App.css';
import HeaderGame from './components/HeaderGame';
import HashtagGame from './components/HashtagGame';
import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';
import InternalHeader from './components/InternalHeader';
import UserProfile from './components/UserProfile';
import HistoryGame from './components/HistoryGame';


const App = () => {
  const [activeLayerDark,setActiveLayerDark] = useState("");


const handleClickAdd = () => setActiveLayerDark("-active");
const handleClickRemove = () => setActiveLayerDark("");  

  
  return (
   
    <main className="app" id="main">
    <HeaderGame onClick={handleClickAdd}/>
    <HashtagGame/>
    <InputCheckbox  id = "checkbox" value = "show" content = "Mostar eventos"/>
    <HistoryGame/>
   <LayerDark className={activeLayerDark}>
        <InternalHeader onClick={handleClickRemove}/>
        <UserProfile/>
     </LayerDark>  
    </main>
 
  );
}

export default App;
