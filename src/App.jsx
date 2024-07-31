import React, { useState } from 'react';
import axios from 'axios';
import Weather from './weather';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '090a3ccdc17d165a8d6de4424c11b477';

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (city.trim() === '') {
      setError('Please enter a city name.');
      return;
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('City not found. Please try another city.');
      setWeatherData(null);
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Weather App</h1>
      <form onSubmit={fetchWeather}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px', marginLeft: '10px' }}>
          Get Weather
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
