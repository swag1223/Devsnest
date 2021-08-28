  
import React from "react";
import Input from "./components/Input";
import WeatherCard from "./components/WeatherCard";
import './App.css';


function App() {
  
  return (
    <div className="App">
      <div className="main">
        <Input />
        <WeatherCard/>

      </div>
      
    </div>
  );
}

export default App;