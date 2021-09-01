import React , {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {useDispatch , useSelector} from "react-redux"
import { updateUser } from './Redux/Actions';

function App() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUser());
    
  }, [])
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
