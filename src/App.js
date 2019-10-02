import React, { useState } from "react";
import "./App.css";
import HeaderGame from "./components/HeaderGame";
import LayerDark from "./objects/LayerDark";
import InternalHeader from "./components/InternalHeader";
import UserProfile from "./components/UserProfile";
import WrapperHashtagHistory from "./components/WrapperHashtagHistory";

const App = () => {
  const [activeLayerDark, setActiveLayerDark] = useState("");

  
  const handleClickAdd = () => setActiveLayerDark("-active");
  const handleClickRemove = () => setActiveLayerDark("");
 

  return (
    <main className="app" id="main">
      <HeaderGame onClick={handleClickAdd} />
      <WrapperHashtagHistory/>
      <LayerDark className={activeLayerDark}>
        <InternalHeader onClick={handleClickRemove} />
        <UserProfile />
      </LayerDark>
    </main>
  );
};

export default App;
