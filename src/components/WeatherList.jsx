import React from 'react';

const WeatherList = ({ weatherData }) => (
  <div className="weather-list">
    {weatherData.map((data, index) => (
      <p>List</p>
      // <WeatherCard key={index} city={data.city} weather={data.weather} />
    ))}
  </div>
);


export default WeatherList;
