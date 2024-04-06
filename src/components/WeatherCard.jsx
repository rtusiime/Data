import React from 'react';
import { Link } from "react-router-dom";
import fastWind from '../assets/fast-wind.svg';
import heavyRain from '../assets/heavy-rain.svg';
import midRain from '../assets/mid-rain.svg';
import './WeatherCard.css';

const WeatherCard = React.memo(({ city, forecast, state, index}) => {
  if (!forecast) {
    return <div className="weather-card">Loading...</div>;
  }
const images = [midRain, heavyRain, fastWind];

  const todayForecast = forecast[0]; // Assuming forecast is an array of periods.
  // console.log("forecast: ", forecast);

  return (
    <Link to={`/weatherDetails/${city}, ${state}`} state={forecast} className="weather-card-link">
      <div className="weather-card">
        <div className='left-side'>
          <div className="weather-temp">{todayForecast.temperature}°</div>
          <div className="weather-city">{city}, {state}</div>
        </div>
        <div className='right-side'>
          <div className="weather-icon">
            <img src={images[todayForecast.temperature>60?0:todayForecast.temperature>40?1:2]} alt="Weather" />
          </div>
          <div className="weather-forecast">{todayForecast.shortForecast}</div>
        </div>
      </div>
    </Link>
  );
});

export default WeatherCard;
