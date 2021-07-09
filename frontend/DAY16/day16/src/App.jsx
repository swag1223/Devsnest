import Card from './components/card';
import './App.css';
import Chessboard from './components/Chessboard'


function App() {
    return (
        <div className="app">
            <div className="first">
                <Card />

            </div>
            <div className="second">
                <Chessboard/>

            </div>
            
        
        </div>
    )
}

export default App;