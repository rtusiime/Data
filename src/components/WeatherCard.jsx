import React from 'react';
import { Link } from "react-router-dom";
// import './WeatherCard.css'; // Ensure this is uncommented if you have the CSS file.

const WeatherCard = React.memo(({ city, weather, lat, lon }) => { // Include lat and lon as props.
  if (!weather) {
    return <div className="weather-card">Loading...</div>;
  }

  // Use the first item in the daily array for today's weather summary, if that's your intention.
  const todayWeather = weather[0]; // Assuming `weather` is an array of daily forecasts.

  return (
    <Link to={`/weatherDetails/${city}`} className="weather-card-link">
      <div className="weather-card">
        <h2>{city}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${todayWeather.weather[0].icon}.png`}
          alt={todayWeather.weather[0].description}
          className="weather-icon" />
        <div className="weather-info">
          <p>Condition: {todayWeather.weather[0].main}</p>
          <p>Description: {todayWeather.weather[0].description}</p>
          <p>Temp: {Math.round(todayWeather.temp.day)}°C</p> {/* Assuming `temp.day` for daily temp */}
          {/* Add more weather details as needed */}
        </div>
      </div>
    </Link>
  );
});

export default WeatherCard;
