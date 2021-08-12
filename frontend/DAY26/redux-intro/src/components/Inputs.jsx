import { useDispatch } from "react-redux";
import { getUsername, getEmail } from "../redux/actions/actionsindex";
import './inputs.css';

function Inputs() {
  const dispatch = useDispatch();
  return (
    <div className="inputs">
      <h1>REDUX FORM</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          dispatch(getUsername(e.target.value));
        }}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          dispatch(getEmail(e.target.value));
        }}
      />
    </div>
  );
}


export default Inputs;