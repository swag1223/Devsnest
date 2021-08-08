
import './App.css';
import { Route, Switch ,Redirect } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { useState } from 'react';
import LoginContext from './components/Context';

function App() {
  const [login , setLogin] = useState(false)
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <LoginContext.Provider value={{ login, setLogin }}>
          <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/"/>
        </LoginContext.Provider>
        
      </Switch>
    </div>
  );
}

export default App;
