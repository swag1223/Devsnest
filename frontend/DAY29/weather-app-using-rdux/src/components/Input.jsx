import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCity, updatePlaceData } from "../redux/actions/index";
const Input = () => {
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();
  return (
    <div className="search-box ">
      <input
        type="text"
        placeholder="Search City.."
        value={city}
        onChange={(e) => {
          dispatch(updateCity(e.target.value));
        }}
      />
      <button className="btn" onClick={() => dispatch(updatePlaceData(city))}>
        Search
      </button>
    </div>
  );
};

export default Input;
