import Card from "./components/Caloriecard";
import Chessboard from './components/Chessboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="first">
          <Chessboard/>
      </div>
      <div className="second">
        <Card/>


      </div>
    </div>
  );
}

export default App;
