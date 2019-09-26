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
  const [activeHistoryGame,setHistoryGame] = useState ("");

const handleClickAdd = () => setActiveLayerDark("-active");
const handleClickRemove = () => setActiveLayerDark("");  

const handleClickHistory = () => {
  setHistoryGame((old) => old === "-active" ? "" : "-active" )  
}
    


  return (
   
    <main className="app" id="main">
    <HeaderGame onClick={handleClickAdd}/>
    <HashtagGame/>
    <InputCheckbox onClick={handleClickHistory} id = "checkbox" value = "show" content = "Mostar eventos"/>
    <HistoryGame className={activeHistoryGame}/>
   <LayerDark className={activeLayerDark}>
        <InternalHeader onClick={handleClickRemove}/>
        <UserProfile/>
     </LayerDark>  
    </main>
 
  );
}

export default App;
