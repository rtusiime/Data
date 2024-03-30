import React from 'react';

const WeatherCard = ({ city, weather }) => {
  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <h2>{city}</h2>
      {/* <p>Temperature: {weather.main.temp}°F</p> */}
      <p>Condition: {weather.weather[0].main}</p>
      <p>Description: {weather.weather[0].description}</p>
      {/* Add more weather details as needed */}
    </div>
  );
};

export default WeatherCard;
