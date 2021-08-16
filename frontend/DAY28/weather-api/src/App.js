// import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [city, setCity] = useState("Amritsar");
  const [placeData, setPlaceData] = useState(null);
  const updataPlaceData = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=dae9b6da211246ffbbf84549211608&q=${city}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPlaceData(data);
      });
    
  }
  useEffect(() => {
    updataPlaceData();
    
  },[])
  if (!placeData) {
    return(<div>loading</div>)
  }
  return (
    <div className={placeData.current.temp_c < 25 ? 'App' : 'App warm'}>
      <div className="main">
          <div className="search-box ">
            <input type="text"
               placeholder="Search City.."
              value={city}
              onChange={(e) => {
              setCity(e.target.value)
            }} />
            <button className="btn" onClick={updataPlaceData}>Submit</button>
        </div>
        
        <div className="weather-box">
          <div className="card">
            {placeData.location ? (
              <div className="container">
                <img src={placeData.current.condition.icon} alt="icon" />
                <div className="temperature">{placeData.current.temp_c}°</div>
                <div className="location">{placeData.location.name}</div>
                <div className="country">{placeData.location.country}</div>
                <div className="properties">
                  <div className='col-1'>
                    <div className='title'>Wind Now</div>
                    <div className='data'>{placeData.current.wind_kph}
                      <span className='unit'>km</span>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='title'>Humidity</div>
                    <div className='data'>{placeData.current.humidity}
                      <span className='unit'>%</span>
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='title'>Precipitation</div>
                    <div className='data'>{placeData.current.precip_in}
                      <span className='unit'>%</span>
                    </div>
                  </div>
                  
                </div>
                
              </div>) : (
              <h2>Place Not Found</h2>
            )}
          </div>
        </div>
  
      </div>
    </div>
   
  );
}

export default App;
