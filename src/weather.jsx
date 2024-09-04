import React, { useState } from 'react';
import './App.css'; // Ensure you import your styles

function Weather({ weatherData }) {
  const { name, main, weather } = weatherData;
  const [isCelsius, setIsCelsius] = useState(true);

  const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="container">
      <div className="weather-box">
        <h2>{name}</h2>
        <p>{weather[0].description}</p>
        <p>
          Temperature:  
          {isCelsius ? ` ${main.temp}°C` : ` ${celsiusToFahrenheit(main.temp).toFixed(1)}°F`}
        </p>
        <p>Humidity: {main.humidity}%</p>
        <button onClick={toggleTemperatureUnit}>
          Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
        </button>
      </div>
    </div>
  );
}

export default Weather;
