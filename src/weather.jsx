import React from 'react';

function Weather({ weatherData }) {
  const { name, main, weather } = weatherData;

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <h2>{name}</h2>
      <p>{weather[0].description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
}

export default Weather;