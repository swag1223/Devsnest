import {useState} from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "./redux/reducers";
import { addNote, deleteNote } from "./redux/actions";

function App() {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();

  const[input, setInput] = useState<string>("")
  return (
    <div className="App">

      <input type="text" placeholder="Add Notes" value={input} onChange={(e) => {
        setInput(e.target.value)
      }} />

      <button onClick={() => {
        dispatch(addNote(input));
        setInput("");
      }}>Add</button>

      <div className="notes">
        {!notes.length ? (
          <h2>Start Taking Notes</h2>
        ) : (
          <div>
            {notes.map((note: string, index: number) => (
              <div className="notes-item" key={index}>
                <h3>{note}</h3>
                <button
                  className="dlt-btn"
                  onClick={() => dispatch(deleteNote(index))}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
  
}

export default App;
