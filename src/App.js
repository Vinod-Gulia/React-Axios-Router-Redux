import React from "react";
import "./App.css";
import FirstComp from "./Components/FirstComp";
import QATeam from "./Components/QATeam";
import Get from "./Components/Get";

function App() {
  return (
    <div>
      {/* <FirstComp />
      <QATeam /> */}
      <Get className="App" />
    </div>
  );
}

export default App;
