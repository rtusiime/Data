import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY_OPEN;

const WeatherDetail = () => {
  const params = useParams();
  const [weatherDetails, setWeatherDetails] = useState(null);

  useEffect(() => {
    const getWeatherDetail = async () => {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=${API_KEY}&units=metric`;

      try {
        const response = await fetch(weatherUrl);
        const json = await response.json();
        setWeatherDetails(json);
      } catch (error) {
        console.error("Failed to fetch weather details:", error);
      }
    };

    getWeatherDetail();
  }, [params.lat, params.lon]);

  if (!weatherDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Weather in {weatherDetails.name}</h1>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}.png`}
          alt={weatherDetails.weather[0].description}
        />
        <p>{weatherDetails.weather[0].description}</p>
      </div>
      <br />
      <div>
        <strong>Temperature:</strong> {weatherDetails.main.temp} °C
      </div>
      <div>
        <strong>Pressure:</strong> {weatherDetails.main.pressure} hPa
      </div>
      <div>
        <strong>Humidity:</strong> {weatherDetails.main.humidity}%
      </div>
      <div>
        <strong>Wind Speed:</strong> {weatherDetails.wind.speed} m/s
      </div>
    </div>
  );
};

export default WeatherDetail;