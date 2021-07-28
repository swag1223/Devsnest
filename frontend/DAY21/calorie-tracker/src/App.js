import Card from './components/Card';
import { useState } from 'react';
import './App.css';

function App() {
  const [tracker, setTracker] = useState([]);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");



  function inputHandler(e) {
    // console.log(e.target.value);
    setValue1(e.target.value);
    // console.log(value);

  }
  function addHandler() {
    // console.log(value1);
    setTracker([...tracker, {foodItem :value1, calorie:value2}]);
    // console.log(tracker);
    setValue1("");
    setValue2("");
  }

  function calorieHandler(e) {
    // console.log(e.target.value);
    setValue2(e.target.value);
  }


 
  return (
    <div className="App">
      <h1>Calorie Tracker</h1>
      <div className="get-input">
        <input type="text" required placeholder="Food item" onChange={inputHandler} value={value1}/>
        <input type="number" required placeholder="calories consumed" onChange={calorieHandler} value={value2} />
        <button onClick={addHandler}>Add</button>

      </div>

      {tracker.map((ele , index) => (
        <Card data={ele.foodItem}
          calorie={ele.calorie}
          key={index}
          tracker= {tracker}
          setTracker={setTracker}
          idx={index}
        />
        
      ))}
     
    </div>
  );
}

export default App;
