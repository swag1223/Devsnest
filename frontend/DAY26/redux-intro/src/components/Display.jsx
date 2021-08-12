import { useSelector } from "react-redux";
import './display.css';

function DisplayData() {
    //we can access whole store using useSelector hook
     const username = useSelector((state) => state.username);
     const email = useSelector((state) => state.email);
    return (
        <div className="data">
            <h1>DATA</h1>
            <p><b>Username: </b> {username} </p>
            <p><b>Email: </b> {email} </p>
           
        </div>
  )
}

export default DisplayData;
  
    
