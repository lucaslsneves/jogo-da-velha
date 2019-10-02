import React, { useState } from "react";
import "./App.css";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame";
import InputCheckbox from "./objects/InputCheckbox";
import LayerDark from "./objects/LayerDark";
import InternalHeader from "./components/InternalHeader";
import UserProfile from "./components/UserProfile";
import HistoryGame from "./components/HistoryGame";
import WrapperHashtagHistory from "./components/WrapperHashtagHistory";

const App = () => {
  const [activeLayerDark, setActiveLayerDark] = useState("");
  const [history, setHistory] = useState(["Início"]);
  const [active,setActive] = useState(false);
  const handleClickAdd = () => setActiveLayerDark("-active");
  const handleClickRemove = () => setActiveLayerDark("");
 
  const addHistory = (player,id) => {
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
  };

  const showHideHistory = () =>{
      setActive((old) => old ? false : true);
      
  }

  const changeHistory = key =>{
    setHistory(old => history.slice(0,key+1))
  }

  return (
    <main className="app" id="main">
      <HeaderGame onClick={handleClickAdd} />
      
      <WrapperHashtagHistory active={active}>
        <HashtagGame callback={addHistory} />
        <InputCheckbox onClick={showHideHistory} id="checkbox" value="show" content="Mostar eventos" />
        <HistoryGame onClick={changeHistory} history={history} />
      </WrapperHashtagHistory>

      <LayerDark className={activeLayerDark}>
        <InternalHeader onClick={handleClickRemove} />
        <UserProfile />
      </LayerDark>
    </main>
  );
};

export default App;
