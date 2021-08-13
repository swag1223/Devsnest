import Input from './components/Inputs';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TODO List</h1>
      <Input />
      <TodoList/>
      
    </div>
  );
}

export default App;
