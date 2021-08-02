
import './App.css';
import useDarkMode from './hooks/DarkMode';
import "./hooks/DarkMode.css";

function App() {
  const DarkMode = useDarkMode();
  return (
    <div className="App">
      {DarkMode}
     
    </div>
  );
}

export default App;
